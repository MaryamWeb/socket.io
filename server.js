const express = require('express');
const app = express();
const port = 7000;

const server = app.listen(port, () => console.log(`Server  runing on port ${port}`));

