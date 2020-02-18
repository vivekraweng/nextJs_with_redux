const next = require('next');
const express = require('express');
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( {dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/contact/:id',(req,res) => {
        app.render(req,res,'/contact',{id:req.params.id})
    });

    server.get('*',(req,res) => {
        return handle(req, res);
    });

    server.listen(port, err =>{
        if(err) {
            throw err;
        } else {
            console.log(`Server started at port ${port}`);
        }
    });
    
}).catch(ex => {
    console.log(ex.stack);
    process.exit(1);
});