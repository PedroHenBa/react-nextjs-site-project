import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-data', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImage).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys e values', () => {
    const menu = mapMenu({
      open_new_tab: false,
      logo_text: 'Landing Page',
      menu_link: [],
      __v: 0,
      logo: {
        url: 'a.svg',
      },
      menu: [
        {
          open_new_tab: false,
          link_text: 'intro',
          url: '#intro',
        },
        {
          open_new_tab: false,
          link_text: 'grid_one',
          url: '#grid_one',
        },
      ],
      logo_link: '#home',
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImage).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
