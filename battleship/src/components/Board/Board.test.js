import React from "react";
import { shallow } from "enzyme";
import Board from './Board';

describe("rendering components", () => {
    it("renders Board component without crashing", () => {
        shallow(<Board data={[]}/>);
    });
})