import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColums, mapTextGrid } from './map-sections';
import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[1].component).toBe('section.section-content');
  });

  it('should test sections with invalid data', () => {
    const withNoTextAndImage = mapSections([{ __component: 'section.section-content' }]);
    const withNoComponent = mapSections([{}]);
  });

  it('should test sections with invalid data', () => {
    const withTextEmpty = mapSections([{ __component: 'section.section-grid', text_grid: [] }]);
    const withImageEmpty = mapSections([{ __component: 'section.section-grid', image_grid: [{ image: [{}] }] }]);
    expect(withTextEmpty[0].text_grid).toEqual([]);
  });

  it('should map sections two columns with no data', () => {
    const data = mapSectionTwoColums();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map sections two columns with data', () => {
    const data = mapSectionTwoColums({
      __component: 'section.section-two-colums',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'description',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.component).toBe('section.section-two-colums');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
    expect(data.text).toBe('description');
    expect(data.srcImage).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content: '<p>test</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });
    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe('<p>test</p>');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid();
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map text grid with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description: 'test',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'test1',
        },
        {
          title: 'Teste 2',
          description: 'test2',
        },
        {
          title: 'Teste 3',
          description: 'test3',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('test');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('test1');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid();
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'test',
      text_grid: [],
      image_grid: [
        {
          image: [
            {
              alternativeText: 'Flores rosas',
              url: 'rosas.svg',
            },
          ],
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('test');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('Flores rosas');
    expect(data.grid[0].srcImage).toBe('rosas.svg');
  });
});
