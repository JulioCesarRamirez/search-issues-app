import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';

describe('Test in hook useFetch', () => {
  it('should return the initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('React')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  it('should return array og objects and loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('React')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(5);
    expect(loading).toBe(false);
  });
});
