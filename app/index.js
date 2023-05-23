const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()

module.exports = class Application {
    constructor(options) {
        this.configServer()
        this.configDatabase()
        this.setConfig()
        this.setRoutes()
    }
    configServer() {
        app.listen(3000, (err) => {
            if (err) console.log(err)
            console.log('Server Run on Port 3000 ...')
        })
    }
    setConfig() {
        app.use(express.static(__dirname + '/public'))
        app.set('view engine', 'ejs')
        app.set('views', path.join(__dirname, 'resource/views'))
        app.use(expressLayouts)
        app.set('layout', 'master')
        app.set('layout extractScripts', true)
        app.set('layout extractStyles', true)
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

    }
    async configDatabase() {
        // global.Promise = mongoose.Promise;
        await mongoose.connect('mongodb://127.0.0.1/my_database');
    }

    setRoutes() {
        app.use(require('./routes'))
    }
}