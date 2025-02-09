import express from "express";
import {
  createRecipes,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import controlId from "../middleware/controlId.js";

// Router > server.js dosyası dışarısında route tanımı yapmamıza olanak sağlar.
const router = express.Router();

//oluşturduğumuz routerın endpoint/route/yol larını  ve istek gelince çalışacak fonksiyonları belirle
router.route("/api/v1/recipes").get(getAllRecipes).post(createRecipes);

router
  .route("/api/v1/recipes/:id")
  .get(controlId, getRecipe)
  .delete(controlId, deleteRecipe)
  .patch(controlId, updateRecipe);

//serverda kullanmak için routerı export et
export default router;
