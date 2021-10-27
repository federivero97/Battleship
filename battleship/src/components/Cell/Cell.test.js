import React from "react";
import { shallow } from "enzyme";
import Cell from './Cell';

describe("rendering components", () => {
    it("renders Cell component without crashing", () => {
        shallow(<Cell color="white" />);
    });
})