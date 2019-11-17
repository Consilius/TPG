import * as React from "react";
import { shallow } from "enzyme";
import Summary from "../../../main/Components/Summary/Summary";

// node_module name or path to a module
jest.mock("");

describe("Summary", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<Summary {...props}/>);
    });
});
