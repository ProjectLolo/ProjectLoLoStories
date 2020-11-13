const { Router } = require("express");
const { csvParser } = require("../utils/csvParser");
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

router.post("/", async (req, res, next) => {
  if (!tripTitle || !startDate || !userId) {
    return res.status(400).send("Please fill in all the required fields");
  }

  try {
    const createStoryTrip = await Story.create({
      tripTitle,
      startDate,
      endDate,
      userId,
    });
    const newTrip = await Trip.findByPk(createNewTrip.id, {
      include: { model: Post, include: { model: Picture } },
    });
    res.send(newTrip);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
