import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '.';

describe('Page / HomePage', () => {
	let elem;

	beforeEach(() => {
		elem = shallow(<HomePage />);
	});

	it('renders a message about welcome to the screen', () => {
		expect(elem.text()).toContain('Welcome to the home page');
	});
});