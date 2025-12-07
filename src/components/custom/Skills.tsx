import { Card, CardContent } from "@/components/ui/card";

import type { ISkills } from "@/interfaces/ISkills";


export function Skills({ data, title }: { data: ISkills[], title : string }) {
     return (
          <section className="py-8">
               <h1 className="font-bold mb-8 text-2xl text-center">
                    { title }
               </h1>
               <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 w-full md:grid-cols-2 sm:grid-cols-1">
                    { data.map((skill) => (
                         <Card className="bg-gray-900 border-gray-700" key={ skill.name }>
                              <CardContent className="px-9">
                                   <h3 className="font-semibold text-white text-xl">
                                        { skill.name }
                                   </h3>
                                   <ul className="list-disc mt-5 pl-4 text-gray-400">
                                        { skill.items.map((item) => (
                                             <li>
                                                  { item }
                                             </li>
                                        ))}
                                   </ul>
                              </CardContent>
                         </Card>
                    ))}
               </div>
          </section>
     );
};