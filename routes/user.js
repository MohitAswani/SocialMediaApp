const path=require('path');

const express=require('express');

const issuesController=require('../controllers/issues');

const router=express.Router();

router.get('/add-issue',issuesController.getAddIssue);

router.post('/add-issue',issuesController.postAddProduct);

module.exports=router;