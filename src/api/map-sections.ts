/* eslint-disable @typescript-eslint/no-explicit-any*/

import { GridTwoColumnProps } from '../components/GridTwoColumn';
import { GridContentProps } from '../components/GridContent';
import { GridTextElementProps, GridTextProps } from '../components/GridText';
import { GridImageElementProps, GridImageProps } from '../components/GridImage';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-colums') {
      return mapSectionTwoColums(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColums = (section = {} as any): GridTwoColumnProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImage = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return { component, title, text, srcImage, background, sectionId };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return { component, title, html, background, sectionId };
};

export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;
      return { title, description };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img: any): GridImageElementProps => {
      const { image } = img;
      const { url: srcImage = '', alternativeText: altText = '' } = image[0];
      return { srcImage, altText };
    }),
  };
};
