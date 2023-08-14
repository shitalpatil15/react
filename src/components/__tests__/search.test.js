import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { restaurantListDataMock } from ".././mock/restaurantListDataMock";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

beforeAll( () => {
    console.log("beforeAll");
});

beforeEach( async () => {
    await act(async () => {
        render(
            <BrowserRouter><Body /></BrowserRouter>            
        )
    });
});

afterEach(()=>{});
afterAll(()=>{});

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(restaurantListDataMock);
        }
    })
});

it("should renter body and search by search input value", () => {

    //find total cards on screen before search
    const restCardBeforeSearch = screen.getAllByTestId("Rest-Card")
    expect(restCardBeforeSearch.length).toBe(15);

    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("search-input");

    //set search parameter
    fireEvent.change(searchInput, {
        target : { value : "Pizza"}
    })

    //trigger click 
    fireEvent.click(searchBtn);

    //find how many cards are on screen
    const restCard = screen.getAllByTestId("Rest-Card")
    expect(restCard.length).toBe(2);

});

it("should return toprated restaurant", () => {
    const button = screen.getByRole("button", {name:"Top Rated Restaurants"});
    fireEvent.click(button);
    const card = screen.getAllByTestId("Rest-Card");
    expect(card.length).toBe(10);
})