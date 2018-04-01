var initNewsletter = function(){
  console.log("initNewsletter");
  var contactButton = document.getElementById('newsletter');
  var contactModal = document.getElementById('newsletter-modal');
  var closeContactModal = document.getElementById('newsletter-close-modal');
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

initNewsletter();
