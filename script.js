const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  backdrop.classList.toggle('active');
});
backdrop.addEventListener('click', () => {
  sidebar.classList.remove('active');
  backdrop.classList.remove('active');
});

// Typing effect untuk home
const typingText = ["Web Developer", "UI/UX Designer", "Creative Coder"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.querySelector(".typing");

if(typingElement){
  function type(){
    currentText = typingText[i];
    typingElement.textContent = currentText.substring(0, j);
    if(!isDeleting && j < currentText.length){ j++; setTimeout(type, 120);}
    else if(isDeleting && j > 0){ j--; setTimeout(type, 60);}
    else{
      if(!isDeleting){ isDeleting = true; setTimeout(type, 1000);}
      else {isDeleting = false; i=(i+1)%typingText.length; setTimeout(type, 200);}
    }
  }
  type();
}