export interface IProfile {
     city  : string;
     name  : string;
     social: {
          email    : string;
          github   : string;
          instagram: string;
     };
     state : string;
     work  : {
          description: string;
          role       : string;
     }
};