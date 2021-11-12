import React from 'react'

export default function Form(props){
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    function onChange(e){
        const { name, value, checked, type} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }

    function onSubmit(e){
        e.preventDefault();
        submit();
    }
    return (
        <div>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <input name='username' type='text' placeholder='username' value={username} onChange={onChange}/>
                <input type='email' name='email' placeholder='email' value={email} onChange={onChange}/>
                <input type='password' name='password' placeholder='password' value={password} onChange={onChange}/>
                <input type='checkbox' name='tos' checked={tos} onChange={onChange}/>
                <input type='submit' name='create' value='Create!'/>
            </form>

        </div>
    )
}