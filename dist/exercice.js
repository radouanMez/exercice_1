class article {
    constructor(numR, Nom, Prix, qte) {
        this.numero_ref = numR;
        this.nom = Nom;
        this.prix = Prix;
        this.qte_stock = qte;
    }
    toString() {
        return "numero de references est : " + this.numero_ref + " nom d'article est : " + this.nom + " le prox est: " + this.prix + "la quantite de stock est : " + this.qte_stock;
    }
}
//créer Le stock sous forme d'une collection d’articles de votre choix.
var art;
art = [
    new article(1, 'article 1', 2000, 10000),
    new article(2, 'article 2', 400, 6000),
    new article(3, 'article 3', 300, 4000),
];
art.forEach(function (art) {
    console.log(art.toString());
});
//Rechercher un article par référence.
var numReef = 3;
let xxx = art.find(w => w.numero_ref === numReef);
console.log(xxx.toString());
/*
function _chercher (numReef : number)
{
    var x = art.find(function(element) {
    return element.numero_ref==numReef;
  });
}


//Ajouter un article au stock en vérifiant l’unicité de la référence.


function ajouterArt(num :number , nomAr: string,PrixAr:number , qteS : number) {

    var y=art.find(x=>x.numero_ref==num);
    if (y==null) {
        art.push(new article(num,nomAr,PrixAr,qteS));
        console.log("ajouter avec succee");
    }
    else
        console.log("ce numero à étè deja exist");
}

//Supprimer un article par référence.

function Delete_Art(num :number ) {

    var y=art.findIndex(x=>x.numero_ref==num);
    if (y==null) {
        art.splice(y,1);
        console.log("supperimer avec succee");
    }
    else
        console.log("ce numero à étè deja exist");
}

//Modifier un article par référence.

function Update_Art(num :number ,nomA :string,prixArt :number ,qteArt :number ) {

    var y =art.filter(x=>x.numero_ref==num)[0];
    if (y) {
        y.nom=nomA;
        y.prix=prixArt;
        y.qte_stock=qteArt;
        console.log("modifier avec succee");
    }
    else
        console.log("ce numero à étè deja exist");
}

//
function recherchNom(NomA:string) : any {

    let xx=art.filter(y=>y.nom==NomA);
    if (xx!=null) {
        for (let i in xx) {
            console.log(art[i].toString());
        }
    }
    else
    {
        console.log("Ce articele n'exist pas");
    }
}

//Rechercher un article par intervalle de prix de vente.
/*
function recherchInterPrix(prix1: number, prix2:number) :any {

    let xx=art.filter(y=>y.prix>prix1 && y.prix<prix2);
    if (xx!=null) {
        for (let i in xx) {
            console.log(art[i].toString());
        }
    }
    else
    {
        console.log("Ce articele n'exist pas");
    }
}

//Afficher tous les articles
/*
art.forEach(function(art){
    console.log(art.toString());
});
*/
