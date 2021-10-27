import React from "react";
import { shallow } from "enzyme";
import BoardHelperInfo from './BoardHelperInfo';

describe("rendering components", () => {
    it("renders BoardHelperInfo component without crashing", () => {
        shallow(<BoardHelperInfo />);
    });
})