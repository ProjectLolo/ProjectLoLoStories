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
  const { fileName } = req.body;
  if (!fileName) {
    return res.status(400).send("Please fill in all the required fields");
  }

  const storiesJSON = await csvParser(fileName).then((res) => res);

  // console.log("untouched", storiesJSON);
  storiesJSON.map(async (story) => {
    // console.log(story);
    try {
      // once storiesJSON has the proper format, create newStory
      // const newStory = await Story.create({
      //   title: story["Name story"],
      //   categoryId: story.CategoryId,
      // });
      // story is created, proceed to create the pages of each story
      // const createPagesPromises = story.pages.map(
      //   async (page) =>
      //     await Page.create({
      //       storyId: newStory.id,
      //       page: page.page,
      //       content: page.Narrative.join("\n"),
      //       image: story.icon,
      //     })
      // );
      // await Promise.all(createPagesPromises);
    } catch (error) {
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }
  });

  //   try {
  //     const getStories = await Story.findAll({
  //       include: Page,
  //     });

  //     if (!getStories) {
  //       res.status(404).send("No stories found");
  //     } else {
  //       res.json(getStories);
  //     }
  //   } catch (e) {
  //     next(e);
  //   }
});

module.exports = router;
