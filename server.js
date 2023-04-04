const mysql = require("mysql2/promise");

const insertIntoDB = async () => {
    const connection = await mysql.createConnection({
        host: "sql9.freemysqlhosting.net",
        user: "sql9610911",
        password: "NaSUMz2EYi",
        database: "sql9610911",
        port: 3306,
    })

    try {
        await connection.query(
            "INSERT INTO teamMembers (id,FirstName,LastName,Email,Location,Role,Application,ProfilePicture) VALUES('1','yesmar','grullon','grullon.y@live.com','new york','admin','all','/some/url')"
        )
        console.log("inserted!")
    } catch (e) {
        console.log(e)
    }
}

insertIntoDB();