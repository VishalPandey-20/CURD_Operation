const mongoose = require("mongoose");
require("./Schema")
mongoose.connect('mongodb://localhost:27017/student',
 {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});