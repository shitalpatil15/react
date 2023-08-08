import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const Contact = () => {
    const result = useContext(UserContext);
    return (
        <>
            <h1>Contact US</h1>
            <div className="bg-red-50 rounded shadow py-10 pb-60 pl-4">
                Mindspace Airoli, Navi Mumbai.
            </div>
            <p>Logged In User: {result.loggedInUser}</p>
        </>
    )
}

export default Contact;