export class DetailPrestation {
    nomPrestation: string;
    prix: number;
    id?:number
	constructor(nomPrestation: string, prix:number,id?:number){
		this.nomPrestation = nomPrestation;
        this.prix =prix;
        this.id=id;
	}
}