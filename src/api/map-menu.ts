import { PageData } from '../templates/Home';
import { MenuLinkProps } from '../components/MenuLink';

/* eslint-disable @typescript-eslint/no-explicit-any*/

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const { open_new_tab: newTab = false, logo_text: text = '', logo_link: link = '', menu: links = [] } = menu;

  const srcImage = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    srcImage,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item: any): MenuLinkProps => {
    const { open_new_tab: newTab = false, link_text: children = '', url: link = '' } = item;
    return {
      newTab,
      children,
      link,
    };
  });
};
