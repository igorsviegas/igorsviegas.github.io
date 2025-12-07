import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiInstagramFill, RiSendPlaneFill } from "react-icons/ri";

import type { IProfile } from "@/interfaces/IProfile";


export function Profile({ data }: { data: IProfile }) {
     return (
          <section className="flex h-[85vh] items-center justify-center">
               <div className="flex flex-col items-center">
                    <Avatar className="border-4 border-gray-700 h-25 w-25">
                         <AvatarImage src={ data.social.github + ".png" } />
                    </Avatar>
                    <div className="mt-3 text-center">
                         <h2 className="font-semibold text-2xl">
                              { data.name }
                         </h2>
                         <p className="text-gray-400">
                              { data.city } &bull; { data.state }
                         </p>
                    </div>
                    <div className="mt-10 text-center">
                         <h3 className="font-bold text-3xl">
                              { data.work.role }
                         </h3>
                         <p className="text-gray-300 text-lg">
                              { data.work.description }
                         </p>
                    </div>
                    <div className="mt-5">
                         <Button asChild className="me-1" size="sm" variant="secondary">
                              <a href={ data.social.github } target="_blank">
                                   <RiGithubFill /> Github
                              </a>
                         </Button>
                         <Button asChild className="me-1 ms-1" size="sm" variant="secondary">
                              <a href={ "mailto:" + data.social.email }>
                                   <RiSendPlaneFill /> E-mail
                              </a>
                         </Button>
                         <Button asChild className="ms-1" size="sm" variant="secondary">
                              <a href={ data.social.instagram } target="_blank">
                                   <RiInstagramFill /> Instagram
                              </a>
                         </Button>
                    </div>
               </div>
          </section>
     );
};