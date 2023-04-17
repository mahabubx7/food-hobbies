/* eslint-disable import/extensions */

const renderApp = async (appContainer) => {
  const markups = `
    <div class="container">
      <h1>Food Hobbies</h1>
    </div>
  `;
  appContainer.innerHTML = `${markups}`;
};

const setupApp = (element) => {
  renderApp(element); // render first-initial DOM
};

export default setupApp;
