const express =require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

const recipes = require('./data/recipe.json');

const italianCookingLearn =require('./data/italianCockingLearn.json');

const aboutChefLife = require('./data/aboutChefLife.json')


app.use(cors())

app.get('/', (req, res) =>{
    res.send('Food Forever is running')
});



app.get('/italianCookingLearn', (req, res) =>{
    res.send(italianCookingLearn)
});
app.get('/aboutChefLife', (req, res) =>{
    res.send(aboutChefLife)
});
app.get('/chefs/', (req, res) =>{
    res.send(chefs)
});

app.get('/recipes', (req, res) =>{
    res.send(recipes)
});
app.get('/chefs/:id', (req, res) =>{
    const id =parseInt(req.params.id);
    
        const chef_recipe = recipes.find(recipe =>recipe.chef_id === id);
        res.send(chef_recipe)
})

app.listen(port,() => {
    console.log(`Food Forever is running on port :${port}`)
})