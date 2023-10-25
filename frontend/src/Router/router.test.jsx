/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
test('it renders cards in route "/"', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <router />
        </MemoryRouter>
    );
});