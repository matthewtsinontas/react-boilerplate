import React from 'react';
import { shallow } from 'enzyme';
import { Link, Route } from 'react-router-dom';
import HelloWorld from '.';

describe('MainWrapper', () => {
	let elem;
    
	beforeEach(() => {
		elem = shallow(<HelloWorld />);
	});
    
	it('renders the top nav with the correct links', () => {
		expect(elem.find(Link)).toHaveLength(1);
	});

	it('renders the correct number of routes', () => {
		expect(elem.find(Route)).toHaveLength(1);
	});
});