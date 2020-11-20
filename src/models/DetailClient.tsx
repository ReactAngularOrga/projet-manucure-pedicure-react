export class DetailClient {
    nom: string;
    prenom: string;
    email:string;
    tel:number;
    id?:number
	constructor(nom: string, prenom:string,email:string,tel:number,id?:number ){
		this.nom = nom;
        this.prenom =prenom;
        this.email=email;
        this.tel=tel;
        this.id=id;
	}
}