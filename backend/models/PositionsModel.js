const {model}=require("mongoose");

const {PositionsSchema}=require("../schemas/PositionsSchema");

const PositionModel=new model("position",PositionsSchema);

module.exports={PositionModel};