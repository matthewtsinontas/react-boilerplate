import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '.';

describe('HelloWorld', () => {
	let elem;
    
	beforeEach(() => {
		elem = shallow(<HelloWorld />);
	});
    
	it('renders some text', () => {
		expect(elem.text()).toContain('Hello world!');
	});
});