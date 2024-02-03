//============== Number of Products Per Category
db.products.aggregate([
{
    $group:
    {
        _id: "$category",
        numberOfProducts: {
            $count: {}
        }
    }
}
])

//========== Max Product Price Per Category
db.products.aggregate([
{
    $group:
    {
        _id: "$category",
        maxProductPrice: {
            $max: "$price"
        }
    }
}
])

//========= Ahmed Orders and Products ===========
db.users.aggregate([
{
    $match: {
        name: {
            $eq: "ahmed"
        }
    }
},
{
    $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "userId",
        as: "orders"
    }
},
{
    $lookup: {
        from: "products",
        localField: "orders.productsIds",
        foreignField: "_id",
        as: "OrderProducts"
    }
},
    
])
    
//============= Ahmed Highest Order Price
db.users.aggregate([
    {
        $match: {
            name: "ahmed"
        }
    },
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "orders"
        }
    },
    {
        $unwind: "$orders"
    },
    {
        $lookup: {
            from: "products",
            localField: "orders.productsIds",
            foreignField: "_id",
            as: "orderProducts"
        }
    },
    {
        $unwind: "$orderProducts"
    },
    {
        $group: {
            _id: {
                userId: "$_id",
                orderId: "$orders._id"
            },
            totalPrice: {
                $sum: {
                    $multiply: ["$orderProducts.price", "$orderProducts.quantity"]
                }
            }
        }
    },
    {
        $group: {
            _id: "$_id.userId",
            maxOrderPrice: { $max: "$totalPrice" }
        }
    }
])
