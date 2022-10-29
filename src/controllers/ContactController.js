const ContactModel = require("../models/Contact");

const { paginateOptions } = require("../helpers/Common");
const { paginationResponse, success } = require("../helpers/Response");
const { CONTACTS_FOUND, CONTACT_CREATED, CONTACT_NOT_FOUND, CONTACT_UPDATED, CONTACT_DELETED, CONTACT_FOUND } = require("../lang/en/ContactConstant");

exports.list = async (req, res) => {
	try {
		const data = await ContactModel.paginate({}, paginateOptions(req.query));

		return paginationResponse({ res, msg: CONTACTS_FOUND, data: data, status: 200 });
	} catch (err) {
		return success({ res, msg: err.message, data: err, status: 500 });
	}
};

exports.create = async (req, res) => {
	try {
		const data = await new ContactModel(req.body).save();

		return success({ res, msg: CONTACT_CREATED, data: data, status: 200 });
	} catch (err) {
		return success({ res, msg: err.message, data: err, status: 500 });
	}
};

exports.update = async (req, res) => {
	try {
		let data = await ContactModel.findById(req.params.id);

		if (!data) return success({ res, msg: CONTACT_NOT_FOUND, status: 404 });

		data = await ContactModel.updateOne({ _id: req.params.id }, { $set: req.body });
		

		return res.json({
			success:true,
			msg:CONTACT_UPDATED, 
			data : {},
			status:200
		});
	} catch (err) {
		return success({ res, msg: err.message, data: err, status: 500 });
	}
};

exports.destroy = async (req, res) => {
	try {
		let data = await ContactModel.findById(req.params.id);

		if (!data) return success({ res, msg: CONTACT_NOT_FOUND, status: 404 });

		await ContactModel.deleteOne({ _id: req.params.id });

		return res.json({
			success:true,
			msg:CONTACT_DELETED, 
			data : data,
			status:200
		});
	} catch (err) {
		return success({ res, msg: err.message, data: err, status: 500 });
	}
};

exports.detail = async (req, res) => {
	try {
		const data = await ContactModel.findById(req.params.id);

		if (!data) return success({ res, msg: CONTACT_NOT_FOUND, status: 404 });

		return success({ res, msg: CONTACT_FOUND, data: data, status: 200 });
	} catch (err) {
		return success({ res, msg: err.message, data: err, status: 500 });
	}
};
