function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [];
var LENGTH = rand(10,20);
var INNER_LENGTH;
for (var i = 0; i < LENGTH; i++) {
	arr[i] = [];
	INNER_LENGTH = rand(5,15);
	for (var j = 0; j < INNER_LENGTH ; j++) {
		//arr[i].push(rand(0, 100));
		arr[i].push((i+1)*(j+1));
	}
}
console.table(arr);

//ДЗ выводит строки в обратном порядке, столбцы по порядку
for (var i = LENGTH-1; i >=0; i--) {
	for (var j = 0; j < arr[i].length ; j++) {
		console.log("["+i+"]["+j+"]: "+arr[i][j]);
	}
}

//----------------ДЗ
var square = [];
var result = [];
var SIZE = 10;
for (var i = 0; i < SIZE; i++) {
	square[i] = [];
	for (var j = 0; j < SIZE; j++) {
		square[i].push(rand(0, 100));
	}
}
console.table(square);

// ДЗ квадрат по часовой 1 вариант
result = square[0].slice(0, SIZE);
for (var i = 1; i < SIZE; i++) {
	result.push(square[i][SIZE - 1]);
}
result = result.concat(square[SIZE - 1].slice(0, SIZE - 1).reverse());
for (var i = SIZE - 2; i > 0; i--) {
	result.push(square[i][0]);
}
console.log(result);

// ДЗ квадрат по часовой 2 вариант
var result2=[];
for (var i = 0; i < SIZE; i++) {
	result2.push(square[0][i]);
}
for (var i = 0; i < (SIZE - 1); i++) {
	result2.push(square[i + 1][SIZE - 1]);
}
for (var i = SIZE - 2; i >= 0; i--) {
	result2.push(square[SIZE - 1][i]);
}
for (var i = SIZE - 2; i > 0; i--) {
	result2.push(square[i][0]);
}
console.log(result2);

//-------------------------------------
for (var i = 0; i < SIZE; i++) {
	square[i] = [];
	for (var j = 0; j < SIZE; j++) {
		square[i].push(0);
	}
}

// заполнение по спирали
var fillArr=1;
var step=0;
for (; SIZE > 0; SIZE--) {

	for (var i = step; i < SIZE; i++) {
		square[step][i]=fillArr;
		fillArr++;
	}
	for (var i = step; i < (SIZE -1); i++) {
		square[i+1][SIZE-1]=fillArr;
		fillArr++;
	}
		for (var i = SIZE-2; i >=step; i--) {
		square[SIZE-1][i]=fillArr;
		fillArr++;
	}
	for (var i = SIZE -2; i >step; i--) {
		square[i][step]=fillArr;
		fillArr++;
	}
	step++;
}
console.table(square);