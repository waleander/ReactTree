import React from 'react';
import ReactDOM from 'react-dom';
import App from './countdown';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() })


describe("Countdown", () => {
  let model = { clicks: 0 }, result;

  const div = document.createElement('div');

  beforeAll(() => {
    result = App(model)
  });

  it('renders without crashing', () => {
    ReactDOM.render(<App onClick={() => { model.clicks += 1; }} clicks={model.clicks} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('is a div', () => {
    expect(result.props.children).toBeTruthy();
  });
  
 
  describe('when testing with Enzyme', () => {
    it("renders a div", () => {
      const wrapper = shallow(<App onClick={() => { model.clicks += 1; }} clicks={model.clicks} />);
      expect(wrapper.find("div").length).toBe(1);
    });
  })


});