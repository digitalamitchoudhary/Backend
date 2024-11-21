let http=require("http")

let url=require("url")

let fs=require("fs")

let server=http.createServer((req,res)=>{


    let parseUrl=url.parse(req.url,true)
    // console.log(parseUrl)


//     if(req.url=="/")
//    { res.end("Home Page Url")}
//     if(req.url=="/insert")
//         { res.end("Welcome insert Amit")}

//     if(req.url=="/view")
//         { res.end("Welcome View Amit")}



if(parseUrl.pathname=="/")
    { res.end("Home Page Url")}

 if(parseUrl.pathname=="/insert")
    { 
      
    let name=parseUrl.query.name;
    let email=parseUrl.query.email;

    // console.log(name,email);
    // fs.writeFileSync("demo.txt", "Welcome in Data")
    let read;
        try{
             read=JSON.parse(fs.readFileSync("demo.json"))
        }
        catch(error){
                read=[];
        }
        console.log(read)

        read.push({name,email})
        fs.writeFileSync("demo.json", JSON.stringify(read))
    res.end("Welcome insert Amit")}
 
     if(parseUrl.pathname=="/view"){
        //  { let readData=fs.readFileSync("demo.txt")
             let readData=fs.readFileSync("demo.json")
            
            res.end(readData)}


            if(parseUrl.pathname=="/delete"){
               
                     fs.unlinkSync("demo.json")
                    
                    res.end("delete file")}
           
})


server.listen("8000")