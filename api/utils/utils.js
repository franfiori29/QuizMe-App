const generateCode = (length) => {
	var resetCode = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.!%=@';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		resetCode += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return resetCode;
};

module.exports = {
	generateCode,
};
