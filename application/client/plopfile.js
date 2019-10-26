module.exports = plop => {
    plop.setGenerator("generator", {
      description: "Create a component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What would you like to call your new component?"
        },
        {
          type: "list",
          name: "type",
          message: "Is it a page, container or a component?",
          choices: [type.page, type.container, type.component]
        },
        {
          type: "list",
          name: "interfaceType",
          message: "What interface should it comply to?",
          choices: [interface.rpc, interface.sfc]
        },
        {
          type: "list",
          name: "hasState",
          message: "Should it have a state?",
          choices: [boolean.true, boolean.false],
          when: function(answer) {
            return answer.interfaceType === interface.rpc;
          }
        },
        {
          type: "list",
          name: "reducer",
          message: "Generate a reducer?",
          choices: [boolean.true, boolean.false],
          when: function(answer) {
            return answer.type === type.page;
          }
        },
        {
          type: "list",
          name: "actions",
          message: "Generate actions?",
          choices: [boolean.true, boolean.false],
          when: function(answer) {
            return answer.type === type.page;
          }
        }
      ],
      actions: function(data) {
        const actions = [];

        const reducerName = `${data.name}Reducer`;
        const reducersName = `${data.name}Reducers`;
        const preloadedState = `${data.name}PreloadedState`;
        const actionTypes = `${data.name}ActionTypes`;
        const typeKeys = `${data.name}TypeKeys`;
        const state = `${data.name}ClientState`;

        if (data.type === type.page || data.type === type.container) {
          data.connected = true;
        }

        if (data.type === type.page) {
          actions.push({
            type: "add",
            path: `src/main/${data.type}s/{{pascalCase name}}/index.tsx`,
            templateFile: "templates/pageIndex.hbs",
            data: {
              reducersName,
              preloadedState
            }
          });
        }

        if (data.reducer === boolean.true) {
          actions.push({
            type: "add",
            path: `src/main/${data.type}s/{{pascalCase name}}/{{pascalCase name}}Reducer.ts`,
            templateFile: "templates/reducer.hbs",
            data: {
              actionTypes,
              typeKeys,
              state,
              pathToActions: `./${data.name}Actions`
            }
          });
          actions.push({
            type: "add",
            path: `src/main/${data.type}s/{{pascalCase name}}/{{pascalCase name}}Reducers.ts`,
            templateFile: "templates/reducerExporter.hbs",
            data: {
              reducerName
            }
          });
          actions.push({
            type: "add",
            path: `src/test/unit/reducers/{{pascalCase name}}Reducer.test.ts`,
            templateFile: "templates/reducerTest.hbs",
            data: {
              actionTypes,
              typeKeys,
              state,
              reducerName,
              mockState: `mock${data.name}State`,
              pathToActions: `../../../main/${data.type}s/${data.name}/${data.name}Actions`,
              pathToReducer: `../../../main/${data.type}s/${data.name}/${data.name}Reducer`,
            }
          });
        }

        if (data.actions === boolean.true) {
          actions.push({
            type: "add",
            path: `src/main/${data.type}s/${data.name}/${data.name}Actions.ts`,
            templateFile: "templates/actions.hbs",
            data: {
              typeKeys,
              actionTypes,
              state,
              thunkAction: `${data.name}ThunkAction`
            }
          });
          actions.push({
            type: "add",
            path: `src/test/unit/actions/{{pascalCase name}}Actions.test.ts`,
            templateFile: "templates/actionTest.hbs",
            data: {
              typeKeys,
              actionTypes,
              pathToActions: `../../../main/${data.type}s/${data.name}/${data.name}Actions`
            }
          });
        }

        actions.push({
          type: "add",
          path: `src/main/${data.type}s/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `templates/${template(data)}`,
        });

        actions.push({
          type: "add",
          path: `src/test/unit/${data.type}s/{{pascalCase name}}.test.tsx`,
          templateFile: `templates/componentTest.hbs`,
          data: {
            pathToComponent: `../../../main/${data.type}s/${data.name}/${data.name}`
          }
        });
  
        return actions;
      }
    });
  };
  
  const boolean = {
    true: "Yes",
    false: "No"
  };

  const templates = {
    csnc: "classComponentWithStateNotConnected.hbs",
    csc: "classComponentWithStateConnected.hbs",
    cnsnc: "classComponentWithoutStateNotConnected.hbs",
    cnsc: "classComponentWithoutStateConnected.hbs",
    fnc: `functionComponentNotConnected.hbs`,
    fc: `functionComponentConnected.hbs`,
  };
  
  const interface = {
    rpc: "React.PureComponent",
    sfc: "React.FunctionComponent"
  };

  const type = {
    page: "Page",
    container: "Container",
    component: "Component"
  };
  
  function template(data) {
    const { interfaceType, hasState, connected } = data;
    let template;

    if (connected == boolean.true) {
      if (interfaceType == interface.rpc) {
        if (hasState == boolean.true) {
          template = templates.csc;
        } else {
          template = templates.cnsc;
        }
      } else {
        template = templates.fc
      }
    } else {
      if (interfaceType == interface.rpc) {
        if (hasState == boolean.true) {
          template = templates.csnc;
        } else {
          template = templates.cnsnc;
        }
      } else {
        template = templates.fnc;
      }
    }

    return template;
  }
  