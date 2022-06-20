import { asyncDelay } from './async-delay';

export const fetchDB = async (type: string): Promise<any> => {
  let link = `${process.env.REACT_APP_API_BASEURL}/${type}`;
  await asyncDelay(400);
  let response = await fetch(link);
  if(response.status !== 200) {
    throw new Error(`Error fetching ${type}`);
  }
  let data = await response.json();
  return data;
}

export const deleteFromDB = async (screen:string, id: Number): Promise<any> => {
  let link = `${process.env.REACT_APP_API_BASEURL}/${screen}/${id}`;
  await asyncDelay(1000);
  let response = await fetch(link, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if(response.status !== 200) {
    console.log(response);
    throw new Error(`Error deleting data`);
  }
}