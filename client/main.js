import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var userVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            username: userVar,
            password: passwordVar
        });
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var userVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(userVar, passwordVar);
    }
});

Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.logout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});