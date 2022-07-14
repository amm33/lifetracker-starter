const express = require("express");
const Activity = require("../models/activity");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const activities = await Activity.listActivityForUser({
      user_id: req.headers.user_id,
    });
    return res.status(200).json({ activities });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
