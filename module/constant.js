function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: true
    });
}

exports.responseFlags = {};
exports.responseMessages = {};

//FOR MESSAGES
define(exports.responseMessages, 'PARAMETER_MISSING',                     'Some parameter missing.');
define(exports.responseMessages, 'INVALID_ACCESS_TOKEN',                  'Invalid access token.');
define(exports.responseMessages, 'INVALID_MOBILE_NUMBER',                 'Invalid mobile number.');
define(exports.responseMessages, 'INVALID_DATA',                          'Invalid data.');
define(exports.responseMessages, 'INVALID_EMAIL_ID',                      'Invalid email id.');
define(exports.responseMessages, 'INVALID_CREDENTIAL',                    'Invalid credential.');
define(exports.responseMessages, 'INCORRECT_PASSWORD',                    'Incorrect Password.');
define(exports.responseMessages, 'ACTION_COMPLETE',                       'Action complete.');
define(exports.responseMessages, 'LOGIN_SUCCESSFULLY',                    'Logged in successfully.');
define(exports.responseMessages, 'SHOW_ERROR_MESSAGE',                    'Show error message.');
define(exports.responseMessages, 'IMAGE_FILE_MISSING',                    'Image file is missing.');
define(exports.responseMessages, 'ERROR_IN_EXECUTION',                    'Error in execution.');
define(exports.responseMessages, 'UPLOAD_ERROR',                          'Error in uploading.');
define(exports.responseMessages, 'STATUS_CHANGED_SUCCESSFULLY',           'Status changed successfully.');
define(exports.responseMessages, 'USER_NOT_FOUND',                        'User not found.');
define(exports.responseMessages, 'NO_DATA_FOUND',                         'No data found.');
define(exports.responseMessages, 'ID_NOT_FOUND',                          'ID not found.');
define(exports.responseMessages, 'USER_DELETED_SUCCESSFULLY',             'User deleted successfully.');
define(exports.responseMessages, 'PASSWORD_CHANGED_SUCCESSFULLY',         'Password changed successfully.');
define(exports.responseMessages, 'EMAIL_ALREADY_EXISTS',                  'Either Email or mobile already registered');
define(exports.responseMessages, 'MOBILE_NUMBER_ALREADY_EXISTS',          'Number already registered');
define(exports.responseMessages, 'EXPIRED_TOKEN',                         'This link has been expired.');
define(exports.responseMessages, 'OTP_NOT_MATCHED',                       'OTP not matched.');
define(exports.responseMessages, 'MOBILE_NUMBER_REQUIRE',                 'Mobile number is required.');
define(exports.responseMessages, 'DATA_UPDATED_SUCCESSFULL',              'Data updated successfully.');
define(exports.responseMessages, 'NAME_REQUIRE',                          'Name is required.');
define(exports.responseMessages, 'ID_REQUIRE',                            'Id is required.');

//FOR FLAGS
define(exports.responseFlags, 'ALREADY_EXIST',                       422);
define(exports.responseFlags, 'PARAMETER_MISSING',                   422);
define(exports.responseFlags, 'INVALID_ACCESS_TOKEN',                401);
define(exports.responseFlags, 'INVALID_DATA',               403);
define(exports.responseFlags, 'INVALID_CREDENTIAL',                  403);
define(exports.responseFlags, 'INVALID_EMAIL_ID',                    403);
define(exports.responseFlags, 'WRONG_PASSWORD',                      403);
define(exports.responseFlags, 'ACTION_COMPLETE',                     200);
define(exports.responseFlags, 'LOGIN_SUCCESSFULLY',                  200);
define(exports.responseFlags, 'SHOW_ERROR_MESSAGE',                  400);
define(exports.responseFlags, 'IMAGE_FILE_MISSING',                  422);
define(exports.responseFlags, 'ERROR_IN_EXECUTION',                  404);
define(exports.responseFlags, 'STATUS_CHANGED_SUCCESSFULLY',         200);
define(exports.responseFlags, 'ID_NOT_FOUND',                        203);
define(exports.responseFlags, 'MOBILE_NUMBER_REQUIRE',               203);
define(exports.responseFlags, 'NAME_REQUIRE',                        203);
define(exports.responseFlags, 'USER_NOT_FOUND',                      203);
define(exports.responseFlags, 'ID_REQUIRE',                          203);
define(exports.responseFlags, 'NO_DATA_FOUND',                       203);
define(exports.responseFlags, 'USER_DELETED_SUCCESSFULLY',           200);
define(exports.responseFlags, 'PASSWORD_CHANGED_SUCCESSFULLY',       200);
define(exports.responseFlags, 'OTP_NOT_MATCHED',                     400);