export const switchControl = () => {
  let allBtns = document.querySelectorAll(".btn-holder");

  for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    let allNodes = btn.children;
    for (let j = 0; j < allNodes.length; j++) {
      let node = allNodes[j];
      let isActive;

      if (node.classList.contains("btn-circle")) {
        if (!node.classList.contains("active")) {
          node.classList.add("active");
          isActive = true;
        } else {
          node.classList.remove("active");
          isActive = false;
        }
      }
      if (node.classList.contains("checkbox")) {
        if (isActive) {
          node.checked = true;
        } else {
          node.checked = false;
        }
      }
      return isActive;
    }
  }
};
