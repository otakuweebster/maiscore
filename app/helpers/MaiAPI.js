// THE MAITEA APP HELPER
import axios from 'axios';

const profileURL = new URL(
    "https://maitea.app/api/v1/profiles"
);

const headers = {
    "Authorization": "Bearer " + process.env.NEXT_PUBLIC_MAITEA_TOKEN,
    "Content-Type": "application/json",
    "Accept": "application/json",
};

//Get Current Data from Otaku
export async function getOtakuData()
{
    if (!localStorage.getItem('otakuMaiProfile'))
    {
        await axios.get(profileURL, {
            headers: headers
        })
        .then(response => {
            // console.log(response.data);
            // console.log(JSON.stringify(response.data.data[0]))
            localStorage.setItem('otakuMaiProfile', JSON.stringify(response.data.data[0]))
            return Promise.resolve;
        })
        .catch(error => {
            console.log(error);
        })
    }
}


