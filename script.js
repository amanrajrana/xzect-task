const counterAnimation = (elem) => {
  let start = 0;
  const targetNumber = parseInt(elem.innerText);
  const duration = 2000; // animation Time in ms

  function updateCounter() {
    const increment = targetNumber / (duration / 10);
    start += increment;

    if (start < targetNumber) {
      elem.innerText = Math.ceil(start);
      setTimeout(updateCounter, 10);
    } else {
      elem.innerText = targetNumber + "+";
    }
  }

  updateCounter();
};

const startCounter = () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counterAnimation(counter);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.getElementById("counters");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter();
        observer.disconnect();
      }
    });
  });

  observer.observe(counters);
});
