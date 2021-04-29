import { Aluno } from './aluno';


export class AlunoProvider{
    alunos : Aluno[];

    public static ALUNOS = [
       {
            "id": 1,
            "nome": "X-Men",
            "email": "x-men@gmail.com",
            "foto": "assets/img/lista1.jpg"
        },
        {
            "id": 2,
            "nome": "Quarteto Fantástico e o Surfista Prateado",
            "email": "quarteto@gmail.com",
            "foto": "assets/img/lista2.jpg"
        },
        {
            "id": 3,
            "nome": "Liga da Justiça",
            "email": "liga@gmail.com",
            "foto": "assets/img/lista3.jpg"
        },
        {
            "id": 4,
            "nome": "Vingadores",
            "email": "vingador@gmail.com",
            "foto": "assets/img/lista4.jpg"
        },
        {
            "id": 5,
            "nome": "Matrix",
            "email": "matrix@gmail.com",
            "foto": "assets/img/lista5.jpg"
       } 
    ] as Aluno[];
}