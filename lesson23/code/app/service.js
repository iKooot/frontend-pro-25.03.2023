import { logger } from "../libs/logger.js";
import { TodoModel } from "./shema.js";
import mongoose from 'mongoose';
export class TodosService {
    async getTodos() {
        try {
            const todos = await TodoModel.find({});
            return todos;
        } catch (error) {
            logger.error("Error fetching todos:", error);
            throw error;
        }
    }

    async getTodo(id) {
        try {
            const todo = await TodoModel.findById(id);
            return todo;
        } catch (error) {
            logger.error("Error fetching todo:", error);
            throw error;
        }
    }

    async createTodo(todoData) {
        try {
            const todo = new TodoModel({
                _id: new mongoose.Types.ObjectId(),
                ...todoData,
            });
            const result = await todo.save();
            return result;
        } catch (error) {
            logger.error("Error creating todo:", error);
            throw error;
        }
    }

    async updateTodo(id, data) {
        try {
            const todo = await TodoModel.findByIdAndUpdate(id, data, { new: true });
            return todo;
        } catch (error) {
            logger.error("Error updating todo:", error);
            throw error;
        }
    }
    async deleteTodo(id) {
        try {
            const todo = await TodoModel.findByIdAndDelete(id);
            return todo;
        } catch (error) {
            logger.error("Error deleting todo:", error);
            throw error;
        }
    }
}
