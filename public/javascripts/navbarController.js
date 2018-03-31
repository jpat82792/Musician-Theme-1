var initNavIcon = function(){
  console.log("initNavIcon()");
  document.getElementById('options-menu').addEventListener('click', function(){
    toggleOptionsMenu();
  });
  document.getElementById('navbar-close-modal').addEventListener('click', function(event){
    event.stopPropagation();
    toggleOptionsMenu();
  });
}

var toggleOptionsMenu = function(){
  console.log('toggleOptionsMenu()');
  var navbarModal = document.getElementById('navbar-modal');
  if(navbarModal.classList.contains('active-modal')){
    navbarModal.classList.remove('active-modal');
  }
  else{
    navbarModal.classList.add('active-modal');
  }
}
initNavIcon();
