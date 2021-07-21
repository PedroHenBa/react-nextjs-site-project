import { TextComponent } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render TextComponent component', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    const p = screen.getByText('children');
    expect(p).toBeInTheDocument();
  });

  it('should render Text with correct font size', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    const p = screen.getByText('children');
    expect(p).toHaveStyle({ 'font-size': theme.fonts.sizes.medium });
  });

  it('should match snapchat', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        children
      </div>
    `);
  });
});
