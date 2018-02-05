# Redux Weather Forecaster

## Sketch

<img width="390" alt="weather sketch" src="https://user-images.githubusercontent.com/20265633/35716760-dce41b52-07a8-11e8-9338-5f90aeeed3e1.PNG">


## Challenges

1. Make Ajax requests with Redux
2. Intergrate React/Redux with 3rd party visualization library
3. How to deal with a Redux application where state changes significantly over time

## Terminologies

**1. Controlled Field**

A controlled field is a form element where the value of the input is set by the state of component.

**2. Callback Context**

Rule of thumb: If we got a callback that makes a reference to `this`, chances are we need to bind it. The easiest way is in the constructor.

**3. Form Element in React**

When press enter key while a form element child is focused, the browser by default thinks we're trying to submit the contents of this form, which means to make a POST request to the server (localhose:8080) reload the page, rerender the entire application and thus clear the form out. 

To handle the submit event on the form, including prevent default, we add `onSubmit` property to `<form>` and pass the function below to it: `<form onSubmit={this.onFormSubmit} ...>`

```javascript
onFormSubmit(event) {
	event.preventDefault();	// JavaScript event method
}
```

**4. Openweathermap API**

**5. Middleware**

Middleware is functions that take an action and depending on the action's type and payload, or any other number of factors, the middleware can choose to let the action pass through, manipulate the action, or any other taskes on the action, before the actions reach any reducer.

<img width="187" alt="redux-promise" src="https://user-images.githubusercontent.com/20265633/35813109-bcc11842-0a60-11e8-9f7c-ceca00f1dc2a.PNG">

**6. redux-promise package**

Help handle Ajax request inside of our application. [[Github]](https://github.com/acdlite/redux-promise) In this case, Redux-Promise seizes the in-coming action, looks at specifically the `payload` property. If the payload is a **promise**, Redux-Promise stops the action entirely. Then once the request dinishes, it dispatches a new action of the same type but with a payload of the **resolved request** -- data. Then reducers only need to care about `action.payload.data`. (Try `console.log('Action received', action);` in reducer_weather.js together with `console.log('Request: ', request);` in actions/index.js)

**7. Ajax Request**

Application state holds all the data of our application, including weather data. We only change our application state through reducers and actions. **Axios** [[Example]](https://github.com/axios/axios#example) is a library solely made for making Ajax requests rom the browser. 

**8. Avoid State Mutations in Reducers**

Codes like `state.push(action.payload.data)` will throw error. (We don't manipulate dtate directly, instead should use `.setState`) In this case, the better approach is return a new array of weather data, by using array function `concat()`, which doesn't change the existing array, but creates a new array, so we return a new version of state. In ES6 style, `return [ action.payload.data, ...state ];` will do the same thing.

**9. react-sparklines package** [[Github]](https://github.com/borisyankov/react-sparklines)

Sparklines component for React, now supporting line chart and bar chart.
