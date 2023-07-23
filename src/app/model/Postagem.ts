export class Postagem{

    private titulo:string = '';
    private image_cover_url:string = '';
    private conteudo:string = '';

    constructor(titulo:string, conteudo:string ,image_cover_url:string){
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.image_cover_url = image_cover_url;
    }

    getTitulo():string{
        return this.titulo;
    }

    getImage_cover_url():string{
        return this.image_cover_url;
    }

    getConteudo():string{
        return this.conteudo;
    }
}