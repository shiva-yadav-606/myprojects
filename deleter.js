const fs=require ('fs');
const path = require('path');
let location='./'
fs.readdir(location,'utf-8',(err,data)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
        console.log('No.of items = '+data.length);
        // data.forEach(Element=>{
        //     fs.rm(location+'/'+Element,{ recursive: true, force: true },(err)=>{
        //         console.log(Element+' deleted !');
        //     })
        // })
    }
})
