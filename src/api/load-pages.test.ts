/* eslint-disable no-undef */
import { loadPages } from './load-pages';
import * as mapDataModule from './map-data';
import config from '../config';

jest.mock('./map-data', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe('load-pages', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    mockFetch = global.fetch;

    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));
    mockFetch.mockResolvedValue({ json: mockJson });

    jest.clearAllMocks();
  });

  it('should call fetch and mapData with correct values', async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/');
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });
    expect(result).toEqual({ mapped: 1 });
  });

  it('should call fetch with correct slug', async () => {
    await loadPages('Atenção');
    expect(mockFetch).toHaveBeenCalledWith(config.url + '/pages/?slug=Ateno');
  });
});