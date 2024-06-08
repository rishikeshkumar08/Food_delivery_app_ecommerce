const categoryModel = require("../../Models/api/categoryModel");
const { successResponse, errorResponse } = require("../../Response/response");

const getCategory = async (req, res)=>{
    try{
        const categoryList = await categoryModel.find();
            if(categoryList!=null)
                successResponse(res, "successfully fetched", categoryList, 200);
            else
                errorResponse(res, "error", "Not Found", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

//add a category
const addCategory = async (req, res)=>{
    try{
        const categoryList = new categoryModel(req.body).save();
        if(categoryList.length==0)
            errorResponse(res, "error", "Unable to save", 400)
        else
            successResponse(res, "successfully saved", categoryList, 200);
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

//add all category
const addCategoryAll = async (req, res)=>{
    try{
        // console.log(req.body);
        const productList = await categoryModel.insertMany(req.body);

        if(productList.length===0)
            errorResponse(res, "error", "Unable to save", 400)
        else
            successResponse(res, "successfully saved", productList, 200);
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

module.exports = {
    getCategory, addCategory, addCategoryAll
}
