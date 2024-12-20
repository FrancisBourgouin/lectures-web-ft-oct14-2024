const express = require('express');
const router = express.Router();

// /api/v1/authors GET ALL AUTHORS

router.get("/", (req, res) => {
  res.json("ALL THE AUTHORS")
})

// /api/v1/authors/:author_id GET AUTHOR BY ID

router.get("/:author_id", (req, res) => {
  res.json("THE SINGULAR AUTHOR")
})

module.exports = router;
