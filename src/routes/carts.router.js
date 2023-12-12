import { Router } from "express";
import {
    createNewCart,
    findCart,
    addProduct,
    getProductsInCart,
    updateProductQuantity,
    removeProductFromCart,
    removeAllProductsFromCart,
    updateAllProductsInCart,
    getAllCartsData,
    removeCartById
} from "../controllers/carts.controller.js";

const router = Router();

router.get("/", getAllCartsData);
router.post("/", createNewCart);

router.get("/:idCart", findCart);
router.post("/:idCart/products/:idProduct", addProduct);
router.get("/:idCart/products", getProductsInCart);
router.put("/:idCart/products/:idProduct", updateProductQuantity);
router.delete("/:idCart/products/:idProduct", removeProductFromCart);
router.delete("/:idCart", removeAllProductsFromCart);
router.put("/:idCart", updateAllProductsInCart);
router.delete("/:idCart", removeCartById);

export default router;
