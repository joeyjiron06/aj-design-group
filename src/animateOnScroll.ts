const ANIM_PREFIX = 'aos:';

const elements = document.querySelectorAll("[class*='aos']");

function init(element: HTMLElement) {
  element.dataset.aosInit = '1';

}

function animate(element: HTMLElement) {
  element.className = Array.from(element.classList)
    .filter(className => !className.startsWith(ANIM_PREFIX))
    .join(' ');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animate(entry.target as HTMLElement);
      observer.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '-60px'
})

elements.forEach(element => {
  if (element instanceof HTMLElement) {
    init(element);
    observer.observe(element);
  }
});

export default () => {};