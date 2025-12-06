import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiInstagramFill, RiSendPlaneFill } from "react-icons/ri";


export function Profile() {
     const profile = {
          city : "Alvorada",
          name : "Igor Schöenardie Viegas",
          state: "Rio Grande do Sul"
     };

     const social = {
          email    : "igorsviegas26@gmail.com",
          github   : "https://github.com/igorsviegas",
          instagram: "https://www.instagram.com/igor_sviegas"
     };

     const work = {
          description: "Desenvolvedor multiplataforma com foco em .NET",
          role       : "Desenvolvedor de Software"
     }


     return (
          <section className="flex items-center justify-center min-h-screen">
               <div className="flex flex-col items-center">
                    <Avatar className="border-4 border-gray-700 h-25 w-25">
                         <AvatarImage src={ social.github + ".png" } />
                    </Avatar>
                    <div className="mt-3 text-center">
                         <h2 className="font-semibold text-2xl">
                              { profile.name }
                         </h2>
                         <p className="text-gray-400">
                              { profile.city } &bull; { profile.state }
                         </p>
                    </div>
                    <div className="mt-10 text-center">
                         <h3 className="font-bold text-3xl">
                              { work.role }
                         </h3>
                         <p className="text-gray-300 text-lg">
                              { work.description }
                         </p>
                    </div>
                    <div className="mt-5">
                         <Button asChild className="me-1" size="sm" variant="secondary">
                              <a href={ social.github } target="_blank">
                                   <RiGithubFill /> Github
                              </a>
                         </Button>
                         <Button asChild className="me-1 ms-1" size="sm" variant="secondary">
                              <a href={ "mailto:" + social.email }>
                                   <RiSendPlaneFill /> E-mail
                              </a>
                         </Button>
                         <Button asChild className="ms-1" size="sm" variant="secondary">
                              <a href={ social.instagram } target="_blank">
                                   <RiInstagramFill /> Instagram
                              </a>
                         </Button>
                    </div>
               </div>
          </section>
     );
};