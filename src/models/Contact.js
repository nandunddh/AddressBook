const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { ucWords } = require("../helpers/Common");

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			set: ucWords,
		},
		email: {
			type: String,
		},
		phoneNo: {
			type: Number,
			required : true,
		},
		Address: {
			type: String,
		},
	},
	{
		versionKey: false,
		timestamps: true,
		toJSON: {
			transform(doc, res) {
				delete res._id;
				delete res.__v;
				delete res.createdAt;
				delete res.updatedAt;
			},
			getters: true,
		},
	}
).plugin(mongoosePaginate);

module.exports = mongoose.model("Contact", contactSchema);
