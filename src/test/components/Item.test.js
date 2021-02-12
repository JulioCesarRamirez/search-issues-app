import React from 'react';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { Item } from '../../components/Item';
configure({ adapter: new Adapter() });

describe('Test in <Item />', () => {
  const title = 'A title';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<Item title={title} url={url} />);

  it('Should show <Item /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should has a paragraph with the title', () => {
    const a = wrapper.find('a');
    expect(a.text().trim()).toBe(title);
  });
  it('Should has an image similar to url and alt from props', () => {
    const link = wrapper.find('a');
    expect(link.prop('href')).toBe(url);
  });
  it('Should has card className', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('card')).toBe(true);
  });
});
