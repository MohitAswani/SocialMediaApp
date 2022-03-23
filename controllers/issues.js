const Product = require('../models/issue');
const Issues = require('../models/issue');

exports.getAddIssue = (req,res,next)=>{
    res.render('add_issue',{
        pageTitle:'Add Issue',
        path:'/user/add-issue'
    })
}

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.issue_picture);
    console.log(req.body.issue_picture);
    product.save();
    res.redirect('/');
}

exports.getIssues=(req,res,next)=>{
    Product.fetchAll(issues=>{
        console.log(issues);
        res.render('home',{
            issues:issues,
            pageTitle:'Home',
            path:'/'
        })
    })
}