'use strict'

const mongoose = require('mongoose')

module.exports = (dbUrl) => mongoose.connect(dbUrl, {
	connectTimeoutMS: 60000,
	dbName: process.env.CLIENT_DB || "test"
})