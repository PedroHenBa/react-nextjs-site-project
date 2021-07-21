import { GridText } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid Text with background', () => {
    const { container } = renderTheme(<GridText {...mock}>children</GridText>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render grid Text without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined}>
        children
      </GridText>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
