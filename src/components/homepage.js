/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */

import commentCounter from '../modules/commentCounter';
import itemCounterFunction from '../modules/itemCounter';

const homepageComponent = async (element) => {
  const meals = [];
  let count = 0;
  const isLocalStorage = JSON.parse(localStorage.getItem('MEALS'));

  const questionButton = document.querySelector('.question-button');
  questionButton.addEventListener('click', () => {
    localStorage.removeItem('MEALS');
    window.location.reload();
  });

  const getResponse = async () => {
    const mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';

    if (isLocalStorage) {
      return isLocalStorage;
    }

    while (count < 15) {
      const response = await fetch(mealAPI,
        {
          method: 'GET',
        });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      meals.push(data.meals);
      count += 1;
    }
    localStorage.setItem('MEALS', JSON.stringify(meals));
    return meals;
  };

  const getComments = async (itemId) => {
    let comments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments?item_id=${itemId}`,
      {
        method: 'GET',
      },
    );

    comments = await comments.json();
    return comments.error ? [] : comments;
  };

  getResponse().then((meals) => {
    const MealsData = meals;
    MealsData.map((meal) => {
      element.innerHTML += `
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
            <h3>${meal[0].strMeal}</h3>
            <p>
              <strong>${meal[0].strCategory}</strong>
              <i class="ri-git-commit-line"></i>
              <strong>${meal[0].strArea}</strong>
            </p>
            <h4>Top 3 Ingredients</h4>
            <p>
              <span>${meal[0].strIngredient1}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient2}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient3}</span>
            </p>
            <h4>Add a comments</h4>
            <form class="comment-form" data-id=${meal[0].idMeal}>
              <input name="username" type="text" placeholder="Your name." />
              <textarea name="comment" rows="5" placeholder="Your insights."></textarea>
              <button type="submit">add comment</button>
            </form>
            <h4 class="comment-count"></h4>
            <ul class="comments" data-id=${meal[0].idMeal}>
              <li>2023-04-19 Mahabub: This is delicious!</li>
            </ul>
            <small>source: ${meal[0].strSource}</small>
            </div>
          </div>
          <p class="love" data-id="${meal[0].idMeal}">&#10084;</p>
        </div>
        <p class="likes" >
          <span class="likes-counter" data-id="${meal[0].idMeal}">0</span>
          likes
        </p>
      </div>
      `;
    });
  }).then(async () => {
    // for comments [details pop-up]
    const commentBtns = element.querySelectorAll('.button');

    async function renderComment(element) {
      // form
      let list = await getComments(element.dataset.id);

      async function renderComments() {
        // comment-list
        list = await getComments(element.dataset.id);
        const commentList = element.parentElement.querySelector('ul.comments');
        // const comments = commentList.parentElement.querySelector('[data-counter="comments"]');
        commentList.innerHTML = ''; // reset-first
        if (list.length > 0) {
          list.forEach((comment) => {
            commentList.innerHTML += `<li><i>${comment.creation_date}</i> <b>${comment.username}</b>: ${comment.comment}</li>`;
          });
        }
        const countHead = element.parentElement.querySelector('h4.comment-count');
        // console.log(countHead);
        await commentCounter(list, countHead);
      }
      async function handleForm(itemId) {
        const newCommentObj = {
          username: element.querySelector('input').value,
          comment: element.querySelector('textarea').value,
        };
        await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments',
          {
            method: 'POST',
            body: JSON.stringify({ ...newCommentObj, item_id: `${itemId}` }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          },
        ).then(() => {
          // fields reset
          element.querySelector('input').value = '';
          element.querySelector('textarea').value = '';
          renderComments(); // re-render comment list
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
      }

      renderComments(); // initial render

      element.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        handleForm(e.target.parentElement.dataset.id);
      });
    }
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.comment-box').forEach((box) => box.classList.add('hidden'));
        document.querySelectorAll('.comment-box').forEach(async (box) => box.classList.add('hidden'));
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.remove('hidden');
        renderComment(document.querySelector(`[data-id="${btn.dataset.item}"]`));
      });

      document.querySelector(`[data-id="${btn.dataset.item}"] .btn-close`).addEventListener('click', () => {
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.add('hidden');
      });
    });

    // get likes-counter
    const likesAPI = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes')
      .then((response) => response.json())
      .then((data) => data);

    const likesCounter = element.querySelectorAll('.likes-counter');
    likesCounter.forEach((likeCounter) => {
      const likesId = likeCounter.getAttribute('data-id');
      const element = likeCounter;
      likesAPI.forEach((likeAPI) => {
        if (likesId === likeAPI.item_id) {
          element.innerHTML = likeAPI.likes;
        }
      });
    });

    // add or post likes-counter
    const likesButton = element.querySelectorAll('.love');

    likesButton.forEach((likeButton) => {
      likeButton.addEventListener('click', (e) => {
        const targetCounter = e.target.parentElement.nextSibling.nextSibling.children[0].innerText;
        e.target.parentElement.nextSibling.nextSibling.children[0].innerText = (+targetCounter) + 1;

        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes', {
          method: 'POST',
          body: JSON.stringify({
            item_id: likeButton.getAttribute('data-id'),
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      });
    });

    // item counter
    const itemCounter = document.querySelector('.item-counter');
    itemCounterFunction(JSON.parse(localStorage.getItem('MEALS')), itemCounter);
  });
};

export default homepageComponent;
