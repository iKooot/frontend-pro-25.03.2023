import { Router } from "express";
import { TodosService } from "./service.js";

const todoRouter = Router();
const todoService = new TodosService();

todoRouter.get("/todos", async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json(todos);
  } catch (e) {
    res.status(500).json({ error: "Can't get todos" });
  }
});

todoRouter.get("/todos/:id", async (req, res) => {
  try {
    const todo = await todoService.getTodo(req.params.id);
    if (!todo) {
      // If the service returns null, throw a Not Found error
      throw new Error("NotFound");
    }
    res.json(todo);
  } catch (e) {
    if (e.message === "NotFound") {
      res.status(404).json({ error: `Todo with id: '${req.params.id}' not found` });
    } else {
      res
          .status(500)
          .json({ error: `Can't get todo with id: '${req.params.id}'` });
    }
  }
});

todoRouter.post("/todos", async (req, res) => {
  try {
    const resp = await todoService.createTodo(req.body);
    res.json(resp);
  } catch (e) {
    res
        .status(500)
        .json({ error: `Can't create todo with id: '${req.body.id}'` });
  }
});

todoRouter.put("/todos/:id", async (req, res) => {
  try {
    const resp = await todoService.updateTodo(req.params.id, req.body);
    res.json(resp);
  } catch (e) {
    res
        .status(500)
        .json({ error: `Can't update todo with id: '${req.params.id}'` });
  }
});

todoRouter.delete("/todos/:id", async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.status(200).send("ok");
  } catch (e) {
    res
        .status(500)
        .json({ error: `Can't delete todo with id: '${req.params.id}'` });
  }
});

export { todoRouter };
