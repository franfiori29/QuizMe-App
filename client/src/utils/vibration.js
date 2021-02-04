import { Platform, Vibration } from 'react-native';

export const Vibrate = (time, vibration) => {
	if (vibration) {
		if (Platform.OS === 'android') {
			Vibration.vibrate(time);
		}
	}
};

export const VibratePattern = (time1, time2, time3, vibration) => {
	if (vibration) {
		if (Platform.OS === 'android') {
			Vibration.vibrate([time1, time2, time3], true);
		}
	}
};
