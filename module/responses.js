
var constants = require('./constant');

exports.parameterMissing = (res, result) => {
	let response = {
		response : result,
		message: constants.responseMessages.PARAMETER_MISSING
	};
	res.status(constants.responseFlags.PARAMETER_MISSING).json(response);
};

exports.sendError = function(res) {
	var response = {
		response: {},
		message: constants.responseMessages.ERROR_IN_EXECUTION
	};
	res.status(constants.responseFlags.ERROR_IN_EXECUTION).json(response);
}

exports.success = function(res, values) {
	var response = {
		response: values,
		message: constants.responseMessages.ACTION_COMPLETE
	};
	res.status(constants.responseFlags.ACTION_COMPLETE).json(response);
}

exports.numberAlreadyExist = function(res) {
	var response = {
		response: {},
		message: constants.responseMessages.MOBILE_NUMBER_ALREADY_EXISTS
	};
	res.status(constants.responseFlags.ALREADY_EXIST).json(response);
}
exports.nodata = function(res) {
	var response ={
		response: {},
		message: constants.responseMessages.NO_DATA_FOUND

	};
	res.status(constants.responseFlags.NO_DATA_FOUND).json(response);

}
exports.idNotFound = function(res) {
	var response = {
		response: {},
		message: constants.responseMessages.ID_NOT_FOUND
	};
	res.status(constants.responseFlags.ID_NOT_FOUND).json(response);
}
exports.invalidData = function(res) {
	var response = {
		response: {},
		message : constants.responseMessages.INVALID_DATA
	};
	res.status(constants.responseFlags.INVALID_DATA).json(response);
}
