export function shuffle(array) {
	let array2 = [...array];
	var j, x, i;
	for (i = array.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = array2[i];
		array2[i] = array2[j];
		array2[j] = x;
	}
	return array2;
}
