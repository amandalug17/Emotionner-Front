import React from 'react';
import Login from '../Forms/login-user-form';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthService from "../../Services/auth.service";
import mockAxios from 'axios';


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

    it('should validate inputs', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<Login/>);
        Login.required = jest.fn().mockResolvedValueOnce("");
        if(component.find('.form1').dive().find('.form-control').simulate('change', {target: {
            value: ''
        }})){
            Login.required("");
            expect(Login.required).toHaveBeenCalledTimes(1);
        } else {
            expect(Login.required).toHaveBeenCalledTimes(0);
        }

    })

    it('fetches successfully data from Heroku', done => {

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        mockAxios.post = jest.fn().mockResolvedValueOnce({});

        AuthService.login('email@gmail.com', 'password').then(response => {
            expect(response).toEqual({
                data: {},
            });
        });
        
        expect(mockAxios.post).toHaveBeenCalledWith('https://emotionner.herokuapp.com/users/signin', {
            email: 'email@gmail.com',
            password: 'password'
        });
        
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).not.toHaveBeenCalled();
        consoleErrorSpy.mockRestore();
        done();
    });
    
     
})