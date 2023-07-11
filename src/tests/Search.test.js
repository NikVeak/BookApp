import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search';


describe('Search', ()=>{
    test("check state in enter word", () => {
        const { getByTestId } = render(<Search />);
        let input;
        input = getByTestId("enterText"); // Получаем поле поиска по data-testid

        fireEvent.change(input, { target: { value: "Something text" } }); // Эмулируем ввод текста

        expect(input.value).toBe("Something text"); // Проверяем, что поле содержит введенный текст
    });


});

