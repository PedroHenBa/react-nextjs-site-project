import { GridText } from './index';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid Text with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render grid Text without background', () => {
    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
