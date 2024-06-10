import "dotenv/config";
import { logger } from './libs/logger.js';
import { app } from "./app/index.js";

const HOST_NAME = process.env.HOST_NAME ?? "localhost";
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, HOST_NAME, () => {
    logger.warn(`Server is serving on http://${HOST_NAME}:${PORT}`);
});
