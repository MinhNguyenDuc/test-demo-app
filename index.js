const express = require('express')
var path = require('path');
var fs = require('fs');
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))