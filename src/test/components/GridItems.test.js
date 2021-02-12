import React from 'react';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { useFetch } from '../../hooks/useFetch';
import { GridItems } from '../../components/GridItems';

configure({ adapter: new Adapter() });

jest.mock('../../hooks/useFetch');

describe('Test <GridItems />', () => {
  const issue = 'react';

  it('Should show <GridItems /> correctly', () => {
    useFetch.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GridItems item={issue} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show items when the issues are loaded from useFetch', () => {
    const issues = [
      {
        url: 'https://localhost/anything/thing',
        title: 'Anything',
      },
    ];
    useFetch.mockReturnValue({
      data: issues,
      loading: false,
    });
    const wrapper = shallow(<GridItems items={issue} />);
    expect(wrapper.find('Item').length).toBe(issues.length);
  });
});
