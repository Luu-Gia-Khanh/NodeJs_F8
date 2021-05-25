
module.exports = {
    mutipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooesToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}