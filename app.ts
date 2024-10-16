import express from "express";
const app = express();
import {sum} from "./sum";

//

app.get("/sum/:a/:b", (req, res) => {
    const a=Number(req.params.a);
    const b= Number(req.params.b);
    const result= sum(a,b);
    res.send("result " + result);
  });
  
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
  });
