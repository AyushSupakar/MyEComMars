const { Schema, models, model } = require("mongoose");

const CategorySchema = new Schema(
    {
        catname :{
        type:'String',
        required : true,},
        parentcatname :{
            type:'String',
           // default : "No Parent"
        },
        imgurl : {type:String, required: true},
    })

export const Category = models?.Category || model('Category',CategorySchema);