require('../db')

const router = require('express').Router();
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

router.post('/', async (req, res) => {
    const todo = req.body;
    console.log('req.body', req.body);
    await Todo.create(todo);
    res.json({ msg: 'success' });
})

router.get('/', async (req, res) => {
    let todos;
    let sort = {};
    
    if (req.query.sort && req.query.orderBy) {
        sort[req.query.sort] = req.query.orderBy === 'desc' ? -1 : 1;
        todos = await Todo.find().sort(sort);
    }else{
        todos = await Todo.find();
    }

    console.log({todos});
    res.json(todos);
});

router.get('/stats', async (req, res) => {
    const completedCount = await Todo.find({ isCompleted: true }).countDocuments();
    const unCompletedCount = await Todo.find({ isCompleted: false }).countDocuments();
    res.json({ completedCount, unCompletedCount });
});

router.get('/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
});

router.put('/:id', async (req, res) => {
    const todo = req.body;
    await Todo.findByIdAndUpdate(req.params.id, { $set: { ...todo } });
    res.json({ msg: 'success' });
});

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ msg: 'success' });
});

module.exports = router;
