import type { ReactElement } from 'react';
import { ContentPost, SinglePostResponse } from '@/common/types';
import { SinglePage } from '@/src/components/home/InnerPostPage';



const fetchStuff = async (id : string): Promise<ContentPost> => {
  const data = await fetch(`http://localhost:8000/get_post/?id=${id}`, { next: { revalidate: 10 } });
  const response: SinglePostResponse = await data.json();

  return response.data; 
};

export async function generateStaticParams() {
  const products = await fetch('http://localhost:8000/get_posts').then((res) => res.json())
 let ids = products.data.map((product: any) => {
    return {
        post: product.id.toString(),
      
    };
  }
  )
  return ids
}

const InnerPage = async ( { params }: { params: { post: string }} ): Promise<ReactElement> => {
  const {post}=params
  const postData = await fetchStuff(post)

return <SinglePage data={postData} />
};

export default InnerPage;