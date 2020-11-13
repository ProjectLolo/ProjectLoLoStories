const fs = require("fs");
const csv = require("csvtojson");
const path = require("path");
const fileName = "stories.csv";
// console.log("my filepath", filePath);

const csvParser = async (fileName) => {
  const filePath = path.join(__dirname, fileName);
  return await csv()
    .fromFile(filePath)
    .then((jsonArrayObj) => {
      const formattedArrayObj = jsonArrayObj.map((story) => {
        const narrativeParagraphed = story.Narrative.split("\n");
        return { ...story, Narrative: narrativeParagraphed };
      });
      return formattedArrayObj;
    });
};

module.exports = { csvParser };
