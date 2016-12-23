import Contact from './../data/Contact.js';
import Reflux from 'reflux';
import _ from 'lodash';
import {ContactActions} from './../action.js';

import React from 'react-native';
var { AsyncStorage } = React;

const CARD_KEY = 'tuubong-contact';

var contactStore = Reflux.createStore({
  init() {
    //this._loadContact().done();
    this.listenTo(ContactActions.createContact, this.createContact);
    this.listenTo(ContactActions.deleteAllContact, this.deleteAllContact);
    this.listenTo(ContactActions.editContact, this.editContact);
    this.listenTo(ContactActions.getAllContact, this.asd);
    this._contacts = [];
    this.emit();
  },

  async _loadContact() {
    try {
      var val = await AsyncStorage.getItem(CARD_KEY);
      if (val !== null) {
        this._contacts = JSON.parse(val).map((cardObj) => {
          return Contact.fromObject(cardObj);
        });
        this.emit();
      }
      else {
        console.info(`${CARD_KEY} not found on disk.`);
      }
    }
    catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  },

  async _writeContact() {
    try {
      await AsyncStorage.setItem(CARD_KEY, JSON.stringify(this._contacts));
    }
    catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  },

  deleteAllContact() {
    this._contacts = [];
    this.emit();
  },


  createContact(id, name, phonNumber) {
    this._contacts.push(new Contact(id, name, phonNumber));
    //this.emit();
  },

  emit() {
    this._writeContact().done();
    this.trigger(this._contacts);
  },

  asd(){
    this.getAllContact().done();
  },

  async getAllContact(){
    try {
    var val = await AsyncStorage.getItem(CARD_KEY);
    //console.log(var[0]);
    }
    catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
  }

});

export default contactStore;
