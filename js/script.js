

// Optional: For interactive actions or scroll effects in future
console.log("Script loaded.");


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });


  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
  // Get form elements
  let firstName = document.querySelector('input[placeholder="First Name"]');
  let lastName = document.querySelector('input[placeholder="Last Name"]');
  let service = document.querySelector('select');
  let phone = document.querySelector('input[placeholder="Phone"]');
  let message = document.querySelector('textarea');
  
  // Validate First Name and Last Name
  if (!firstName.value.trim()) {
      event.preventDefault();  // Prevent form submission
      alert("Please enter your first name.");
      return;
  }

  if (!lastName.value.trim()) {
      event.preventDefault();  // Prevent form submission
      alert("Please enter your last name.");
      return;
  }

  // Validate Service Selection
  if (service.value === "") {
      event.preventDefault();  // Prevent form submission
      alert("Please select a service.");
      return;
  }

  // Validate Phone Number (10 digits)
  if (!phone.value.match(/^\d{10}$/)) {
      event.preventDefault();  // Prevent form submission
      alert("Phone number must be 10 digits.");
      return;
  }

  // Validate Message
  if (!message.value.trim()) {
      event.preventDefault();  // Prevent form submission
      alert("Please enter a message.");
      return;
  }
});



// JS code here only (no <script> tags)
document.addEventListener("DOMContentLoaded", () => {
  let counters = document.querySelectorAll(".my-counter-number");
  let triggered = false;

  const animate = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.number;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      let count = 0;

      const updateCounter = () => {
        count++;
        counter.innerText = count.toLocaleString();
        if (count < target) {
          setTimeout(updateCounter, stepTime);
        }
      };

      updateCounter();
    });
  };

  window.addEventListener("scroll", () => {
    const section = document.getElementById("counter");
    if (!triggered && window.scrollY + window.innerHeight > section.offsetTop) {
      animate();
      triggered = true;
    }
  });
});




// Document ready function
/*
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  let index = 0;
  const totalSlides = dots.length;

  function moveToSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
    index = i;
  }

  function autoSlide() {
    index = (index + 1) % totalSlides;
    moveToSlide(index);
  }

  setInterval(autoSlide, 4000);
*/







  // Bootstrap 5 Form Validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill out all fields before submitting.',
      });
      return false;
    }

    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return false;
    }

    // Success message (optional)
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent.',
    });

    // To prevent form from actually submitting in demo
    return false;
  }



  function openBlog(id) {
    window.location.href = `blog-single.html?id=${id}`;
  }



