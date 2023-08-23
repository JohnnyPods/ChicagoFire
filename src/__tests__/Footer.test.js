import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../Components/FooterComponent/Footer';
import '@testing-library/jest-dom';
import React from 'react';


afterEach(() => {
   cleanup(); 
})


test('Validate text in footer', () => { 
const text = "HOLISTIC";
render(<Footer/>);
const bio = screen.getByTestId('text-1');
expect(bio).toHaveTextContent(text);
});

test('Validate image is present', () => {
    const image = 'fire';
    render(<Footer/>);
    const pic = screen.getByTestId('pic-1');
    expect(image).toBeInTheDocument;
});

test('Validate icon is present', () => {
    const logo = "facebook";
    render(<Footer/>);
    const icon = screen.getByTestId('icon-1');
    expect(icon).toHaveTextContent(logo);
})