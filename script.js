function myFunction(event) {
    const card = event.target.closest('.card-item'); 
    const dots = card.querySelector('#Learn');
    const moreText = card.querySelector('#more');
    const btnText = card.querySelector('#myBtn');
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Learn More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  