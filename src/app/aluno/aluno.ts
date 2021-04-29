export class Aluno {

    id: number;
    nome: string;
    email: string;
    foto: string; 
    
    constructor(id: number, nome: string, email: string,
        foto: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.foto = foto;
        }
  
   
   /* constructor(public id: number,
        public nome: string,
        public email: string,
        public foto: string){

        }   */
    }