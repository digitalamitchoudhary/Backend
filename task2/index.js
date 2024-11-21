let express=require("express")

let app=express();
let path = require("path")

let publicPath=path.join(__dirname, "public")


app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/view',(req,res)=>{

    var obj = [{

        'newTitle':'How Amit become web dev',
        'newsDescription':'How Amit become web dev'

    },
    {

        'newTitle':'How Sumit become web dev',
        'newsDescription':'How Sumit become web dev'

    }
]


    res.send(obj)
})

app.get('/profile', (req,res)=>{
    var obj = {
        'name':'amit',
        'email':'amit@gmail.com',
        'course': ['css', 'Node.js', 'reactjs']
    }
    res.render('profile', obj)
})


app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/page404.html`)
})



app.listen (2025)