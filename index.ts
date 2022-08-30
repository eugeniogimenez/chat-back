//API = Application Programming Interfaces
//permitiendo la comunicación entre dos apps a través de un conjunto de reglas.
//establece cómo un módulo de un software se comunica o interactúa con otro
//para cumplir una o muchas funciones.

//importo la DB
import { firestore, rtdb } from "./db";

//importo express
import * as express from "express";

//instancio express
const app = express();
const port = 3000;

//¿Como obtener el body de un POST? Uso BODY-PARSER
import { json } from "body-parser";

//importo uuid
import { v4 as uuidv4 } from "uuid";

//importo cors
import * as cors from "cors";

app.use(json()); //parsea el body que le enviamos (req.body)
app.use(cors()); //permite al navegador usar apis

//ROUTER:
//POST = CREATE
app.post("/messages", function (req, res) {
  const chatroomsRef = rtdb.ref("/chatrooms/general/messages");
  chatroomsRef.push(req.body, function (err) {
    console.log(err);

    res.json("todo ok");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
