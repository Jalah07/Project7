const express = require('express');

const router = express.Router();
const controller = require('../controllers/post');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post("/", auth, multer, controller.createPost);
router.get("/:id", auth, controller.getPost);
router.get("/", auth, controller.getPosts);
router.put("/:id", auth, multer, controller.updatePost);
router.delete("/:id", auth, controller.deletePost);
// router.post("/:id/like", auth, controller.likeSauce);

module.exports = router;