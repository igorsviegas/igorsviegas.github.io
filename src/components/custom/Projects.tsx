import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import type { IProject } from "@/interfaces/IProject";


export function Projects({ data, description, title }: { data: IProject[], description?: string, title: string }) {
     return (
          <section className="py-8">
               <h1 className="font-bold mb-8 text-2xl text-center">
                    { title }
               </h1>
               
               { description &&
                    <p className="mb-8 text-gray-400 text-justify">
                         { description }
                    </p>
               }

               <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                    { data.map((project) => (
                         <Card className="bg-gray-900 border-gray-700">
                              { project.background_url &&
                                   <img alt={ project.title } className="h-40 object-cover w-full xl:h-50" src={ project.background_url } />
                              }
                              <CardHeader>
                                   <CardTitle className="text-white text-xl">
                                        { project.title }
                                   </CardTitle>
                              </CardHeader>
                              <CardContent className="px-7">
                                   <p className="text-gray-400 text-justify">
                                        { project.description }
                                   </p>

                                   { project.project_url &&
                                        <Button asChild className="mt-5 rounded-xl" variant="secondary">
                                             <a href={ project.project_url } target="_blank">
                                                  Acessar o projeto
                                             </a>
                                        </Button>
                                   }
                                   
                                   <div className="flex flex-wrap gap-2 mt-5">
                                        { project.pins?.map((pin) => (
                                             <Badge variant="secondary">
                                                  { pin }
                                             </Badge>
                                        )) }
                                   </div>
                              </CardContent>
                         </Card>
                    ))}
               </div>
          </section>
     );
};