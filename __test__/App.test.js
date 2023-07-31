import { render,screen } from "@testing-library/react";
import App from "../src/App.jsx";
import { mount } from "enzyme";

describe("App unit ", ()=>
{
  test("render icon app", async () =>
  {
    const link = screen.getByRole('link',
      {
        name:"icons"
      });
    await screen.findByRole('img', {name:"icons"});
    expect(link).toHaveAttribute('href',
      '/public/favicon.ico');
  });



})

