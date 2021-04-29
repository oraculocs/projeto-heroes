import { Component } from '@angular/core';
import { Aluno } from './aluno/aluno';
import { AlunoProvider } from './aluno/aluno-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibilidade: boolean = true;
  alunos: Aluno[];
  aluno: Aluno;
  outputPath: string = 'http://www.';
  nome: String;
  email: String;
  senha: String;

  constructor(){
    //this.aluno = new Aluno():
  }

  mostrar(){
    this.visibilidade = true;
    this.alunos = AlunoProvider.ALUNOS;
  }

  title = 'projeto-lista';

  resetCampos(){
    
  
    this.nome = "";
    this.email = "";
    this.senha = "";
  }
}
