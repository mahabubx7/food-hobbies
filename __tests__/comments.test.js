/**
 * @jest-environment jsdom
 */

import commentCounter from '../src/modules/commentCounter';

describe('Should render the exact comments count', () => {
  it('Should render one comment in the list', () => {
    const comment = [{ comment: 'Nice' }];
    const commentsHeader = document.createElement('h2');
    commentCounter(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('Comments (1)');
  });

  it('Should render two comment in the list', () => {
    const comment = [{ comment: 'Nice' }, { comment: 'cool' }];
    const commentsHeader = document.createElement('h2');
    commentCounter(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('Comments (2)');
  });

  it('Should render one comment in the list if the comment is empty', () => {
    const comment = [];
    const commentsHeader = document.createElement('h2');
    commentCounter(comment, commentsHeader);

    expect(commentsHeader.innerHTML).toEqual('Comments (0)');
  });
});
