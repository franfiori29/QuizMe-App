const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		password: { type: String },
		profilePic: { type: String },
		accountId: { type: String, default: null },
		socialAccount: { type: String, default: null },
		countryCode: { type: String, required: false },
		email: {
			type: String,
			unique: true,
			required: true,
			match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email incorrect'],
		},
		role: {
			type: String,
			enum: ['USER', 'ORG', 'ADMIN'],
			default: 'USER',
		},
		likedQuiz: [
			{ type: Schema.Types.ObjectId, ref: 'Quiz', default: null },
		],
		totalScore: { type: Number, default: 0 },
		premium: { type: Boolean, default: false },
		validated: { type: Boolean, default: false },
		completedQuiz: [{ type: Schema.Types.ObjectId, ref: 'Quiz' }],
		isActive: { type: Boolean, default: true },
		resetCode: { type: String, default: null },
		notificationToken: { type: String },
		following: [
			{ type: Schema.Types.ObjectId, ref: 'User', default: null },
		],
		followers: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

userSchema.methods.compare = function (password, isReset) {
	if (this.password || this.resetCode)
		return bcrypt.compareSync(
			password.toString(),
			isReset ? this.resetCode : this.password
		);
	else return false;
};

userSchema.pre('save', function (next) {
	const that = this;
	if (that.accountId) delete that.password;
	else {
		if (
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/.test(
				that.password
			)
		) {
			const salt = bcrypt.genSaltSync(10);
			const hash = bcrypt.hashSync(that.password, salt);
			that.password = hash;
		} else throw new Error('Input valid Password');
	}
	next();
});

userSchema.plugin(uniqueValidator, {
	message: 'Error, expected {PATH} to be unique.',
});
userSchema.plugin(findOrCreate);

module.exports = model('User', userSchema);
