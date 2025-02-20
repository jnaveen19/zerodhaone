const {model}=require("mongoose");

const {HoldingsSchema}=require("../schemas/HoldingsSchema");

const HoldingModel=new model("holding",HoldingsSchema);

module.exports={HoldingModel};