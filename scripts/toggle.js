var btnToggle = document.querySelectorAll('div.btn-default');

if(btnToggle){
	for(var i = 0; i < btnToggle.length; i++){
		btnToggle[i].addEventListener('click', toggleLoad, false);

		function toggleLoad(){
			var spinner = document.getElementsByClassName('spinner-container');
			spinner[0].style.display = "block";
		}
	}
}