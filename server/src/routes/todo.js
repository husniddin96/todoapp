require('../db')

const router = require('express').Router();
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

router.post('/', async (req, res) => {
    const todo = req.body;
    console.log('req.body', req.body);
    await Todo.create(todo);
    const todos = await Todo.find();
    res.json({ todos });
})

router.get('/', async (req, res) => {
    let todos;

    if (req.query.sort == -1) {
        todos = await _getTodos(-1)
    } else {
        todos = await _getTodos();
    }
    console.log({ todos });
    res.json({ todos });
});

router.get('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json({ todo });
});

router.put('/:id', async (req, res) => {
    const todo = req.body;
    await Todo.findByIdAndUpdate(req.params.id, { $set: { ...todo } });
    res.json({ todos: await _getTodos() });
});

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ todos: await _getTodos() });
});

_getTodos = (sort = null) => {
    return sort == -1 ? Todo.find().sort({ createdAt: -1 }) : Todo.find();
}

module.exports = router;
