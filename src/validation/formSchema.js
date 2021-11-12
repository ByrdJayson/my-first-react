import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is a required field')
    .min(3, 'Username must be atleast 3 chars'),

    email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is a required field'),
    password: yup
    .string()
    .required('Password is a required field')
    .min(6, 'Password must be atleast 6 chars'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept the terms of service')

})

export default formSchema