import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=>
{
  test('it renders', async ()=>{
    render(<App/>)
  });
})
/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
