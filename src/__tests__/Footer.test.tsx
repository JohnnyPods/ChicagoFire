import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../Components/FooterComponent/Footer';


test('Validate text in footer', () => { 
const text = 'Holistic';
render(<Footer/>);
const bio = screen.getByTestId('text-1');
expect(bio).toHaveTextContent(text);
});

test('Validate image is present', () => {


});

test('Validate icon is present', () => {

    
})