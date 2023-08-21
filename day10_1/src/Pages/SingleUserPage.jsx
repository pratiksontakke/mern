import React from "react";
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

function SingleUserPage() {

    const { user_id } = useParams(); // React hook
    const [userDetails, setUserDetails] = React.useState({});

    React.useEffect(() => {
        getData(`https://reqres.in/api/users/${user_id}`)
            .then((res) => setUserDetails(res.data));
    }, [user_id])

    console.log(userDetails);

    return (
        <>
            <img src={userDetails.avatar} alt="prof-pic" />
            <p>
                Name : {userDetails.first_name} {userDetails.last_name}
            </p>
            <p>
                Email : {userDetails.email}
            </p>
            <p>
                <Link to='/users'>GO BACK</Link>
            </p>
        </>
    )
}

export default SingleUserPage;


// data": 
//     {
//     "id": 1,
//     "email": "george.bluth@reqres.in",
//     "first_name": "George",
//     "last_name": "Bluth",
//     "avatar": "https://reqres.in/img/faces/1-image.jpg"
// },