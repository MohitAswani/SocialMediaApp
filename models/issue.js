const fs=require('fs');
const path=require('path');
const file=require('../data/issues.json');
const p=path.join(
    path.dirname(require.main.filename),
    'data',
    'issues.json'
);

const getProductsFromFile=cb=>{
    cb(file);
};

module.exports=class Product{
    constructor(ip){
        this.issue_picture=ip
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this);

            fs.writeFileSync(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}