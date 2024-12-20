const express = require('express');
const router = express.Router();

// /api/v1/posts GET ALL POSTS

router.get("/", (req, res) => {
  res.json("ALL THE postS")
})

// /api/v1/posts/:post_id GET POST BY ID

router.get("/:post_id", (req, res) => {
  res.json("THE SINGULAR post")
})

module.exports = router;
