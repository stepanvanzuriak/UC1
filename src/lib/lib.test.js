import { filterByCountry, filterByPopulation, sortByName, pagination } from './lib';

describe('lib', () => {
  describe('filterByCountry', () => {
    test('it returns true if no filter provided', () => {
      expect(filterByCountry(undefined)({})).toBe(true);
      expect(filterByCountry(false)({})).toBe(true);
      expect(filterByCountry(null)({})).toBe(true);
      expect(filterByCountry(NaN)({})).toBe(true);
    });

    test('it filter by part of name', () => {
      const data = [
        { name: { common: 'Some name' } },
        { name: { common: 'Sother' } },
      ];

      expect(data.filter(filterByCountry('so'))).toHaveLength(2);
      expect(data.filter(filterByCountry('some'))).toHaveLength(1);
    });
  });

  describe('filterByPopulation', () => {
    test('it returns true if no filter provided', () => {
      expect(filterByPopulation(undefined)({})).toBe(true);
      expect(filterByPopulation(false)({})).toBe(true);
      expect(filterByPopulation(null)({})).toBe(true);
      expect(filterByPopulation(NaN)({})).toBe(true);
    });

    test('it filters correctly', () => {
      const data = [
        { population: 190000 },
        { population: 2000001 },
      ];

      expect(data.filter(filterByPopulation(2))).toHaveLength(1);
      expect(data.filter(filterByPopulation(3))).toHaveLength(2);
    });
  })

  describe('sortByName', () => {
    test('it returns 0 if no sort value provided', () => {
      expect(sortByName(undefined)({})).toBe(0);
      expect(sortByName(false)({})).toBe(0);
      expect(sortByName(null)({})).toBe(0);
      expect(sortByName(NaN)({})).toBe(0);
    });

    test('it sorts correctly', () => {
      const data = [
        { name: { common: 'A' } },
        { name: { common: 'B' } },
        { name: { common: 'C' } },
      ];

      expect(data.sort(sortByName('ascend'))).toStrictEqual(data);
      expect(data.sort(sortByName('descend'))).toStrictEqual([
        { name: { common: 'C' } },
        { name: { common: 'B' } },
        { name: { common: 'A' } },
      ]);
    });
  })

  describe('pagination', () => {
    test('it returns data if no  value provided', () => {
      const data = [42, 43];

      expect(pagination(data, undefined)).toBe(data);
      expect(pagination(data, false)).toBe(data);
      expect(pagination(data, null)).toBe(data);
      expect(pagination(data, NaN)).toBe(data);
    });

    test('it paginating correctly', () => {
      const data = [
        'A',
        'B',
        'C'
      ];

      expect(pagination(data, 1)).toStrictEqual(['A']);
      expect(pagination(data, 2)).toStrictEqual(['A', 'B']);
      expect(pagination(data, 3)).toStrictEqual(['A', 'B', 'C']);
      expect(pagination(data, 30)).toStrictEqual(['A', 'B', 'C']);
    });
  })
});
