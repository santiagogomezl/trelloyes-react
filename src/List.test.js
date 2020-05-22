import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';
import STORE from './store.js';

describe('My component', () => {
    // all my test cases here. Test Suite

    //Smoke Test
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
    });


    //Screenshot Test
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List header={'List Header'} cards={STORE.allCards['a']}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
        });

})