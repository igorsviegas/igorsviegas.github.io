# Portf&oacute;lio pessoal

Um portf&oacute;lio moderno constru&iacute;do com tecnologias JavaScript, focado em desempenho, componentiza&ccedil;&atilde;o e facilidade de manuten&ccedil;&atilde;o.

---

## :rocket: Tecnologias utilizadas

* **React.js:** biblioteca para cria&ccedil;&atilde;o de interfaces declarativas e reativas
* **TypeScript:** tipagem est&aacute;tica para maior seguran&ccedil;a e produtividade
* **Vite.js:** ferramenta de build r&aacute;pido para desenvolvimento e produ&ccedil;&atilde;o
* **shadcn/ui:** biblioteca de componentes reutiliz&aacute;veis baseada em Radix UI, oferecendo design consistente, acessibilidade e f&aacute;cil personaliza&ccedil;&atilde;o

---

## :file_folder: Estrutura do projeto

```txt
src/
├── components/
|   ├── custom/
|   |   ├── Footer.tsx
|   |   ├── Profile.tsx
|   |   ├── Skills.tsx
|   |   └── Timeline.tsx
|   └── ui/
|       ├── avatar.tsx
|       ├── button.tsx
|       └── card.tsx
├── data/
|   ├── academic.ts
|   ├── professional.ts
|   ├── profile.ts
|   └── skills.ts
├── interfaces
|   ├── IProfile.ts
|   ├── ISkills.ts
|   └── ITimeline.ts
├── lib
|   └── utils.ts
├── styles
|   └── tailwindcss.css
├── App.tsx
└── main.tsx
```

---

## :pencil2: Informa&ccedil;&otilde;es personaliz&aacute;veis

As informa&ccedil;&otilde;es do perfil, linhas do tempo e habilidades s&atilde;o totalmente personaliz&aacute;veis por meio dos arquivos contidos no diret&oacute;rio `src/data`, sem a necessidade de mexer no c&oacute;digo fonte dos componentes principais.

Os arquivos deste diret&oacute;rio respeitam as interfaces e atributos pr&eacute;-definidos no diret&oacute;rio `src/interfaces`. Adapte-os conforme sua necessidade, caso esteja fazendo um fork deste reposit&oacute;rio.

### Exemplos com base neste projeto:

Para definir as informa&ccedil;&otilde;es do perfil, acesse o arquivo `src/data/profile.ts` e edite o objeto profile, que implementa a interface **IProfile**:

```js
import type { IProfile } from "@/interfaces/IProfile";


export const profile: IProfile = {
     city  : "",
     name  : "",
     social: {
          email    : "",
          github   : "",
          instagram: ""
     },
     state : "",
     work: {
          description: "",
          role       : ""
     }
};
```

---

Para definir as linhas do tempo, repita o processo acima mas no arquivo `src/data/sua_time_line.ts`. Os arquivos de _timeline_ n&atilde;o s&atilde;o fixos, pois depende de quantos tipos de linhas do tempo o respons&aacute;vel pelo perfil deseja inserir. Neste projeto, foram definidos apenas a linha do tempo profissional e acad&ecirc;mica.

**Arquivo sua_time_line.ts**

```js
import type { ITimeline } from "@/interfaces/ITimeline";


export const suaTimeline: ITimeline[] = [
     {
          description: "",
          period     : "",
          title      : ""
     }
];
```

A _timeline_ exige que seja informado o seu tipo (ex.: profissional, acad&ecirc;mico) ao definir chamar a tag no arquivo **App.tsx**:

```js
import { suaTimeline } from "./data/sua_time_line.ts";
import { Timeline } from "./components/custom/Timeline";

// Todo o restante do código anterior
// Chamada pela tag da timeline
<Timeline data={ suaTimeline } title="Tipo da sua timeline" />
```

---

Para definir as suas habilidades, ou conhecimentos, acesse o arquivo `src/data/skills.ts` e edite o objeto que implementa a interface **ISkills.ts**, informando por tipo as suas habilidades ou conhecimentos:

```js
export const skills: ISkills[] = [
     {
          items: ["Habilidade 01", "Habilidade 02", "Habilidade 03"],
          name : "Tipo da sua habilidade"
     }
];
```

---

## :mailbox_with_mail: Contato

* **E-mail:** [igorsviegas26@gmail.com](mailto:igorsviegas26@gmail.com)
* **Instagram:** [igor_sviegas](https://www.instagram.com/igor_sviegas)

---