const mongoose=require('mongose');
const {Schema}=mongoose;
const bookModel=new Schema(
  title:{type:String},
  genere:{type:String},
  author:{type:String},
  read:{type:Boolean,default},
)