const path=require('path');

const express=require('express');

const bodyParser=require('body-parser');

const errorController=require('./controllers/error');

const userRoutes=require('./routes/user');
const homeRoutes=require('./routes/home');

const app=express();

app.set('view engine','ejs');

app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/user',userRoutes);
app.use(homeRoutes);

app.use(errorController.getError);

app.listen(3000);