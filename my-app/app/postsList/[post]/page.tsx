import type { ReactElement } from 'react';
import { ContentPost, SinglePostResponse } from '@/common/types';
import { SinglePage } from '@/src/components/home/InnerPostPage';



const fetchStuff = async (id : string): Promise<ContentPost> => {
  const data = await fetch(`http://localhost:8000/get_post/?id=${id}`);
  const response: SinglePostResponse = await data.json();

  return response.data; 
};

const InnerPage = async (searchParams : any): Promise<ReactElement> => {

  const postData = await fetchStuff(searchParams.searchParams.id);

  return <SinglePage data={postData} />;
};

export default InnerPage;