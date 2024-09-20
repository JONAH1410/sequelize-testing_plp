const { sequelize } = require('./models'); 
const express = require('express');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for hashing
const app = express(); 

// Corrected Port Definition
const port = 3000;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send("Hello, World!");
});
app.get('/',expense,  (req, res) => {
  try  { 
      const expense = await Expense.findAll(); 
      res.json(expense); 
      } catch (error) { 
        console.error(error); 
        res.status(500).json({ message: 'Error fetching expenses' }); 
        } 
        app.listen(port, () => { 
           console.log(`Server is running on port ${port}` 
                        

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body; 
    const hurshedpassword  = await bcrypt.hash(password, 10);

    const user = await sequelize.models.user.create({ name, email, password:hurshedpassword });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.post('/users', async ( req, res)   => { 
  try { 
    const { salary, description } = req.body; 
    const Expenses = await sequelize.models.Expenses.create({salary, description }); 
    res.json(Expenses);
     
     } catch (error) { 
      console.error(error); 
       res.status(500).json({ error: 'Failed to create user' }); 
       } 
       \end{code} 
app.delet ('/expenses/:id', async (req, res) => { 
  try { 
     const id = req.params.id;
     const expenses = await sequelize.model.expenses.destroy({where:(id)}); 
     res.json(Expenses); 

app.patch ('/expenses/:id', async (req, res) => { 
  try {
     const id = req. params.id;
     const (salary, description) = req.body
     const Expenses = await sequelize.models.Expenses.create({salary, description });
     res.json(Expenses);
  } 
));            

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);

  sequelize.authenticate()
    .then(() => {
      console.log("Database connected.");
    })
    .catch(error => {
      console.error("Error connecting to the database:", error);
      process.exit(1);
    
    ) 
    });
