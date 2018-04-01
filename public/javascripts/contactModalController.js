var initContact = function(){
  console.log('initContact');
  var contactButton = document.getElementById('contact');
  var contactModal = document.getElementById('contact-modal');
  var closeContactModal = document.getElementById('contact-close-modal');
  contactModal.children[0].onclick = function(){
    toggleModal(contactModal);
  }
  contactModal.children[0].children[0].onclick = function(event){
    event.stopPropagation();
  }
  closeContactModal.onclick = function(){
    toggleModal(contactModal);
  }
  contactButton.onclick=function(){
    console.log("contactButton");
    toggleModal(contactModal);
  }
}

initContact()

var toggleModal = function(modal){
  console.log("toggleModal");
  if(modal.classList.contains('active-modal')){
    modal.classList.remove('active-modal');
  }
  else{
    modal.classList.add('active-modal');
  }
}
