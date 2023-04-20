/**
 * @jest-environment jsdom
 */

import itemCounterFunction from '../src/modules/itemCounter';

describe('Should render the exact items count', () => {
  it('Should render 5 items in the list', () => {
    const mealItem = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const mealItemElement = document.createElement('span');
    itemCounterFunction(mealItem, mealItemElement);

    expect(mealItemElement.innerHTML).toEqual(' (5)');
  });
});

describe('Should render the exact items count', () => {
  it('Should render 0 item in the list', () => {
    const mealItem = [];
    const mealItemElement = document.createElement('span');
    itemCounterFunction(mealItem, mealItemElement);

    expect(mealItemElement.innerHTML).toEqual(' (0)');
  });
});

describe('Should render the exact items count', () => {
  it('Should render 2 items in the list', () => {
    const mealItem = [{ id: 1 }, { id: 2 }];
    const mealItemElement = document.createElement('span');
    itemCounterFunction(mealItem, mealItemElement);

    expect(mealItemElement.innerHTML).toEqual(' (2)');
  });
});