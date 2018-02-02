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