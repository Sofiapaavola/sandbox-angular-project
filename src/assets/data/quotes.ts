export interface IQuote {
    id: string;
    title: string;
    author: string;
    media: string;
    cat: string; 
  }

  
export const quotes: IQuote[] = [
    {
        id: "11760",
        title: "From Thoughts to Things",
        author: "Roxana Jones",
        media: "http://healthruwords.com/wp-content/uploads/2016/07/Healthruwords.com_-_Inspirational_Images_-_From-Thoughts-to-Things-150x150.jpg",
        cat: "Motivational Quote"
    }
  ];