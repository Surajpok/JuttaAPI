const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        usreId:{ type: String , required: true, unique: true},
        produts:[
            {
                productId:{
                    type: String
                },
                quantity:{
                    type: Number,
                    default: 1,
                }
            }
        ],
    },
    { timestamp: true}
    );

    module.exports = mongoose.model("Cart",CartSchema);