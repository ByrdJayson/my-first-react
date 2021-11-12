import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required ya chump!!')
        .min(3, 'Username must be 3 characters long ya chump!!'),
    email: yup
        .string()
        .email('Must be a valid email address ya chump!!')
        .required('You gotta have an email.'),
    password: yup
        .string()
        .oneOf(['student', 'instructor', 'alumni', 'tl'], 'Role is required!!!'),
    tos: yup
        .boolean()
        .oneOf(['true'], 'Civil status is required!!!'),
    
})

export default formSchema