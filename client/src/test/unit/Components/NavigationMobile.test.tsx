import * as React from "react";
import { shallow } from "enzyme";
import NavigationMobile from "../../../main/Components/NavigationMobile/NavigationMobile";

// node_module name or path to a module
jest.mock("");

describe("NavigationMobile", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<NavigationMobile {...props}/>);
    });
});
