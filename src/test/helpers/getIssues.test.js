import '@testing-library/jest-dom';
import { getIssues } from '../../helpers/getIssues';

describe('Test getIssues featch helper', () => {
  it('should bring 10 elements', async () => {
    const issues = await getIssues('React');
    expect(issues.length).toBe(5);
  });
  it('should bring empty array when category is not passed', async () => {
    const issues = await getIssues('');
    expect(issues.length).toBe(5);
  });
});
