import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Platform } from 'react-native';

//~~~Components~~~
import Ricky from '@components/easter_eggs/Ricky';
import QuizIndex from '@components/quiz_index';
import Quiz from '@components/quiz';
import HomeScreen from '@components/home_screen';
import SearchScreen from '@components/search_screen';
import Login from '@components/login';
import SignUp from '@components/signup';
import UserMenu from '@components/user_menu';
import MailUpdate from '@components/user_menu/screens/MailUpdate';
import PasswordUpdate from '@components/user_menu/screens/PasswordUpdate';
import UpdateName from '@components/user_menu/screens/UpdateName';
import Information from '@components/user_menu/screens/Information';
import Subscriptions from '@components/user_menu/screens/Subscriptions';
import PremiumScreen from '@components/user_menu/screens/PremiumScreen';
import ValidateScreen from '@components/user_menu/screens/ValidateScreen';
import Profile from '@components/profile';
import PublicProfile from '@components/public_profile';
import MyQuizzes from '@components/my_quizzes';
import QuizMake from '@components/quiz_make';
import QuizResults from '@components/quiz_results';
import LogoAnimated from '@components/logo_animated';
import { setToken } from '@redux/reducers/user';
import QuizMakeDetails from '@components/quiz_make/details';
import QuizMakeQuestions from '@components/quiz_make/questions';
import AdminPanel from '@components/admin_panel';
import AdminUsers from '@components/admin_panel/screens/users';
import AdminQuizzes from '@components/admin_panel/screens/quizzes';
import AdminCategories from '@components/admin_panel/screens/categories';
import RateUs from '@components/rate_us';
import ResetPassword from '../src/components/reset_password';
import ResetPassword2 from '../src/components/reset_password/resetPassword2.js';
import AddCategory from '@components/admin_panel/screens/addCategory';
import EditCategory from '@components/admin_panel/screens/editCategory';
import ValidateForm from '@components/validate_form';

import mainThemeFile from '@assets/audio/main-theme.mp3';
import { Audio } from 'expo-av';
import * as Linking from 'expo-linking';

/* === Prefix === */
const prefixHome = Linking.createURL('/achievements');
const prefixUserMenu = Linking.createURL('/user/:id', { id: 'id' });
const prefixResetPass = Linking.createURL(
	'/resetPassword/:resetCode/:userEmail',
	{ resetCode: 'resetCode', userEmail: 'userEmail' }
);
/* === Prefix === */

const HomeRoutes = () => {
	const dispatch = useDispatch();

	const [mainTheme, setMainTheme] = React.useState();
	useEffect(() => {
		if (Platform.OS === 'web') {
			const token = new URLSearchParams(window.location.search).get(
				'jwt'
			);
			if (token) {
				dispatch(setToken(token));
				dispatch(getUser());
			}
		}
		(async () => {
			const { sound } = await Audio.Sound.createAsync(mainThemeFile, {
				isLooping: true,
				volume: 0.5,
			});
			setMainTheme(sound);
		})();
	}, []);

	const playTheme = () => {
		mainTheme?.playAsync();
	};

	const stopTheme = () => {
		mainTheme?.stopAsync();
	};

	const linkingConfig = {
		prefixes: [prefixHome, prefixUserMenu, prefixResetPass],
	};

	const { Navigator, Screen } = createStackNavigator();
	return (
		<NavigationContainer linking={linkingConfig}>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={'LogoAnimated'}
			>
				<Screen name='Login' component={Login} />
				<Screen name='SignUp' component={SignUp} />
				<Screen
					name='Home'
					component={HomeScreen}
					options={({ route }) => {
						route.playTheme = playTheme;
					}}
				/>
				<Screen name='SearchScreen' component={SearchScreen} />
				<Screen
					name='UserMenu'
					component={UserMenu}
					options={({ route }) => {
						(route.stopTheme = stopTheme),
							(route.playTheme = playTheme);
					}}
				/>
				<Screen name='PremiumScreen' component={PremiumScreen} />
				<Screen name='ValidateScreen' component={ValidateScreen} />
				<Screen name='MailUpdate' component={MailUpdate} />
				<Screen name='PasswordUpdate' component={PasswordUpdate} />
				<Screen name='Subscriptions' component={Subscriptions} />
				<Screen name='Information' component={Information} />
				<Screen name='UpdateName' component={UpdateName} />
				<Screen name='MyQuizzes' component={MyQuizzes} />
				<Screen name='QuizMake' component={QuizMake} />
				<Screen
					name='QuizMakeQuestions'
					component={QuizMakeQuestions}
				/>
				<Screen name='QuizMakeDetails' component={QuizMakeDetails} />
				<Screen name='QuizIndex' component={QuizIndex} />
				<Screen name='QuizResults' component={QuizResults} />
				<Screen
					name='Quiz'
					component={Quiz}
					options={({ route }) => {
						route.playTheme = playTheme;
						route.stopTheme = stopTheme;
					}}
				/>
				<Screen name='Profile' component={Profile} />
				<Screen name='PublicProfile' component={PublicProfile} />
				<Screen name='LogoAnimated' component={LogoAnimated} />
				<Screen name='Ricky' component={Ricky} />
				<Screen name='AdminPanel' component={AdminPanel} />
				<Screen name='AdminUsers' component={AdminUsers} />
				<Screen name='AdminQuizzes' component={AdminQuizzes} />
				<Screen name='AdminCategories' component={AdminCategories} />
				<Screen name='AddCategory' component={AddCategory} />
				<Screen name='EditCategory' component={EditCategory} />
				<Screen name='RateUs' component={RateUs} />
				<Screen name='ResetPassword' component={ResetPassword} />
				<Screen name='ResetPassword2' component={ResetPassword2} />
				<Screen name='ValidateForm' component={ValidateForm} />
			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
