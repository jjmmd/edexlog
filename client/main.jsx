import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
import ProcedureList from './ProcedureList';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});


Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

if (Meteor.isClient) {
	
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

}

/*class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Procedure List</h1>
				<ProcedureList />
			</div>
		)
	}
}*/

//React.render(<App />, document.getElementById('app'));

