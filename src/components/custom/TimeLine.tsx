import type { ITimeline } from "@/interfaces/ITimeline";


export function TimeLine({ timeline, title }: { timeline: ITimeline[], title: string }) {
     return (
          <section className="py-8">
               <h1 className="font-bold mb-8 text-2xl text-center">
                    { title }
               </h1>
               <div className="border-gray-700 border-l-2 pl-5 space-y-10">
                    { timeline.map((item, index) => (
                         <div key={ index }>
                              <h3 className="font-semibold text">
                                   { item.period }
                              </h3>
                              <p className="font-semibold text-gray-300">
                                   { item.title }
                              </p>
                              <p className="text-gray-400">
                                   { item.description }
                              </p>
                         </div>
                    )) }
               </div>
          </section>
     );
};