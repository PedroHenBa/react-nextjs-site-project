import { Loading } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Loading />', () => {
  it('should render Loading component', () => {
    renderTheme(<Loading />);
  });
});
