import ItemBook from "../src/ItemBook.jsx";
import { shallow } from 'enzyme';
import {describe, test} from 'vitest';

describe('Test item books',  () => {
  test('render item', () =>
  {
    it('render an h3', ()=>
    {
      const wrapper = shallow(<ItemBook/>);
      expect(wrapper.find('h3')).toHaveLength(1);
    });
  });
});