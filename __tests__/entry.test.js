/**
 * @jest-environment jsdom
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import '../__mocks__/mockHtml';
import '../__mocks__/mockJavaScripts';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('Should render app as demo for now', () => {
  it('Should have #app (div) in document', () => {
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
