import * as React from "react";
import { shallow } from "enzyme";
import App from "../../../main/Pages/App/App";

// node_module name or path to a module
jest.mock("");

describe("App", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<App {...props}/>);
    });
});
