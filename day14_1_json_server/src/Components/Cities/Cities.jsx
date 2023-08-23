import { useState, useEffect } from "react"
import { getCities, addCity, deleteCityById } from "./api";
import AddCity from "./AddCity";

function Cities() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchCitiesDataAndUpdate = (page) => {
        getCities({ page, limit: 5, sort: "name", order: "asc" })
            .then((res) => setData(res.data))
            .catch((err) => console.log("error is : " + err))
            .finally(() => { console.log("call completed") })
    }

    useEffect(() => {
        fetchCitiesDataAndUpdate(page);
    }, [page])

    const handleAddCity = (data) => {
        // make a post request call
        addCity(data)
            .then(() => {
                fetchCitiesDataAndUpdate(page);
                alert(`New city has been added successfully`);
            })
    };

    const handleDeleteCityById = (id) => {
        deleteCityById(id)
            .then(() => {
                fetchCitiesDataAndUpdate(page);
            })
    }

    return <div>
        <h1>Cities</h1>
        <AddCity onAddCity={handleAddCity} />
        {
            data.map((item) => (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "70%",
                    margin: "auto"
                }} key={item.id}>
                    <div>{item.name}</div>
                    <button onClick={() => { handleDeleteCityById(item.id) }}>DELETE</button>
                </div>
            ))
        }
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>PREV</button>
        <button>{page}</button>
        <button disabled={page >= 10} onClick={() => setPage(page + 1)}>NEXT</button>

    </div>

}

export default Cities;