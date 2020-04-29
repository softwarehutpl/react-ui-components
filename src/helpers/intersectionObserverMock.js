export default function setupIntersectionObserverMock({
  observe = () => null,
  unobserve = () => null,
} = {}) {
  class IntersectionObserver {
    observe = observe;
    unobserve = unobserve;
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
}
