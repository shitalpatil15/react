import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
    it("should render header component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        //recommended way
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        //alternate way
        const buttonText = screen.getByText("Login");
        expect(buttonText).toBeInTheDocument();

        //if multiple buttons on screen
        const button1 = screen.getByRole("button",{name:"Login"});
        expect(button1).toBeInTheDocument();

        //click event
        fireEvent.click(button1);
        
        const logoutButton = screen.getByRole("button", {name:"Logout"});
        expect(logoutButton).toBeInTheDocument();

       
    });

    it("should render cart",() => {
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

        //regex example
        const cart = screen.getByText(/Cart/);
        expect(cart).toBeInTheDocument();
    });
    
});