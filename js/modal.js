(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

function header_main(){ 
  
  let win = document.getElementById('header_window');
 
  let style = getComputedStyle(win);
      if (style.display === 'none') {
          document.getElementById('header_window').style.display= 'block';
  }else if (style.display === 'block') {
          document.getElementById('header_window').style.display= 'none';
  }
}
function win_exit() { 
  
  let win = document.getElementById('header_window');
 
  let style = getComputedStyle(win);
      if (style.display === 'block') {
          document.getElementById('header_window').style.display= 'none';
 
  }
}