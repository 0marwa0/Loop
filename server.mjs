require("@babel/register")({
  presets: ["@babel/preset-react"],
});
import App from "./src/App.js";
import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
//const App = require("./src/App"); // Adjust the path as needed
//const ReactDOMServer = require("react-dom/server");
//const express = require("express");
//const React = require("react");
//
const app = express();

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(App));
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React SSR with Express</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="module" src="/dist/main.js"></script>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
