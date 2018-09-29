var mongoose = require('mongoose');

var ASSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

var ASData = mongoose.model('ASData', ASSchema);

function createASData() {
    ASData.find({}).exec(function (err, collection) {
        if (collection.length === 0 ){
                ASData.create({
                    firstName: 'Aaron',
                    lastName: 'Skudder'
                });
                ASData.create({
                    firstName: 'Lan',
                    lastName: 'Skudder'
                });
                    console.log('test data written to mongo');
            };
    });
};

exports.createASData = createASData;
