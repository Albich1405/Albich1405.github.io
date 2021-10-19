let pos = 0;
const SL = document.querySelector('.slider-line');

function openMenu() {
		document.getElementById("burg").classList.toggle('left');
		document.getElementById("btn").classList.toggle('left-btn');
}
document.querySelector('.slider-prev').addEventListener('click', function(){
	pos -= 600;
	if(pos < 0 ){
		pos = 1200;
	}
	SL.style.left = -pos + 'px';
});
document.querySelector('.slider-next').addEventListener('click', function(){
	pos += 600;
	if(pos > 1200 ){
		pos = 0;
	}
	SL.style.left = -pos + 'px';
});
