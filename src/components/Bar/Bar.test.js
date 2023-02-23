import React from "react";
import { mount } from "exzyme";
import Bar from "./Bar";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

describe("Bar component", () => {
  let wrapper;
  const prop = {
    labelData: ["23/02/2023"],
    bimData: ["21.21"],
  };

  beforeEach(() => {
    wrapper = mount(<Bar {...prop} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
    console.log(wrapper.debug());
  });
});
