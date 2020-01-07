import * as React from "react";
import { shallow } from "enzyme";
import Welcome from "../../../main/Components/Welcome/Welcome";

// node_module name or path to a module
jest.mock("");

describe("Welcome", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<Welcome {...props}/>);
    });
});
