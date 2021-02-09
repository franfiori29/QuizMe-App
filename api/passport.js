const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const {
	SECRET,
	BACK,
	CLIENTID,
	CLIENTSECRET,
	FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET,
} = process.env;

passport.use(
	new LocalStrategy(
		{ usernameField: 'email', passwordField: 'password', session: false },
		async (email, password, done) => {
			const user = await User.findOne({ email, isActive: true });
			if (!user) return done(null, false);
			if (!user.compare(password)) return done(null, false);
			const {
				_id,
				firstName,
				lastName,
				profilePic,
				email: userEmail,
				countryCode,
				role,
				updatedAt,
			} = user;
			return done(null, {
				_id,
				firstName,
				lastName,
				profilePic,
				email: userEmail,
				countryCode,
				role,
				updatedAt,
			});
		}
	)
);

passport.use(
	new BearerStrategy((token, done) => {
		jwt.verify(token, SECRET, async function (err, user) {
			try {
				const response = await User.findById(user._id);
				return done(null, response ? user : false);
			} catch (err) {
				return done(null, false);
			}
		});
	})
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: CLIENTID,
			clientSecret: CLIENTSECRET,
			callbackURL: `${BACK}/auth/googleCallback`,
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				const user = {
					first_name: profile.name.givenName,
					last_name: profile.name.familyName,
					email: profile.emails[0].value,
					is_admin: false,
					accountId: profile.id,
					socialAccount: 'google',
					profilePic: profile.photos[0].value.replace(
						's96-c',
						's300-c'
					),
					password: null,
				};
				const foundUser = await User.findOne({ email: user.email });
				if (foundUser) {
					foundUser.profilePic = user.profilePic;
					foundUser.accountId = user.accountId;
					foundUser.socialAccount = user.socialAccount;
					await foundUser.save;
					done(null, foundUser);
				} else {
					const createdUser = await User.create(user);
					done(null, createdUser);
				}
			} catch (err) {
				done(err, null);
			}
		}
	)
);

//FACEBOOK

passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: `${BACK}/auth/facebookCallback`,
			profileFields: ['id', 'emails', 'name', 'picture.width(300)'],
		},
		async function (accessToken, refreshToken, profile, done) {
			try {
				const user = {
					first_name: profile.name.givenName,
					last_name: profile.name.familyName,
					email: profile.emails[0].value,
					profile_pic: profile.photos[0].value,
					is_admin: false,
					facebookId: profile.id,
					password: null,
				};
				const foundUser = await User.findOne({
					where: { email: user.email },
				});
				if (foundUser) {
					const updatedUser = await foundUser.update(user);
					done(null, updatedUser);
				} else {
					const createdUser = await User.create(user);
					done(null, createdUser);
				}
			} catch (err) {
				done(err, null);
			}
		}
	)
);

module.exports = passport;
