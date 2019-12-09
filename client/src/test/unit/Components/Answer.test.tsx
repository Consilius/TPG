import * as React from "react";
import { shallow } from "enzyme";
import AnswerQuestion from "../../../main/components/AnswerQuestion/AnswerQuestion";

// node_module name or path to a module
jest.mock("");

describe("AnswerQuestion", () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });

    it("", () => {
        const component = shallow(<AnswerQuestion {...props}/>);
    });
});
