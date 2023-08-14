import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import {restaurantCardDataMock} from "../mock/restaurantCardMock";
import appStore from "../../utils/appStore";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render props for restaurant card", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantCard {...restaurantCardDataMock}/>
            </Provider>
        </BrowserRouter>
    )

    const name = screen.getByText(restaurantCardDataMock.name)
    console.log(name)
    expect(name).toBeInTheDocument();
});

// it("shoold render promoted label card", () => {
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <RestaurantCard {...restaurantCardDataMock}/>
//             </Provider>
//         </BrowserRouter>
//     )

//     const name = screen.getByText("Promoted")
//     console.log(name)
// });