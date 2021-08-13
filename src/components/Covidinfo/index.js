import { useState, useEffect } from "react";
import axios from "axios";


const Covidinfo = () => {
    const [covidData, setCovidData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://covid2019-api.herokuapp.com/v2/current')
            .then(
                (e) => {
                    console.log(e.data.data);
                    const covidata = e.data.data.slice(0, 3);
                    setLoading(false);
                    setCovidData(covidata);

                }
            )
    }, [])


    return (
        <>
            {loading ? <h2>Loading Corona Data</h2> :
                covidData.map((country, index) =>
                    <div className="covidcountry" key={index} >
                        <h3 className="country">{country.location}</h3>
                        <div className="cases">
                            <div className="confirmed">
                                <p>Confirmed</p>
                                <span>{country.confirmed}</span>
                            </div>
                            <div className="active">
                                <p>Active</p>
                                <span>{country.active}</span>
                            </div>
                            <div className="recovered">
                                <p>Recovered</p>
                                <span>{country.recovered}</span>
                            </div>
                            <div className="death">
                                <p>Death</p>
                                <span>{country.deaths}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Covidinfo;