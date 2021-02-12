import React from 'react';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { SearchItem } from '../../components/SearchItem';
configure({ adapter: new Adapter() });

describe('Test in <SearchItem />', () => {
  const setItemToSearch = jest.fn();
  let wrapper = shallow(<SearchItem setItemToSearch={setItemToSearch} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<SearchItem setItemToSearch={setItemToSearch} />);
  });
  it('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change input value', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', { target: { value: value } });
  });
  it('should not send information when submit form', () => {
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(setItemToSearch).not.toHaveBeenCalled();
  });
  it('should clear the input and call setItemToSearch', () => {
    const value = 'Hello world';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: value } });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(setItemToSearch).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
  });
});
