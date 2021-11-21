import express from "express";
import { rootGraphqlHTTP } from "./schemas/root.js";


const app = express();
app.use("/graphql", rootGraphqlHTTP);

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
