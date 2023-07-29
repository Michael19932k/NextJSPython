export interface HpData {
    headline: string
 }
 
 export interface HpDataResponse {
     data: HpData
 }

 export interface ContentPost {
    id: number;
    title: string;
    content: string;
  }
  
  export interface PostsResponse {
    res:string;
    data: ContentPost[];
  }

  export interface SinglePostResponse {
    res:string;
    data: ContentPost;
  }