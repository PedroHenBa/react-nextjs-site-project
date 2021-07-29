import { Loading } from './index';
import { renderTheme } from '../../styles/render-theme';

describe('<Loading />', () => {
  it('should render Loading component', () => {
    renderTheme(<Loading />);
  });
});
