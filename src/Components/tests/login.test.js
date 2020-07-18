import React from 'react';
import Login from '../Forms/login-user-form';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import AuthService from "../../Services/auth.service";

jest.mock('axios');

describe('test for Login', () => {
    it ('renders correctly', () => {
        expect(<Login />).toMatchSnapshot();
    })

    it('should call onChange with an imput value in email', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<Login/>);
        component.find('.form1').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('should call onChange with an imput value in password', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<Login/>);
        component.find('.form2').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

      it('fetches successfully data from Heroku', async () => {
        const data = {email : ['amandalug1@gmail.com'], password: ['unimet2020']};
     
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
     
        await expect(AuthService.loginTest('amandalug1@gmail.com', 'unimet2020')).resolves.toEqual(data);
     
        expect(axios.post).toHaveBeenCalledWith(
          'https://emotionner.herokuapp.com/users/signin',
        );
      });
     
      it('fetches erroneously data from Heroku', async () => {
        const errorMessage = 'Network Error';
        const component = shallow(<Login />)
     
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );
     
        await expect(component).rejects.toThrow(errorMessage);
      })
     
})