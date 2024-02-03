# Lab 1 Solution

## Q.1

use FacultySystemDB

## Q.2 && Q.3

```js
db.student.insertOne({
    firstName: "Mina",
    lastName: "Nagy",
    age: 21,
    faculty: {
        name: "Engineering",
        address: "cairo"
    },
    grades: [
        {
            courseName: "C",
            grade: "A+",
            pass: true
        },
        {
            courseName: "C++",
            grade: "A+",
            pass: true
        },
    ],
    isFired: false
})

db.student.insertMany([
    {
        firstName: "Yousef",
        lastName: "Ghonim",
        age: 21,
        faculty: {
            name: "Engineering",
            address: "cairo",
        },
        grades: [
            {
                course: "C++",
                grade: "A",
                pass: true,
            },
            {
                course: "Python",
                grade: "A+",
                pass: true,
            }
        ],
        isFired: false,
    },
    {
        firstName: "Omar",
        lastName: "Ghonim",
        age: 19,
        faculty: {
            name: "Engineering",
            address: "cairo",
        },
        grades: [
            {
                course: "C",
                grade: "A+",
                pass: true,
            },
            {
                course: "C++",
                grade: "A+",
                pass: true,
            }
        ],
        isFired: false,
    }
])

```

## Q.4

### 1

```js
db.student.find({})
```

### 2

```js
db.student.find({ firstName: "Yousef" })
```

### 3

```js
db.student.find({ $or: [{ firstName: "Ahmed" }, { lastName: "Ahmed" }] })
```

### 4

```js
db.student.find({ firstName: { $ne: "Ahmed" } })
```

### 5

```js
db.student.find({ age: { $gte: 21 }, faculty: { $ne: null } })
```

### 6

```js
db.student.find({ firstName: "Yousef" },
    { firstName: true, lastName: true, isFired: true })
```

## Q.5

```js
db.student.updateOne({ firstName: "Yousef" }, { $set: { lastName: "Elsayed" } })
```

## Q.6

```js
db.student.deleteMany({ isFired: true })
```

## Q.7

```js
db.student.drop()
```

## Q.8

```js
db.dropDatabase()
```
