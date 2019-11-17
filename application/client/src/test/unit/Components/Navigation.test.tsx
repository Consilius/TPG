import * as React from "react";
import { shallow } from "enzyme";
import Navigation from "../../../main/Components/Navigation/Navigation";

// node_module name or path to a module
jest.mock("");

describe("Navigation", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<Navigation {...props}/>);
    });
});
