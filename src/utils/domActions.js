const removeChildWithinParent = (parent, childList) => {
  childList.forEach((child) => {
    const childNode = document.getElementById(child);
    if (parent.contains(childNode)) {
      parent.removeChild(childNode);
    }
  });
};

const addTabContent = (parent, child, component) => {
  const childNode = document.getElementById(child);
  if (!parent.contains(childNode)) {
    parent.appendChild(component);
  }
};

const loadAsHtml = (projects, callback) => {
    let list = '';
    projects.forEach((obj) => {
      list += (callback(obj));
    });
  
    return list;
};

export { removeChildWithinParent, addTabContent, loadAsHtml };