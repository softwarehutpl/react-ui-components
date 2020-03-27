export const styleReorder = () => {
  const head = document.querySelector('head');
  if (head) {
    const styledComponentsStyle = head.lastChild;
    const firstStyleTag = document.querySelector('style');
    if (styledComponentsStyle && firstStyleTag) {
      styledComponentsStyle.remove();
      head.insertBefore(styledComponentsStyle, firstStyleTag);
    }
  }
};
