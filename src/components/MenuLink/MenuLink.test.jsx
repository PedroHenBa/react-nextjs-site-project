import { MenuLink } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com.br/">children</MenuLink>);
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_self');
  });

  it('should render a link', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br/" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute('target', '_blank');
  });

  it('should render a link', () => {
    const { container } = renderTheme(<MenuLink link="https://www.google.com.br/">children</MenuLink>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.6rem;
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.7rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://www.google.com.br/"
        target="_self"
      >
        children
      </a>
    `);
  });
});
