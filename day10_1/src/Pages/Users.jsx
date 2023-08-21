import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";


const getData = (url) => {
    return fetch(url).then((res) => res.json());
}

const getCurrentPageFromUrl = (value) => {
    if (typeof value !== "number") {
        return 1;
    }
    value = Number(value);
    if (value <= 0 || value > 2) {
        return 1;
    }
    return value;
};

function Users() {

    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = getCurrentPageFromUrl(searchParams.get("page"));
    const [data, setData] = useState({});
    const [page, setPage] = useState(initialPage);

    useEffect(() => {
        getData(`https://reqres.in/api/users?page=${page}`).then((res) => {
            setData(res);
        })
    }, [page])

    useEffect(() => { setSearchParams({ page }) }, [page]);

    console.log(page);

    return (
        <>
            <h1>Users Page</h1>

            {/* <button onClick={() => navigate('/')}>GO TO HOME PAGE (useNavigate())</button>

            Link --> more useFull and have a option open in new tab/window
            <Link to="/">
                <button>GO TO HOME PAGE (Link)</button>
            </Link> */}

            <div>
                {
                    data && data.data && data.data.map((user) => (
                        <div
                            key={user.id}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }} >
                            <img src={user.avatar} alt="prof-pic" />
                            <Link to={`/users/${user.id}`}>{user.first_name + " " + user.last_name}</Link>
                        </div>
                    ))
                }
            </div>
            <button disabled={page === 1} onClick={() => { setPage(page - 1) }}>PREV</button>
            <button>{page}</button>
            <button disabled={page === 2} onClick={() => { setPage(page + 1) }}>NEXT</button>

        </>
    )
}

export default Users;