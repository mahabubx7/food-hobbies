/* eslint-disable import/extensions */

const headerComponent = (parentElement) => {
  const markups = `
  <nav class="container header-nav">
    <nav>
      <span id='logo'>food hobbies.</span>
      <span id='hamberger'><i class="ri-menu-3-line"></i></span>
    </nav>
    <ul id='menu'>
      <li><a href='#' data-page='areas'>meal areas</a></li>
      <li><a href='#' data-page='categories'>meal categories</a></li>
      <li><a href='#' data-page='ingredients'>meal ingredients</a></li>
    </ul>
  </nav>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;
};

export default headerComponent;
