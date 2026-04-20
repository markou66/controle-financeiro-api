
let gastos = []

export const criarGasto = (req, res) => {
    const { descricao, valor } = req.body;

    if (!descricao || !valor) {
        return res.status(400).json({ erro: "Descrição e valor são obrigatórios" });
    }

    const novoGasto = {
        id: gastos.length + 1,
        descricao,
        valor: Number(valor)
    }

    gastos.push(novoGasto);
    res.status(201).json(novoGasto)
}

//listar gasto
export const listarGasto = (req, res) => {
    res.status(201).json(gastos)
}


//gasto total
export const gastoTotal = (req, res) => {
    const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
    res.status(200).json({ Total: total });
}