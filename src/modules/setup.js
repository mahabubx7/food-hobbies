/* eslint-disable import/extensions */

import headerComponent from '../components/header';

const renderApp = async (appContainer) => {
  const { body } = document;
  // header-init
  body.insertBefore(document.createElement('header'), document.querySelector('main'));
  headerComponent(body.querySelector('header')); // header-component-render

  const markups = `
    <div class="container">
      <h1>Food Hobbies <small>JS capstone project</small></h1>
    </div>
  `;
  appContainer.innerHTML = `${markups}`;
};

const setupApp = async (element) => {
  await renderApp(element); // render first-initial DOM
};

export default setupApp;
