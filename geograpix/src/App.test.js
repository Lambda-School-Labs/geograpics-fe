import React from 'react';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { Map } from './components/Map';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const mockPictureInfo = [
  {
    media_id: 22721881,
    user_id: 1,
    longitude: -118.3852043,
    latitude: 33.9650947,
    thumbnail: "https://i.ibb.co/qR7ST7G/image.png",
    standard_resolution: "https://i.ibb.co/mHbjfbs/image.png",
    created_time: 1279340983,
    caption: "this is a test",
    likes: 10,
  },
];
  
let wrapper = shallow(<Map pictureInfo={mockPictureInfo} />)


describe('When the map is rendered', () => {
  it('should render title', () => {
    expect(wrapper.find('.title').text()).toEqual('This is map');
  })
})

// app/src/components/__tests__/Login-test.js
// describe('Map Component', () => {
//   // our mock login function to replace the one provided by mapDispatchToProps
//   const mockLoginfn = jest.fn();
//   beforeEach(() => {
//     map = shallow(<Map pictureInfo={mockLoginfn}/>)
//   })
//   expect
// }

// // app/src/components/__tests__/Login-test.js\
// describe('When the form is submitted', () => {
//   it('should call the mock login function', () => {
//     wrapper.find('#loginForm').simulate(
//       'submit', 
//       {preventDefault() {}}
//     )
//     expect(mockLoginfn.mock.calls.length).toBe(1)
//    })
//  })

