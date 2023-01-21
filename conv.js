const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      const newObject =[] 
      object.forEach(data => {
    // increase data order count by 1
        
        const new_data = {
            coordinates: data.coordinates,
            name: data.name,
            population: data.population,
            country_code: data.country_code
        }
        newObject.push(new_data)
        if(newObject.length === object.length) {
            return cb && cb(null, newObject);
        }
      });
    } catch (err) {
      return cb && cb(err);
    }
  });
}
jsonReader("./public/assets/data/example.json", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    fs.writeFile("./public/assets/data/new.json", JSON.stringify(data), err => {
      if (err) console.log("Error writing file:", err);
    });
  });