import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);


    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h4>Name: {props.name}</h4>
            <h4>Contact: swaneet.srs@gmail.com</h4>
            <h4>Designation: SDE II</h4>
        </div>
    )
}

export default User;