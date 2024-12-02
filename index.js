const fs = require('fs')

fs.rmdir('newdir',(err)=>{
    if(err) throw err;
    console.log('dir delet')
})