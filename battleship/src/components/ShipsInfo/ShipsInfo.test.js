import React from "react";
import { shallow } from "enzyme";
import ShipsInfo from './ShipsInfo';

describe("rendering components", () => {
    it("renders ShipsInfo component without crashing", () => {
        shallow(<ShipsInfo ships={[]}/>);
    });
})