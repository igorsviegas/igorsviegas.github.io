export function Footer() {
     const year = new Date().getFullYear();

     return (
          <footer className="border-gray-700 border-t-2 text-center py-8">
               <p className="text-gray-300">
                    { year } &copy; Todos os direitos reservados
               </p>
               <p className="text-sm">
                    Projeto desenvolvido usando Vite.js
               </p>
          </footer>
     );
}