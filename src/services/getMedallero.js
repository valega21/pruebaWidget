import axios from 'axios';

export default async function getMedallero({} = {}) {
    const BASE_PATH = "https://dev-cdn.clarosports.com/";

    const apiURL = BASE_PATH + 'json/widgets/medal_standings.json';

    const config = {
        method: 'get',
        url: apiURL,
        timeout: 25000,
        withCredentials: false,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    return await axios(config)
        .then(res => {
            const {
                data,
                status
            } = res

            console.log(" SERVICIO: ", res)
            if (status === 200) {
                //if (!Array.isArray(data)) {
                    return { data }
               // }
                //else {
                  //  console.log("ocurrio un error")
            //    }
            }
            return []
        })
}