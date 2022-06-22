import { asyncDelay } from './async-delay';

interface fetchedResource {
  id: number,
  title: string,
  description: string,
  url: string
}

export const fetchDB = async (type: string): Promise<fetchedResource[]> => {
  const link = `${process.env.REACT_APP_API_BASEURL}/${type}`;
  await asyncDelay(400);
  const response = await fetch(link);
  if(response.status !== 200) {
    throw new Error(`Error fetching ${type}`);
  }
  const data = await response.json();
  return data;
}

export const deleteFromDB = async (screen:string, id: Number): Promise<void> => {
  const link = `${process.env.REACT_APP_API_BASEURL}/${screen}/${id}`;
  await asyncDelay(1000);
  const response = await fetch(link, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if(response.status !== 200) {
    console.error(response);
    throw new Error(`Error deleting data`);
  }
}