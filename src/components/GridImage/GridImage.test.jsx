import { GridImage } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render GridImage component', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render GridImage component', () => {
    const { container } = renderTheme(<GridImage {...mock} background={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
