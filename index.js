const express =require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json')

const recipes = require('./data/recipe.json')
const alRecipes = require('./data/allRecipes.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Food Forever is running')
});
app.get('/alRecipes', (req, res) =>{
    console.log(alRecipes)
    res.send(alRecipes)
});
app.get('/alRecipes/:id', (req, res) =>{
    const id =parseInt(req.params.id);
    
        const chef_recipe = recipes.find(recipe =>recipe.recipe_id === id);
        res.send(chef_recipe)
})
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