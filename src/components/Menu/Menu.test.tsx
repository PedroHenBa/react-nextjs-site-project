import { Menu } from './index';
import { renderTheme } from '../../styles/render-theme';
import { fireEvent, screen } from '@testing-library/react';
import linksMock from '../Navlinks/mock';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target1',
  srcImage: '',
};

describe('<Menu />', () => {
  it('should render Menu component with Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main menu' }));
    expect(container).toMatchSnapshot();
  });

  it('should render Menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');

    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });

    fireEvent.click(menuContainer);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(screen.getByRole('navigation', { name: 'Main menu' }).firstChild).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
