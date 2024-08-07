import express from 'express'
import cors from 'cors'

const app = express();
const port =  4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.get("/BISTROT", cors(), async( req, res ) => {
    res.send("This is working!");
})

app.get("/BISTROT/endpoint", cors(), async( req, res ) => {
    res.send("This is new feature change, a new route for products");
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})