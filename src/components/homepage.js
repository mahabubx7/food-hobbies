const cards = document.querySelector('.cards');
const meals = [];
let count = 0;

const homepageComponent = () => {
  const getResponse = async () => {
    while (count < 15) {
      const response = fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
        {
          method: 'GET',
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = response.json();
      meals.push(data.meals);
      count += 1;
    }
    return meals;
  };

  getResponse().then((meals) => {
    const MealsData = meals;
    cards.innerHTML = MealsData.map((meal) => `
        <div class="card">
          <img src="${meal[0].strMealThumb}" class="img-food">
          <div class="food-info">
            <p class="food-name">${meal[0].strMeal}</p>
            <input type="button" class="button" value="Comments">
            <p class="love">&#10084;</p>
          </div>
          <p class="likes">count likes</p>
        </div>
      `).join('');
  });
};

export default homepageComponent;