import type { IProject } from "@/interfaces/IProject";


export const privateProjects: IProject[] = [
     {
          description   : "Desenvolvimento de soluções para comunicação e automação entre sistemas, incluindo envio de resultados e pedidos de exames, emissão de etiquetas, notificações automáticas via SMS para pacientes e monitoramento de ferramentas online para clientes e parceiros",
          title         : "Comunicação entre sistemas",
          pins          : [".Net", ".Net Framework"]
     },
     {
          description   : "Solução de controle e gestão de impressões, abrangendo etiquetas primárias de laboratórios de apoio e documentos do sistema, com foco em facilitar a configuração e manutenção de impressoras e eliminar a necessidade de VPN em acessos remotos",
          title         : "Controle e monitoramento de impressões",
          pins          : [".Net Framework", "Delphi"]
     },
     {
          description   : "Desenvolvimento de aplicações Desktop sob demanda para o sistema privado, bem como implementação de um sistema de fila de espera, com chamadas automáticas, exibição em monitores e emissão de fichas via tótens",
          title         : "Desktop e fila de espera",
          pins          : [".Net", ".Net Framework", "Delphi"]
     },
     {
          description: "Plataforma web multi-cliente, com UI personalizável por cliente, desenvolvida para acesso seguro e eficiente a laudos de exames por pacientes, médicos e convênios",
          title: "Resultados online",
          pins: ["Express", "Vue", ]
     },
     {
          description: "Template web personalizável que se molda a cada cliente, oferecendo uma experiência única de interface e conteúdo, com dados exclusivos por ambiente",
          title: "Site personalizável",
          pins: ["Bootstrap" ]
     }
];