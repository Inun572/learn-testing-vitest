import writeData from './io';
import { describe, it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';

vi.mock('fs');
vi.mock('path', () => ({
  default: {
    join: (...args) => args[args.length - 1],
  },
}));

describe('writeData', () => {
  it('should execute the writeFile method', () => {
    const testdata = 'Test1';
    const testFilename = 'test.txt';

    writeData(testdata, testFilename);

    // return expect(
    //   writeData(testdata, testFilename)
    // ).resolves.toBeUndefined();

    // expect(fs.writeFile).toBeCalled();

    expect(fs.writeFile).toBeCalledWith(
      testFilename,
      testdata
    );
  });
});
