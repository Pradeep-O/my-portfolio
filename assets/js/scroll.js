document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const totalSlides = 2;
    const certification = document.querySelector('.certification');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
  
    function updateButtons() {
      leftBtn.style.visibility = currentSlide > 0 ? 'visible' : 'hidden';
      rightBtn.style.visibility = currentSlide < totalSlides - 1 ? 'visible' : 'hidden';
    }
  
    leftBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        certification.style.transform = `translateX(-${currentSlide * 50}%)`;
        updateButtons();
      }
    });
  
    rightBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        certification.style.transform = `translateX(-${currentSlide * 50}%)`;
        updateButtons();
      }
    });
  
    // Initial button state
    updateButtons();
  });