import { SeriesSchema } from './series.schema';

describe('SeriesSchema', () => {
  it('should be defined', () => {
    expect(new SeriesSchema()).toBeDefined();
  });
});
