/* eslint-disable import/extensions */

import headerComponent from '../components/header';
import footerComponent from '../components/footer';
import homepageComponent from '../components/homepage';

const renderApp = async () => {
  const { body } = document;
  // header-init
  body.insertBefore(document.createElement('header'), document.querySelector('main'));
  headerComponent(body.querySelector('header')); // header-component-render

  const cardsContainer = document.querySelector('.items');
  const cards = document.createElement('div');
  cards.classList.add('cards');
  await homepageComponent(cards);
  cardsContainer.appendChild(cards);
  // console.log(cards.innerHTML);
  // document.addEventListener('DOMContentLoaded', () => console.log('LOADED...!'));

  body.appendChild(document.createElement('footer'), document.querySelector('main'));
  footerComponent(body.querySelector('footer')); // footer-component-render
};

const setupApp = async () => {
  await renderApp(); // render first-initial DOM
};

export default setupApp;
