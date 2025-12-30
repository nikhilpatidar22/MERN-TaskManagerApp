const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  updateStatus,
  updatePriority
} = require("../controllers/task");

const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/status", updateStatus);
router.patch("/:id/priority", updatePriority);

module.exports = router;
