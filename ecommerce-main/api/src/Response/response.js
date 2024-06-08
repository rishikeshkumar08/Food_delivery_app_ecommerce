const successResponse = (res, message, data, statusCode)=>{
    res.send({"success":{"message": message, "data": data}, status:statusCode});
}

const errorResponse = (res, name, message, statusCode)=>{
    res.send({"error":{"name": name, "message": message}, status:statusCode});
}

module.exports = {
    successResponse,
    errorResponse
}