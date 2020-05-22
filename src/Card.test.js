import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('My component', () => {
    // all my test cases here. Test Suite

    //Smoke Test
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
    });


    //Screenshot Test
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card title={'Card Title'} content={'Card Content Lorem Ipsum'}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
        });

})