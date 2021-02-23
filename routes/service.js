import express from "express";
import ServicesController from "../controller/ServicesController.js";
var services = new ServicesController();
router.get("/", services.index);
export default router;