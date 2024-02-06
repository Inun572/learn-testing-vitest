import { generateReportData } from './data';
import { describe, it, expect, vi } from 'vitest';

describe('generateReportData', () => {
  it('should execute the logFn if provided', () => {
    const logFn = vi.fn();
    generateReportData(logFn);
    expect(logFn).toBeCalled();
  });
});
