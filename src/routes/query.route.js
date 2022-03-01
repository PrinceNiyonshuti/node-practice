/** @format */

import express from "express";
import { saveQuery } from "../controllers/query.controller";

const router = express.Router();

router.post("/", saveQuery);

export default router;
