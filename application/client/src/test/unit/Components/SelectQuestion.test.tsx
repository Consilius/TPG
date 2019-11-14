import * as React from "react";
import { shallow } from "enzyme";
import SelectQuestion from "../../../main/Components/SelectQuestion/SelectQuestion";

// node_module name or path to a module
jest.mock("");

describe("SelectQuestion", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<SelectQuestion {...props}/>);
    });
});
