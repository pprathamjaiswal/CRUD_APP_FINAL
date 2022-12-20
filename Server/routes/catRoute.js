const express = require('express');
const router = express.Router();

const catC = require('../controllers/catController')

router


    .get('/show-category', catC.showCategory)
    .get('/show-category/:id', catC.selectCategoryById)
    .post('/add-category', catC.insertCategory)
    .put('/update-category/:categoryid', catC.updateCategory)
    .delete('/delete-cat/:myid', catC.deleteCategory);  

module.exports = router;