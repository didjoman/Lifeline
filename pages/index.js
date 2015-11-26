/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
//import Lifeline from 'Lifeline';
import Lifeline from '../components/Lifeline';

export default class extends Component {
	
  	// See : https://facebook.github.io/react/docs/thinking-in-react.html
  	render() {
  		var EVENTS = [
        {date: 'Mon Sep 1 2014 14:13:00 GMT+0100 (CET)', info : {title: 'Hello', brief: 'In brief ...', content: 'My Content. Bla bla bla'}},
        {date: 'Tue Nov 23 2015 19:17:02 GMT+0100 (CET)', info : {title: 'Hello', content: 'My Content. Bla bla bla'}},
        {date: 'Tue Nov 24 2015 19:17:02 GMT+0100 (CET)', info : {title: 'Hello', content: 'My Content. Bla bla bla'}},
  		];
  		
    	return (
     		<div className="main-content">
		        <h1>Lifeline</h1>
            <p><em>Click on the points to get more details...</em><br /></p>
		        <Lifeline events={EVENTS} />
	      </div> 
	    );
	}

}
