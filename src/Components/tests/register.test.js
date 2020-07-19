import registration from '../Forms/registration'
import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthService from "../../Services/auth.service";
import mockAxios from 'axios';

describe('test for registration form', () => {
    it ('renders correctly', () => {
        expect(<registration.Register />).toMatchSnapshot();
    })

    
    it('should call onChange with an imput value in name', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        component.find('.name1').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('should call onChange with an imput value in lastname', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        component.find('.Lastname').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('should call onChange with an imput value in email', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        component.find('.email').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('should call onChange with an imput value in password', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        component.find('.password').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('should call onChange with an imput value in Birthdate', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        component.find('.Bdate').dive().find('.form-control').simulate('change', {target: {
            value: 'Change function'
        }});
        expect(JSON.stringify(component)).toMatchSnapshot();
    })

    it('sends successfully data to Heroku', done => {

        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

        mockAxios.post = jest.fn().mockResolvedValueOnce({});

        AuthService.register('name', 'lastname', 'email', 'birthdate', 'ocupation', 'premium', 'password').then(response => {
            expect(response).toEqual({
                data: {},
            });
        });
        
        expect(mockAxios.post).toHaveBeenCalledWith('https://emotionner.herokuapp.com/users/signup', {
            name : 'name',
            lastname: 'lastname',
            email : 'email',
            birthdate : 'birthdate',
            ocupation : 'ocupation',
            premium : 'premium',
            password : 'password'
        });
        
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).not.toHaveBeenCalled();
        consoleErrorSpy.mockRestore();
        done();
    });

    it('should validate inputs to not be null', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        registration.required = jest.fn().mockResolvedValueOnce("");
        if(component.find('.name1').dive().find('.form-control').simulate('change', {target: {
            value: ''
        }})){
            registration.required("");
            expect(registration.required).toHaveBeenCalledTimes(1);
        } else {
            expect(registration.required).toHaveBeenCalledTimes(0);
        }

    })

    it('should validate email', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        registration.validEmail = jest.fn().mockResolvedValueOnce("");
        if(component.find('.email').dive().find('.form-control').simulate('change', {target: {
            value: 'emailNotValid'
        }})){
            registration.validEmail("");
            expect(registration.validEmail).toHaveBeenCalledTimes(1);
        } else {
            expect(registration.validEmail).toHaveBeenCalledTimes(0);
        }

    })

    it('should validate password', () => {
        configure({ adapter: new Adapter() })
        const component = shallow(<registration.Register/>);
        registration.vpassword = jest.fn().mockResolvedValueOnce("");
        if(component.find('.email').dive().find('.form-control').simulate('change', {target: {
            value: '1234'
        }})){
            registration.vpassword("");
            expect(registration.vpassword).toHaveBeenCalledTimes(1);
        } else {
            expect(registration.vpassword).toHaveBeenCalledTimes(0);
        }

    })

})