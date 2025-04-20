function handleSearch() {
  const locationInput = document.querySelector('.search-bar input[type="text"]');
  const dateInputs = document.querySelectorAll('.search-bar input[type="date"]');

  const location = locationInput.value.trim();
  const checkIn = dateInputs[0].value;
  const checkOut = dateInputs[1].value;

  if (!location || !checkIn || !checkOut) {
    alert("Please fill in all search fields.");
    return;
  }

  console.log(`Searching for stays in ${location} from ${checkIn} to ${checkOut}`);
  alert(`Searching for stays in ${location} from ${checkIn} to ${checkOut}`);
}


// Carousel logic
let slideIndex = 0;
carouselShow();

function carouselShow() {
  const slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carouselShow, 4000); // Change slide every 4 seconds
}
