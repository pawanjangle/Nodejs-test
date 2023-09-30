
const express = require( "express" );
const app = express();
const bodyparser = require( "body-parser" );
const cors = require( "cors" );

app.use(express.json());
app.use( bodyparser.urlencoded( {extended: false} ) );
app.use(cors());

app.get( "/", (req, res)=>{
res.json("hello sagar")
} );
app.listen( 3000, (err) =>{
if (err)
{
console.log( "error" )
}
else{
console.log("express server is listening on port 3000")
}
} );