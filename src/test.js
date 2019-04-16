import React from 'react';
import { shallow } from 'enzyme';
import Timer from '.';

describe('Timer', () => {
    let elem;
    
    beforeEach(() => {
        elem = shallow(<Timer />);
    });
    
    it('renders some text', () => {
        expect(elem.text()).toContain('Number of seconds');
    });
});