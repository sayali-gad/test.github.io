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
  threshold: [1.0, 0.7, 0.5]
  // trackVisibility: true
};

const headerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2]
};

const callback = entries => {
  entries.forEach(entry => {
    const { isIntersecting, intersectionRatio } = entry;
    console.log(entry);
    const target = document.querySelector(".about__text").classList;
    if (isIntersecting || intersectionRatio > 0.7) {
      target.remove("fade");
    } else {
      target.add("fade");
    }
  });
};

const headerCallback = entries => {
  entries.forEach(entry => {
    const { isIntersecting, intersectionRatio } = entry;
    console.log(entry);
    const target = document.querySelector(".navigation");
    if (isIntersecting || intersectionRatio > 0.7) {
      target.classList.remove("colorNav");
    } else {
      target.classList.add("colorNav");
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
  const target = document.querySelector(".navigation");

  if (isIntersecting === true) {
    target.classList.remove("colorNav");

    document.scrollingElement.scrollTop = 5;
  }
};

let observer = new IntersectionObserver(callback, options);
var observerClone = new IntersectionObserver(callbackClone, optionsClone);
var headerObserver = new IntersectionObserver(headerCallback, headerOptions);

const onLoad = e => {
  // alert("loaded")
  const elem = document.querySelector(".about");
  const elemClone = document.querySelector(".header--clone");
  const headerElem = document.querySelector(".header--main");
  observer.observe(elem);
  observerClone.observe(elemClone);
  headerObserver.observe(headerElem);
};

var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("btnDetails");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var bodyScrollElement = document.querySelector("body");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  bodyScrollElement.style.overflow = "unset";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    bodyScrollElement.style.overflow = "unset";
  }
};

const showModal = btn => {
  modal.querySelector(".modal-body").innerHTML =
    btn.parentElement.nextSibling.nextSibling.innerHTML;
  // $(".modal-body .slider").slick();

  modal.style.display = "block";
  $(".modal-body .slider").slick({
    arrows: true
  });
  bodyScrollElement.style.overflow = "hidden";
};
