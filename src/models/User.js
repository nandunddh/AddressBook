const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");



const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,

		},
		password: {
			type: String,
			required: true,

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

userSchema.virtual("token");

module.exports = mongoose.model("User", userSchema);
