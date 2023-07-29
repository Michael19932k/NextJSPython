import type { ReactElement } from 'react';
import { HpData, HpDataResponse } from '@/common/types';
import { HomePage } from '@/src/components/home/HomePage';


const fetchStuff = async (): Promise<HpData> => {
  const data = await fetch('http://localhost:8000/get_hp_data');
  const response: HpDataResponse = await data.json();

  return response.data; 
};

const WelcomePage = async (): Promise<ReactElement> => {
  const postData = await fetchStuff();


  return <HomePage data={postData} />;
};

export default WelcomePage;