
	document.getElementById("easy").addEventListener("click", easy);
	document.getElementById("medium").addEventListener("click", med);
	document.getElementById("hard").addEventListener("click", hard);
	document.getElementById("start").addEventListener("click", start);

	function start() {
	document.getElementById("start").style.display = "none";
	document.getElementById("buttons").style.display = "block";
	}
	const easyimg = [
	{   name: 'amgC63SC', 
	    img : 'amgC63SC.jpg', 
	},
	{	name: 'amgCLA35',
		img: 'amgCLA35.jpg',
	},
	{
		name : 'amgG63',
		img: 'amgG63.jpg',
	},
	{
		name : 'amgGT63SBrabus',
		img : 'amgGT63SBrabus.jpg',
	},
	{
		name : 'amgGT63SBrabus850',
		img: 'amgGT63SBrabus850.jpg',
	},
	{
		name : 'amgGT73',
		img : 'amgGT73.jpg',
	}, 
	{	name : 'amgGT800Brabus', 
		img : 'amgGT800Brabus.jpg',
	}, 
	{
		name : 'amgGT2019',
		img : 'amgGT2019.jpeg',
	}, 
	{   name: 'amgC63SC', 
	    img : 'amgC63SC.jpg', 
	},
	{	name: 'amgCLA35',
		img: 'amgCLA35.jpg',
	},
	{
		name : 'amgG63',
		img: 'amgG63.jpg',
	},
	{
		name : 'amgGT63SBrabus',
		img : 'amgGT63SBrabus.jpg',
	},
	{
		name : 'amgGT63SBrabus850',
		img: 'amgGT63SBrabus850.jpg',
	},
	{
		name : 'amgGT73',
		img : 'amgGT73.jpg',
	}, 
	{	name : 'amgGT800Brabus', 
		img : 'amgGT800Brabus.jpg',
	}, 
	{
		name : 'amgGT2019',
		img : 'amgGT2019.jpeg',
	},
	];

	const easymed = [
	{
		name : 'amgGTG63Brabus',
		img : 'amgGTG63Brabus.jpeg',
	}, 
	{
		name : 'amgS63',
		img : 'amgS63.jpg',
	},
	{
		name : 'amgGTG63Brabus',
		img : 'amgGTG63Brabus.jpeg',
	}, 
	{
		name : 'amgS63',
		img : 'amgS63.jpg',
	},
	];

	const easymedhard = [
	{
		name : 'amgSL', 
		img : 'amgSL.jpg',
	}, 
	{
		name : 'G550',
		img : 'G550.jpg',
	},
	{
		name : 'amgSL', 
		img : 'amgSL.jpg',
	}, 
	{
		name : 'G550',
		img : 'G550.jpg',
	},
	];


	
	const game = document.getElementById('board');
	const grid = document.createElement('section');
	grid.setAttribute('class','grid');
	game.appendChild(grid);
	var memorize = 0;
	let gameGrid = easyimg;
	var rows;
	var timer;

	function easy() {
		gameGrid = shuffle(gameGrid);
		memorize = 3000;
		rows = 4;
		document.getElementById("easy").style.display = 'none';
		document.getElementById("medium").style.display = 'none';
		document.getElementById("hard").style.display = 'none';
		document.getElementById("level").innerHTML = "EASY : ";
		document.getElementById("board").classList.add("four");
		timer = setTimeout(timer,120000);
		display();
	}

	function med() {
		memorize = 5000;
		rows = 5;
		gameGrid = shuffle(gameGrid.concat(easymed));
		document.getElementById("easy").style.display = 'none';
		document.getElementById("medium").style.display = 'none';
		document.getElementById("hard").style.display = 'none';
		document.getElementById("level").innerHTML = "MEDIUM : ";
		document.getElementById("board").classList.add("five");
		timer = setTimeout(timer,150000);
		display();
	}

	function hard() {
		memorize = 8000;
		rows = 6;
 		gameGrid = shuffle(gameGrid.concat(easymed).concat(easymedhard));
 		document.getElementById("easy").style.display = 'none';
		document.getElementById("medium").style.display = 'none';
		document.getElementById("hard").style.display = 'none';
		document.getElementById("level").innerHTML = "HARD : ";
		document.getElementById("board").classList.add("six");
		timer = setTimeout(timer,180000);
 		display();
	}
	function timer() {
		alert("You lost :(, you took too long. Better luck next time!");
		document.getElementById("level").innerHTML = '';
		document.getElementById("buttons").style.display = "none";
		document.getElementById("instructions").innerHTML = 'Please refresh to start over.';
		document.getElementById("board").style.display = "none";

	}
	//var front;

	function display() {
		var idk = 0;
		gameGrid.forEach((item) => {
			idk++;

		const card = document.createElement('div');
		card.classList.add('card');
		card.dataset.name = item.name;
		var front = document.createElement('div');

		setTimeout(function(){front.classList.add('front')}, memorize);
		
		const back = document.createElement('div');
		back.classList.add('back');

		card.style.backgroundImage = `url(${item.img})`;
		card.style.backgroundSize = '100px';

		card.style.width = '100px';
		card.style.height = '100px';
		card.style.cssFloat = "left";
		grid.appendChild(card);
		card.appendChild(front);
		card.appendChild(back);
	});
	}

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {


    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1500;
var counter = 0;

grid.addEventListener('click', function(event){
	let clicked = event.target;

	if(clicked.nodeName === 'SECTION' || clicked == previousTarget) {
		return;
	}
	
	if (count < 2){
		count++;
		if (count === 1) {
			firstGuess = clicked.parentNode.dataset.name;

			clicked.parentNode.classList.add('selected');
			var frontC = clicked.parentNode.querySelectorAll('.selected .front');
			frontC.forEach((item) => {
			frontC[0].classList.add('idk');
			frontC[0].classList.remove('front');

			});
			
			console.log(clicked);

		} else {
			secondGuess = clicked.parentNode.dataset.name;
			
			clicked.parentNode.classList.add('selected');
			var frontD = clicked.parentNode.querySelectorAll('.selected .front');
			frontD.forEach((item) => {
			frontD[0].classList.add('idk');
			frontD[0].classList.remove('front');
			});
			console.log(clicked);
		}
		if (firstGuess !== '' && secondGuess !== ''){
			if (firstGuess === secondGuess){
				setTimeout(match(), 2000);
				setTimeout(reset(), 1000);
			}
			else {
			setTimeout(reset, delay);
			var frontB = document.querySelectorAll('.selected .idk');
			console.log(frontB);
			setTimeout(function() {
			frontB[0].classList.add('front');
			frontB[1].classList.add('front');
			frontB[0].classList.remove('idk');
			frontB[1].classList.remove('idk');
			}, 1500);
			}
		}
		previousTarget = clicked;
	}
	
});

const match = () => {
	var selected = document.querySelectorAll('.selected');
	counter++;
	selected.forEach((card) => {
		card.classList.add('match');
	});
	if (counter == gameGrid.length/2){
		clearTimeout(timer);
		alert("CONGRATS. YOU WON!!!!");
	}
};

const reset = () => {
	firstGuess = '';
	secondGuess = '';
	count = 0;

	var selected = document.querySelectorAll('.selected');
	selected.forEach((card) => {
		card.classList.remove('selected');
		//card.childNodes.classList.add('front');
	});
};
