require('dotenv').config();
require('./database/db');
const pdtM = require('./models/pdtModel');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/products/show-product/:skipvalue/:limitdata", async (req, res) =>
{
    var ans_count = await pdtM.countDocuments();
    var ans_product = await pdtM.aggregate([
        {
            "$lookup": {
                "let": { "catid": { "$toObjectId": "$catid" } },
                "from": "categories",
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$_id", "$$catid"] } } }
                ],
                "as": "catvalues"
            }
        },
        { "$skip": Number(req.params.skipvalue) },
        { "$limit": Number(req.params.limitdata) }
    ]);

    // console.log(ans_count);
    res.send({
        ans_product,
        ans_count
    });
})

const productR = require('./routes/productRoute');
const categoryR = require('./routes/catRoute');

app.use('/products', productR);
app.use('/categories', categoryR);

let port = process.env.PORT;

app.listen(port, () =>
{
    console.log(`port is connected at ${ port }`);
});