
import {describe, test} from 'vitest';
import Header from "../src/components/Header";
import { render , screen} from "@testing-library/react";
describe('Render the Home component correctly', ()=>
{
  test('should render h1 and input', async ()=>
  {
    const wrapper = render(<Header/>);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector('h1');
    expect(h1?.textContent).toBe("Просмотр книг")

    const input = wrapper.container.querySelector('input');
    expect(input).toBeTruthy();
  });
});