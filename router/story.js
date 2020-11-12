const { Router } = require("express");

const router = new Router();
const Story = require("../models").story;
const Page = require("../models").page;

router.get("/", async (req, res, next) => {
  try {
    const getStories = await Story.findAll({
      include: Page,
    });

    if (!getStories) {
      res.status(404).send("No stories found");
    } else {
      res.json(getStories);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
