import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { act } from 'react-dom/test-utils';
import { restaurantCardMenuMock } from "../mock/restaurantCardMenuMock";
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import Cart from '../Cart';
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(restaurantCardMenuMock)
    })
);

it("should return RestaurantMenu accordian", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
                <Cart />
                <RestaurantMenu />
            </Provider>
        )
    });

    const accordianHeader = screen.getByText("Recommended (6)");
    fireEvent.click(accordianHeader);

    const accordianItems = screen.getAllByTestId("accordian-item");
    expect(accordianItems.length).toBe(6);

    const addBtn = screen.getAllByRole("button", { name: "+ Add" })
    console.log(addBtn.length)
    fireEvent.click(addBtn[0])

    const cardFromHeader = screen.getByText("Cart (1 Items)")
    expect(cardFromHeader).toBeInTheDocument();

    const clearCartBtn = screen.getByText("Clear Cart");
    fireEvent.click(clearCartBtn);

    const emptyCart = screen.getByText("Cart is empty, add something to the cart!");
    expect(emptyCart).toBeInTheDocument();
})