/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */

const cards = document.querySelector('.cards');
const meals = [];
let count = 0;

const homepageComponent = () => {
  const getResponse = async () => {
    while (count < 15) {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      meals.push(data.meals);
      count += 1;
    }
    return meals;
  };

  getResponse().then((meals) => {
    const MealsData = meals;
    MealsData.map((meal) => {
      cards.innerHTML += `
      <div class="card">
        <img src="${meal[0].strMealThumb}" class="img-food">
        <div class="food-info">
          <p class="food-name">${meal[0].strMeal}</p>
          <input type="button" class="button" value="Comments" data-item="${meal[0].idMeal}">
          <div class="comment-box hidden" data-id="${meal[0].idMeal}">
            <div class="box-area">
            <span class="btn-close">
              <i class="ri-close-circle-line"></i>
            </span>
            <img src="${meal[0].strMealThumb}" alt="${meal[0].idMeal}" />
            <p>${meal[0].strInstructions}</p>
            <small>source: ${meal[0].strSource}</small>
            </div>
          </div>
          <p class="love">&#10084;</p>
        </div>
        <p class="likes">count likes</p>
      </div>
      `;
    });
  }).then(() => {
    // for comments [details pop-up]
    const commentBtns = cards.querySelectorAll('.button');
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.comment-box').forEach((box) => box.classList.add('hidden'));
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.remove('hidden');
      });

      document.querySelector(`[data-id="${btn.dataset.item}"] .btn-close`).addEventListener('click', () => {
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.add('hidden');
      });
    });
  });
};

export default homepageComponent;
