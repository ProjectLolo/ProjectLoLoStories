const fs = require("fs");
const csv = require("csvtojson");
const path = require("path");

const csvParser = async (fileName) => {
  const filePath = path.join(__dirname, fileName);
  return await csv()
    .fromFile(filePath)
    .then((jsonArrayObj) => {
      const first10Indexes = jsonArrayObj.slice(0, 10);
      const separateStories = new Set();
      // replace first10Indexes with jsonArrayObj to parse the whole file
      const separateParagraphs = first10Indexes.map((story) => {
        separateStories.add(story["ID story"]);
        const narrativeParagraphed = story.Narrative.split("\n");
        return { ...story, Narrative: narrativeParagraphed };
      });

      const storiesIdArray = [...separateStories];

      const formattedArrayObj = storiesIdArray.map((storyId) => {
        const story = separateParagraphs.filter(
          (story) => parseFloat(story["ID story"]) === parseFloat(storyId)
        );
        return story;
      });
      console.log(formattedArrayObj);
      return formattedArrayObj;
    });
};

// formattedArrayObj is currently an array of arrays where each index is a story
// it should be reformatted to have the following structure:
// [
//   {
//     "ID story": 0.001,
//     "Name story": "A string",
//     "Content type": "Share",
//     CategoryId: 1,
//     CategoryName: "Fun",
//     pages: [
//       {
//         page: 1,
//         icon: "https://icon_url",
//         Narrative: ["paragraph 1", "paragraph 2"],
//       },
//       {
//         page: 2,
//         icon: "https://icon_url",
//         Narrative: ["paragraph 1", "paragraph 2"],
//       },
//     ],
//   },
//   {
//     "ID story": 0.002,
//     "Name story": "A string",
//     "Content type": "Share",
//     CategoryId: 1,
//     CategoryName: "Fun",
//     pages: [
//       {
//         page: 1,
//         icon: "https://icon_url",
//         Narrative: ["paragraph 1", "paragraph 2"],
//       },
//       {
//         page: 2,
//         icon: "https://icon_url",
//         Narrative: ["paragraph 1", "paragraph 2"],
//       },
//     ],
//   },
// ];

// csvParser(filePath).then((res) => console.log("my test", res));

module.exports = { csvParser };
