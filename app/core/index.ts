export class Core{
    constructor(private func:()=>string){}
    async render(el:string){
        document.querySelector(el).innerHTML = this.func();
    }
}