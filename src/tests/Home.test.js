import React from 'react';
import Home from '../Home.jsx';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import {render, waitFor} from "@testing-library/react";

describe(' Home component', () => {
    it('should load data from API', async () => {
        // Создаем mock для axios
        const mock = new MockAdapter(axios);

        // Задаем ожидаемые данные, которые будут возвращены
        const responseData = {
            kind: 'books#volumes',
            totalItems:186,
            items:Array(40)
        };
        mock.onGet('/api/data').reply(200, responseData);

        // Рендерим компонент
        render(<Home/>);

        // Проверяем, что запрос был выполнен
        expect(mock.history.get[0].url).toBe('/api/data');

        // Очищаем mock
        mock.reset();
    });
});