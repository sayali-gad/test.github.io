// const options = {
//   root: null, // setting root to null sets it to viewport
//   rootMargin: "0px",
//   threshold: 0.99
// };

// const observerCallback = entries => {
//   const { isIntersecting, intersectionRatio } = entries[0];
//   if (isIntersecting === true || intersectionRatio > 0) {
//     console.log(entries[0].target);

//     // document.scrollingElement.scrollTop = 0;
//     //   observer.unobserve(entry.target);
//   }
// };

// var observer = new IntersectionObserver(observerCallback, options);

// const onload = () => {
//   const target = document.querySelector(".header--clone");
//   const aboutTarget = document.querySelector(".about");
//   const contactTarget = document.querySelector(".contact");
//   observer.observe(aboutTarget);
// };

const options = {
  root: null,
  rootMargin: "0px",
  threshold: [1.0, 0.7]
  // trackVisibility: true
};

const callback = entries => {
  entries.forEach(entry => {
    const { isIntersecting } = entry;
    console.log(entry);
    const target = document.querySelector(".about__text").classList;
    if (isIntersecting) {
      target.remove("fade");
    } else {
      target.add("fade");
    }
  });
};

const optionsClone = {
  root: null, // setting root to null sets it to viewport
  rootMargin: "0px",
  threshold: [0.99]
};

const callbackClone = entries => {
  const { isIntersecting, intersectionRatio } = entries[0];
  if (isIntersecting === true) {
    document.scrollingElement.scrollTop = 5;
  }
};

let observer = new IntersectionObserver(callback, options);
var observerClone = new IntersectionObserver(callbackClone, optionsClone);

const onLoad = e => {
  alert("loaded")
  const elem = document.querySelector(".about");
  const elemClone = document.querySelector(".header--clone");
  observer.observe(elem);
  observerClone.observe(elemClone);
};
