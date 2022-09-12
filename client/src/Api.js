
const url="https://www.breakingbadapi.com/api/characters"

export const getdata=async(text)=>{

     const responce= (await fetch(`${url}?name=${text}`)).json();
     return responce;
}