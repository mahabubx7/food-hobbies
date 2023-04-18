const 

const homepageComponent = (parentElement) => {
  const markups = `
    <div class="card">
      <img src="${meal[0].strMealThumb}" class="img-food">
      <div class="food-info">
        <p class="food-name">${meal[0].strMeal}</p>
        <p class="love">&#10084;</p>
      </div>
      <p class="likes">count likes</p>
      <div class="buttons">
        <input type="button" class="button" value="Comments">
        <input type="button" class="button" value="Reservations">
      </div>
    </div>
  `;

}

export default homepageComponent;