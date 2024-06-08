const bestSellerModel =  require("../../Models/api/bestSellerModel");

const productsModel = require("../../Models/api/productsModel");
const { successResponse, errorResponse } = require("../../Response/response");


//get all products
const getAllProducts = async (req, res)=>{
    try{
        const productList = await productsModel.find();
        if(productList.length!==0)
            successResponse(res, "successfully fetched", productList, 200);
        else
            errorResponse(res, "error", "Not Found", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

//get product by id
const getProduct = async (req, res)=>{
    try{
        // console.log(req.params.id)
        const productList = await productsModel.find({category: { $regex: new RegExp(req.params.id, "i") }});
        if(productList.length!==0)
            successResponse(res, "successfully fetched", productList, 200);
        else
            errorResponse(res, "error", "Oops! no items found.", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

//add a product
const addProducts = async (req, res)=>{
    try{
        // console.log(req.body)
        const productList = new productsModel(req.body).save();
        if(productList.length===0)
            errorResponse(res, "error", "Unable to save", 400)
        else
            successResponse(res, "successfully saved", productList, 200);
        }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}


//add all products
const addProductsAll = async (req, res)=>{
    try{
        // console.log(req.body);
        const productList = await productsModel.insertMany(req.body);

        if(productList.length===0)
            errorResponse(res, "error", "Unable to save", 400)
        else
            successResponse(res, "successfully saved", productList, 200);
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}


// add bestSeller products
const addBestSeller = async (req, res)=>{
        try{
            const productList = await bestSellerModel(req.body).save();
    
            if(productList.length===0)
                errorResponse(res, "error", "Unable to save", 400)
            else
                successResponse(res, "successfully saved", productList, 200);
        }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}


//get all bestSeller products
const getBestSeller = async (req, res)=>{
    try{
        const productList = await bestSellerModel.find().populate('productId');
        if(productList.length===0)
            errorResponse(res, "error", "Unable to fetched", 400)
        else
            successResponse(res, "successfully Fetched", productList, 200);
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

module.exports = {
    getAllProducts, addProducts, addProductsAll, addBestSeller, getProduct, getBestSeller
}