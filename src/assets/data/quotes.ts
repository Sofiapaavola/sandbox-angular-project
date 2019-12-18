export interface IQuote {
    id: string;
    title: string;
    author: string;
    media: string;
    cat: string; 
  }

  export interface IUniformQuote { 
    author: string; 
    quote: string; 
    media: string; 
  }

  export const emptyIQuote = {
    id: "",
    title: "",
    author: "",
    media: "",
    cat: ""
  };

  
export const mockQuotes: IQuote[] = [
    {
        id: "11760",
        title: "From Thoughts to Things",
        author: "Roxana Jones",
        media: "http://healthruwords.com/wp-content/uploads/2016/07/Healthruwords.com_-_Inspirational_Images_-_From-Thoughts-to-Things-150x150.jpg",
        cat: "Motivational Quote"
    },
    {
      id: "601",
      title: "The Beginning Is the End",
      author: "Roxana Jones",
      media: "http://healthruwords.com/wp-content/uploads/2012/08/",
      cat: "Inspirational Quote"
  }

  ];