export class DetailRdv {
    nom: string;
    prenom: string;
    email:string;
    categorie:string
    date:string;
    heureRdv:string;
    id?:number
	constructor(nom: string, prenom:string,email:string,categorie:string,date: string, heureRdv:string,id?:number ){
		this.nom = nom;
        this.prenom =prenom;
        this.email=email;
        this.date=date;
        this.categorie=categorie;
        this.heureRdv= heureRdv;
        this.id=id
	}
}