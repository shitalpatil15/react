import React from 'react';
import profilePic from './../../public/img/profilePic.png'
class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            count1: 1
        }

    }

    render() {

        const { name, location, contact } = this.props;
        const { count, count1 } = this.state;

        return (

            <div className='flex flex-wrap m-3 border-solid bg-red-50 rounded-lg'>

                <img src={profilePic} alt="profile picture" className=' m-2 mr-6 rounded' />
                <div className='user-card m-2'>
                    <div className="rounded-md bg-red-100 my-5 p-2 border-dashed ">
                        <div>Count: {count}</div>
                        <div>Count1 #: {count1}</div>

                        <div><button onClick={() => {

                            this.setState({
                                count: count + 1
                            })
                        }}>Update Count</button></div>

                    </div>
                    <div className="rounded-md bg-red-100 my-5 p-2 border-dashed ">
                        <h2>Name: {name}</h2>
                        <h3>Location: {location}</h3>
                        <h4>Contact: {contact}</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserClass;