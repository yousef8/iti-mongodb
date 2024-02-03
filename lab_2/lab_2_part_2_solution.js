//======== Q.1 ===============
db.books.aggregate([
{
    $match: {
        pageCount: {$gt: 0},
        publishedDate: {
            $gte: ISODate("2010-01-01T00:00:00.000Z"),
            $lte: ISODate("2010-12-31T00:00:00.000Z")
        }
    }
},
{
     $sort: {pageCount: -1}
},
{
    $unwind: "$authors"
},
{
    $match: { authors: "Tariq Ahmed"}
},
{
$count: "BooksPublishedByAhmedTarekIn2010Count"
}
])

//=============== Q.2 ====================
db.books.aggregate([
{
    $unwind: "$authors"
},
{
    $group: {
        _id: "$authors",
        name: {
            $first: "$authors"
        },
        booksPublishedCount: {$count: {}}
    }
},
{
    $project: { _id: false}
}
])