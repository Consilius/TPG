import * as React from "react";
import { shallow } from "enzyme";
import BooleanQuestion from "../../../main/Components/BooleanQuestion/BooleanQuestion";

// node_module name or path to a module
jest.mock("");

describe("BooleanQuestion", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<BooleanQuestion {...props}/>);
    });
});
