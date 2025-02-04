import express from "express";
import {
  createRecipes,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import controlId from "../middleware/controlId.js";

const router = express.Router();

router.route("/api/v1/recipes").get(getAllRecipes).post(createRecipes);

router
  .route("/api/v1/recipes/:id")
  .get(controlId, getRecipe)
  .delete(controlId, deleteRecipe)
  .patch(controlId, updateRecipe);

export default router;
