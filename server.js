const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname)));

// Serve static files from the node_modules directory
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')));

// Serve the preline and aos files from their respective directories
app.use('/preline', express.static(path.join(__dirname, '/node_modules/preline/dist/')));
app.use('/aos', express.static(path.join(__dirname, '/node_modules/aos/dist/')));

// Serve the Bootstrap Icons directory
app.use('/icons', express.static(path.join(__dirname, '/node_modules/bootstrap-icons/font/')));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});