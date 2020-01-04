const options = {
  root: null, // setting root to null sets it to viewport
  rootMargin: "0px",
  threshold: 0.99
};

const observerCallback = entries => {
  const { isIntersecting, intersectionRatio } = entries[0];
  if (isIntersecting === true || intersectionRatio > 0) {
    console.log(document);
    document.scrollingElement.scrollTop = 0;
    //   observer.unobserve(entry.target);
  }
};

var observer = new IntersectionObserver(observerCallback, options);

const onload = () => {
  const target = document.querySelector(".header--clone");
  observer.observe(target);
};
