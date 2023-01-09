import express from "express";
import { InstagramController } from "../controllers/instagram-controller";

const router = express.Router();

const instagramController = new InstagramController();

router.get("/instagram/:username", instagramController.getUserLastPosts);

export default router;