import { render, screen } from "@testing-library/react";
import Header from "./Components/Header/Header";
import { render as drender, unmountComponentAtNode } from "react-dom";
import Footer from "./Components/Footer/Footer";
import AddContact from "./Components/AddContact/AddContact";

let element;
beforeEach(() => {
  element = document.createElement("div");
  document.body.appendChild(element);
});

afterEach(() => {
  unmountComponentAtNode(element);
  element.remove();
  element = null;
});

describe("Contact Manager Test cases", () => {
  test("Should render Header Component with Contact Manager Test", () => {
    render(<Header />);
    expect(screen.getByText("Contact Manager")).toBeInTheDocument();
  });

  test("Should have 1 link in Footer Coponent", () => {
    drender(<Footer />, element);
    const count = element.getElementsByTagName("a").length;
    expect(count).toBe(1);
  });

  test("Should have Add Contact text in button of Add Contact Component", () => {
    render(<AddContact />);
    expect(screen.getByTestId("btnAdd")).toHaveTextContent("Add Contact");
  });

  test("Add Contact Component should have BootStrap class btn-secondary", () => {
    render(<AddContact />);
    expect(screen.getByTestId("btnAdd")).toHaveClass("btn-secondary");
  });

  test("Header Should have 3 hyperlinks with nav-link class", () => {
    drender(<Header />, element);
    const links = element.getElementsByTagName("a");
    for (let i = 1; i < links.length; i++) {
      expect(links[i]).toHaveClass("nav-link");
    }
  });
});
