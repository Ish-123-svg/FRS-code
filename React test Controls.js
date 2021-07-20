import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Controls from "./Controls.jsx";
import userEvent from "@testing-library/user-event";




Cantrols.js

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls/>);
    });
    it('activate FRS', () => {
        
        const {getByText} = render(<Controls />);
       
        
        userEvent.click(getByText(/activate FRS/i));
        expect(getByText("FRS Activated")).not.toBeNull();
    });
  
});