import { Postagem } from './../../model/Postagem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  key_editor:string = "65pz0et9cour9lmd3ua440ns7ej0w3wfva1uq4fauav7coly";
  showEditor: boolean = false;

  // Função para alternar a visibilidade do editor
  toggleEditor(): void {
    this.showEditor = !this.showEditor;
  }

  postagens: Postagem[] = [
    new Postagem("Títulos de exemplo [1°].", "Esta é a primeira postagem!", ""),
    new Postagem("Títulos de exemplo [2°].", "Esta é a segunda postagem!", ""),
    new Postagem("Títulos de exemplo [3°].", "Esta é a terceira postagem!", ""),
    new Postagem("Títulos de exemplo [4°].", "Esta é a quarta postagem!", ""),

    new Postagem("Títulos de exemplo [1°].", "Esta é a primeira postagem!", ""),
    new Postagem("Títulos de exemplo [2°].", "Esta é a segunda postagem!", ""),
    new Postagem("Títulos de exemplo [3°].", "Esta é a terceira postagem!", ""),
    new Postagem("Títulos de exemplo [4°].", "Esta é a quarta postagem!", ""),

  ];
}
