// console.log ("amit")

const http = require('http');

const server = http.createServer((request, response) =>{
    // console.log (request)
    if(request.url == '/' && request.method == 'GET') {
        response.end ('Server Working fine')
    }else if(request.url == '/add-category' && request.method == 'POST') {

        var obj = {

            status : true,
            message : 'Add Cataegory Succesfully Found !!',
            data : "" 
        }

        response.end(JSON.stringify(obj))
   }
   else if(request.url == '/view-category' && request.method == 'GET') {
    var obj = {

        status : true,
        message : 'View  Cataegory Succesfully Found !!',
        data : "" 
    }

    response.end(JSON.stringify(obj))

  }
  else if(request.url == '/delete-category' && request.method == 'DELETE') {
    var obj = {

        status : true,
        message : 'Delete Cataegory Succesfully Found !!',
        data : "" 
    }

    response.end(JSON.stringify(obj))

  } else if(request.url == '/update-category' && request.method == 'PUT') {
    var obj = {

        status : true,
        message : 'Update Cataegory Succesfully Found !!',
        data : "" 
    }

    response.end(JSON.stringify(obj))

  } else {
    response.end ('page not find 404 !')
  }
    // console.log (request.url);
    // console.log (request.method);
    // var obj = {

    //     status : true,
    //     message : 'Data Found !!',
    //     data : "" 
    // }


    // response.end ('Hello amit')
    // response.end ('<h1>Hello amit</h1>')
    // response.end(JSON.stringify(obj))

})

server.listen(2024)

// server.listen(2024, () =>{

//     console.log('server Working')
// });