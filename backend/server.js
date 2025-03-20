const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/save-recipe", (req, res) => {
  const recipe = req.body;
  const filePath = path.join(__dirname, "data", "recipes.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    let recipes = [];
    if (data) {
      recipes = JSON.parse(data);
    }

    const recipeExists = recipes.find((r) => r.id === recipe.id);
    if (recipeExists) {
      return res.status(400).json({ message: "Recipe already exists" });
    }

    recipes.push(recipe);

    fs.writeFile(filePath, JSON.stringify(recipes, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.status(200).json({ message: "Recipe saved successfully" });
    });
  });
});

app.get("/getfavourites", (req, res) => {
  const filePath = path.join(__dirname, "data", "recipes.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Error reading file" });
    }

    let recipes = [];
    if (data) {
      recipes = JSON.parse(data);
    }

    res.status(200).json(recipes);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
