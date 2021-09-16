import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';
import { PageData } from '../templates/Home';

/* eslint-disable @typescript-eslint/no-explicit-any*/
export const mapData = (pagesData = [{}]): PageData[] => {
  return pagesData.map((data: any): PageData => {
    const { footer_text: footerHtml = '', slug = '', title = '', menu = {}, sections = [] } = data;
    return {
      footerHtml,
      slug,
      title,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    };
  });
};
