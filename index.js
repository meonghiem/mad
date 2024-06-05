require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
const logger = require("./utils/winston")
var db = require("./models")

const sequelize = db.sequelize


const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        sequelize.close()
    }
}

checkConnection()


const app = express();

const writeLog = {
    write: (message) => {
        logger.info(message)
    }
}

app.use(morgan('combined', { stream: writeLog }))


// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    const a = 1
    res.status(200).json({ message: "Welcome to bezkoder application." });
});

app.get("/login", async (req, res) => {
    console.log("logged in")
    const schema = 'nhatxz'

    // await sequelize.createSchema(schema, { logging: false })
    // const mapping = await db.Mapping.create({ schemaName: schema })
    // console.log(db)
    const schemas = await sequelize.showAllSchemas({ logging: false })
    // db.createTableSchema(__dirname + "/models/", schema)
    res.status(500).json({ message: "Logged successfully" });
})

app.get("/logged", async (req, res) => {

    // create table into schema
    await sequelize.query(`SET search_path TO nhatxz`)
    console.log(db)
    res.json({ message: "Logged successfully" });
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});