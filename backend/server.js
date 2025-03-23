const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
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

app.post("/save-favorite", (req, res) => {
  const favourite = req.body;
  const filePath = path.join(__dirname, "data", "favorites.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    let favRecipes = [];
    if (data) {
      favRecipes = JSON.parse(data);
    }

    const favouriteExists = favRecipes.find(
      (r) => r.recipeId === favourite.recipeId
    );
    if (favouriteExists) {
      return res.status(400).json({ message: "Recipe already exists" });
    }

    favRecipes.push(favourite);

    fs.writeFile(filePath, JSON.stringify(favRecipes, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.status(200).json({
        message: "Favourite saved successfully",
        id: favourite.recipeId,
      });
    });
  });
});

app.delete("/delete-favorite/:id", (req, res) => {
  const recipeId = parseInt(req.params.id);

  const filePath = path.join(__dirname, "data", "favorites.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    let favRecipes = [];
    if (data) {
      favRecipes = JSON.parse(data);
    }
    const initialLength = favRecipes.length;
    favRecipes = favRecipes.filter((r) => r.recipeId !== recipeId);

    if (favRecipes.length === initialLength) {
      return res.status(404).json({ message: "Favorite not found." });
    }

    fs.writeFile(filePath, JSON.stringify(favRecipes, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.status(200).json({ message: "Favourite deleted successfully" });
    });
  });
});

app.get("/favorites", (req, res) => {
  const filePath = path.join(__dirname, "data", "favorites.json");

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
