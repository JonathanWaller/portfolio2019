const path = require('path')
require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');

const port = 3008;

//initialize express
const app = express();

//express static build
app.use(express.static(__dirname + '/assets'));
app.use(express.static(`${__dirname}/../build`));
app.use(express.static(__dirname + '/assets'));

//jw build
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

//body-parser
app.use(json());

app.listen(port, () => {
    console.log(`Portfolio server listening on port ${port}`);
});
