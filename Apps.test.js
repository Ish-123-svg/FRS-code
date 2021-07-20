import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Controls from "./Controls.jsx";

it('Text in state is changed when button clicked', () => {
    const { getByText } = render(<Controls />);
    

    fireEvent.click(getByText(/activate FRS/i))
    expect(getByText("FRS Activated")).not.toBeNull();

})

