const catM = require('../models/catModel');

const showCategory = (req, res) =>
{
    // console.log(req.body);
    try
    {
        catM.find({}, (err, docs) =>
        {
            if (!err)
                res.send(docs)
        });
    }
    catch (err)
    {
        console.log(err);

    }

}

const insertCategory = async (req, res) =>
{
    try
    {
        var category = new catM(req.body);
        var ans = await category.save();
        res.send(ans)
    }
    catch (err)
    {
        console.log(err);
    }
}

const selectCategoryById = async (req, res) =>
{
    console.log(req.params);
    var { id } = req.params;
    try
    {
        var ans = await catM.findById(id);
        res.send(ans)
    }
    catch (err)
    {
        console.log(err);
    }
}

const updateCategory = async (req, res) =>
{
    console.log(req.body);
    console.log(req.params);
    var ans_product = await catM.findByIdAndUpdate(req.params.categoryid, req.body);
    console.log(ans_product);
    res.send({ msg: true })
}

const deleteCategory = async (req, res) =>
{
    console.log(req.params);

    var ans_cat = await catM.findByIdAndRemove(req.params.myid);
    console.log(ans_cat);
    res.send({ msg: true })
}
module.exports = {
    showCategory,
    insertCategory,
    updateCategory,
    selectCategoryById,
    deleteCategory
};