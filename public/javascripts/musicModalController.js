var initUi = function(){
  var musicModal = document.getElementById('music-modal');
  musicModal.children[0].children[0].onclick = function(event){
    event.stopPropagation();
  }
  var closeMusicModalButton = document.getElementById('music-close-modal');
  closeMusicModalButton.onclick = function(){
    toggleModal(musicModal)
  }
  musicModal.children[0].onclick = function(){
    toggleModal(musicModal)
  }

  var albums = document.getElementsByClassName('album');
  for(var i = 0 ; i < albums.length; i++){
    albums[i].onclick = function(){
      toggleModal(musicModal);
    }
  }
}



initUi();
