import {Mapping} from '../models/JiraObject';
async function getPRInfo(json: Object){
    const request = fetch('http://localhost:7071/api/GetPRsAndRepos',{
        method: 'POST',
        headers: {
            'Accept': 'Application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
    const response = await request;
    const data : Mapping = await response.json();
    console.log(data)
    return(data);
}

export default getPRInfo;