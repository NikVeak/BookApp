import React from "react";
import Books from "../Books.jsx";
import { shallow } from 'enzyme';
import {render} from "@testing-library/react";

describe("Books ", ()=>
{
    const books = new Array(40);

    it('renders a list of books', () => {
        const wrapper = shallow(<Books books={books} />);
        const bookItems = wrapper.find('li');

        expect(bookItems.length).toBe(books.length);

    });

    test('renders a loading state while fetching data', ()=>
    {
        const { getByText } = render(<Books isLoading={true} />);
        const loadingText = getByText("Loading..."); // Проверка, что отображается текст "Loading..."
        expect(loadingText).toBeInTheDocument();
    });

});