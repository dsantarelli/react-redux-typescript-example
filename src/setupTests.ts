import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://www.npmjs.com/package/enzyme-adapter-react-16
// Configure enzyme to use the adapter you want it to use 
configure({ adapter: new Adapter() });
