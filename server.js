const express = require("express");
const cors = require("cors");
const getJoke = require("./script");

app = express();
app.use(cors());

app.get("/", async (api_req, api_res) => {
    output_type = api_req.query.type;
    console.log(output_type);
    joke_res = await getJoke("Programming");
    api_res.send({
        "joke": joke_res,
    })
})

app.listen(3000, () => console.log("Listening on port 3000"));
