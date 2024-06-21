const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let employees = [];
let idCounter = 1;

app.get('/employee', (req, res) => {
  res.send(employees);
});

app.post('/employee', (req, res) => {
  const newEmployee = { ...req.body, id: idCounter++ };
  employees.push(newEmployee);
  res.status(201).send(newEmployee);
});

app.put('/employee/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = req.body;
    res.send(employees[index]);
  } else {
    res.status(404).send('Employee not found');
  }
});

app.delete('/employee/:id', (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter(emp => emp.id !== id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
