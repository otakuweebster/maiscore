// THE MAITEA APP HELPER
import axios from 'axios';

const profileURL = new URL(
    "https://maitea.app/api/v1/profiles"
);

const playsURL = new URL("https://maitea.app/api/v1/plays")

const allPlaysURL = new URL("https://maitea.app/api/v1/plays/all")

// const params = {
//     "profile": "1",
//     "song": "363",
//     "level": "10",
// };
// Object.keys(params)
//     .forEach(key => url.searchParams.append(key, params[key]));


const headers = {
    "Authorization": "Bearer " + process.env.NEXT_PUBLIC_MAITEA_TOKEN,
    "Content-Type": "application/json",
    "Accept": "application/json",
};

//Get Current Data from Otaku
export async function getOtakuData()
{
    if (!sessionStorage.getItem('otakuMaiProfile'))
    {
        await axios.get(profileURL, {
            headers: headers
        })
        .then(response => {
            // console.log(response.data);
            // console.log(JSON.stringify(response.data.data[0]))
            sessionStorage.setItem('otakuMaiProfile', JSON.stringify(response.data.data[0]))
            return Promise.resolve;
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Get the latest score data from Otaku, latest :)
export async function getOtakuScoreLatest()
{
    if (!sessionStorage.getItem('otakuLatestScore'))
    {
        await axios.get(playsURL, {
            headers: headers
        })
        .then(response => {
            sessionStorage.setItem('otakuLatestScore', JSON.stringify(response.data.data[0]))
            return Promise.resolve;
        })
        .catch(error => {
            console.log(error);
        })
    }
}




