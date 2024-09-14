const fs = require("fs");

function readJsonFile(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (parseError) {
      console.error(parseError);
      callback(parseError, null);
    }
  });
}

readJsonFile("./meet.json", (err, jsonData) => {
  if (err) {
    console.error("Failed to read or parse JSON file:", err);
    return;
  }

  // Create an array to hold the filtered data
  const filteredData = jsonData.map(item => {
    const { id, name, html_url, description } = item;
    return { id, name, html_url, description };
  });

  // Log the filtered data
  console.log(JSON.stringify(filteredData, null, 0));
});
