import { ValueSchema } from "./valueSchema.model";

export class Complain {
    constructor(public complainId:Number,
                public type:String,
                public complains:[ValueSchema]){
    }
}
