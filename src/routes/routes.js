/* 
    This is a route function
    containing route to main components
    of the ninions server
*/
const express = require("express")
const router = express.Router()
const fs = require('fs')
//Serving all page from the public folder
const path = __dirname.substring(0, __dirname.indexOf("src")) + "/public/"

router.get("*", (req, res) =>{
    let tm = req.url
    if(fs.existsSync(path + tm)){
        res.sendFile(path + tm)
    }
    else{
        //return 404 request
        res.status(404).json({
            success: false,
            message: "Page not found",
            error: {
                statusCode: 404,
                message:
                    "You are trying to access a route that is not defined on this server."
            }
        })
    }
})

//exports router
module.exports = router
    
