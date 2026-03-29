import { useState } from "react";

const withAuth = (WrappedComponent, type) => {
    return (props) => {
        const [formData, setFormData] = useState({ name: '', email: '', password: '' });

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (type === 'register') {
                localStorage.setItem('userData', JSON.stringify(formData));
                alert('Registered Successfully and saved to LocalStorage!');
            } else {
                const savedData = JSON.parse(localStorage.getItem('userData'));
                if (savedData && savedData.email === formData.email && savedData.password === formData.password) {
                    alert('Logged in Successfully!');
                } else {
                    alert('Invalid email or password');
                }
            }
        }

        return <WrappedComponent 
            {...props} 
            type={type} 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
        />
    }
}

export default withAuth;