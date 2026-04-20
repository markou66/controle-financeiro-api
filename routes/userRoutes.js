import { Router } from "express";
import { criarGasto, listarGasto, gastoTotal } from "../controllers/UserController.js"

const routes = Router()

routes.post("/gastos", criarGasto);
routes.get("/listar-gasto", listarGasto);
routes.get("/gasto/total", gastoTotal);

export default routes;
