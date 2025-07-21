const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient({
  omit: {
    user: {
      password_hash: true
    }
  }
});
const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello, World!");
});
