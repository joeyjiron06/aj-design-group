const ANIM_PREFIX = 'aos:';
const ANIM_RATIO_PREFIX = `${ANIM_PREFIX}ratio-`;
const ANIM_DEFAULT_RATIO = 40;

const elements = document.querySelectorAll("[class*='aos']");

function getScrollRatio(element: HTMLElement): string {
  const ratioClassName = Array.from(element.classList).find(className => className.startsWith(ANIM_RATIO_PREFIX));

  if (!ratioClassName) {
    return '';
  }

   return ratioClassName.replace(ANIM_RATIO_PREFIX, '');
}

function getAnimatedClassNames(element: HTMLElement): Array<string> {
  const classNames:Array<string> = ['animate__animated'];
  
  Array.from(element.classList)
    .filter(className => className.startsWith(ANIM_PREFIX))
    .filter(className => !className.startsWith(ANIM_RATIO_PREFIX))
    .forEach(className => classNames.push(className.replace(ANIM_PREFIX, 'animate__')))

  return classNames;
}

function unobserveCheck() {
  if (Array.from(elements).every(element => (element as HTMLElement).dataset?.animated === 'true')) {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.target instanceof HTMLElement) {
        if (entry.target.dataset.animated !== 'true') {
          const ratio = Number(getScrollRatio(entry.target) || ANIM_DEFAULT_RATIO) / 100;
          
          if (entry.intersectionRatio >= ratio) {
            entry.target.dataset.animated = 'true';
            entry.target.classList.add(...getAnimatedClassNames(entry.target));
          }
        }
      }
  });

  unobserveCheck();
}, {
  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
})


elements.forEach(element => {
  observer.observe(element);
});

export default () => {};