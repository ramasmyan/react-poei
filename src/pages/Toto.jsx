import { useForm} from 'react-hook-form';
import "../assets/style/signin.scss"
function Logout() {
    const {register,handleSubmit} = useForm()


    const submit = async (data) => {
        const response = await fetch('http://localhost:8080/users/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'form-data'
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
    }
    return (
        <div>
            <h1>Logout</h1>
            <button type="submit" onClick={handleSubmit(submit)}>Logout</button>
        </div>
    );
}

export default Logout;