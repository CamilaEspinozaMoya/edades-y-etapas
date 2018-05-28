window.onload = function () {

let age = prompt('Ingresa tu edad');

if (age >= 1 && age <= 2) {
		alert('Toddler');
} else if (age >= 3 && age <= 4) {
		alert('Preschooler');
} else if (age >=5 && age <=11) {
		alert('Gradeschooler');
} else if (age >=12 && age <= 17) {
		alert('Teenager');
} else if (age >=18 && age <= 20) {
		alert('Young adult');
} else if (age >= 21) {
		alert('Adult');
} else (age === string) {
		alert('Tu edad no puede ser catalogada');
}
}