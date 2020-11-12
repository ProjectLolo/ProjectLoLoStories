const fs = require("fs");
const csv = require("csvtojson");
const path = require("path");
const filePath = path.join(__dirname, "20201111_Content_table_v2 - Sheet2.csv");

console.log("my filepath", filePath);

csv()
  .fromFile(filePath)
  .then((jsonArrayObj) => {
    // console.log("parsed csv", jsonArrayObj);
    first10Indexes = jsonArrayObj.slice(0, 10);
    const formattedArrayObj = first10Indexes.map((story) => {
      const narrativeParagraphed = story.Narrative.split("\n");
      const test = { ...story, Narrative: narrativeParagraphed };
      console.log(test);
    });
  });
