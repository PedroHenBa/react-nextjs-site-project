import { GridTwoColumn } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('should render Two Column Grid component', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock}>children</GridTwoColumn>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
