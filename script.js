const chapters = {
    debut : {
        titre: "Arrivée au sanctuaire",
        description: "Javier, membre de l'ordre des chevalier de bronze qui se battent au service du sanctuaire d'Athéna à l'aide de l'énergie divine de la Déesse, a recu une lettre provenant dudis sanctuaire lui informant qu'il y a un traitre chez les chevaliers et que son influence se répend à travers le sanctuaire. Il décide donc de rentrer pour offrir son aide.",
        image:"/assets/images/sanctuaire.jfif",
        boutons: [
            {titre: 'Allons-y!', destination: 'ambuscade'}
        ]
    },

    ambuscade : {
        titre: "Attaque surprise",
        description: "Dès son arrivée au sanctuaire, Javier est attaqué par un autre chevalier. Celui-ci semble porter un bouclier, comment Javier compte-t-il riposter?",
        image:"./assets/images/ambuscade.jpeg",
        boutons:[
            {titre: 'Un coup puissant, direct', destination: 'bloque'},
            {titre: 'Une rafale de coups rapides', destination: 'rafale'}
        ]
    },

    //mort 1
    bloque : {
        titre: "Bloqué",
        description: "Tout miser sur une seule attaque contre un adversaire avec une bonne défence semble avoir été une mauvaise idée, l'agresseur profite du manque de jugement de Javier et le tue d'un coup rapide et précis. «Sus à la fausse déesse!» fut la dernière chose qu'il entendit.",
        image:"./assets/images/perdu.jpg",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', destination: 'debut'}
        ]
    },

    rafale : {
        titre: "Un traitre en moins",
        description: "Le bouclier de son ennemi ne peut rien contre la rafale de coups de poing rapides. Le chevalier finit par tomber sous le poids des coups sans arrèt de Javier, marmonant «La Déesse tombera! Nous allons...» avant de tomber sans connaissance.",
        image:"./assets/images/rafale.gif",
        boutons:[
            {titre: "Continuer d'avancer dans le sanctuaire", destination: 'rencontre'}
        ]
    },

    
    rencontre : {
        titre: "Rencontre agitée",
        description: "Alors qu'il continue d'avancer dans le sanctuaire, se demandant comment il pourrait trouver le reste du «Nous» qu'a mentioné le chevalier qu'il a battu, au loin, Javier vois un autre chevalier de bronze fuire un chevalier d'or, le plus haut rang possible pour un chevalier, il est même plus fort la garde raprochée d'Athéna.",
        image:"./assets/images/rencontre.jpeg",
        boutons: [
            {titre: '«Que ce passe-t-il?»', destination: 'dilemme'}
        ]
    },

    dilemme : {
        titre: "Le bronze et l'or",
        description: "Le chevalier de bronze supplie Javier de l'aider puisque seul, il ne peut rien contre un chevalier d'or, que fait Javier, devrait-il le croire?",
        image:"./assets/images/or.jpg",
        boutons: [
            {titre: 'Attaquer le chevalier de bronze', destination: 'attaquer'},
            {titre: "Attaquer le chevalier d'or", destination: 'aide'},
            {titre: 'Ne pas prendre de décision hâtive', destination: 'attendre'}
        ]
    },

    //mort 2
    attaquer : {
        titre: "Rouler sous l'or",
        description: "S'il y a une personne en qui on peut croire, c'est le chevalier d'or, le plus fort et le plus loyal des chevaliers! Javier donne un puissant coup de poing au crâne de l'autre chevalier de bronze, l'assomant instantanément. «Quel dommage, tu viens d'éliminer un des seuls aliés qui vous restait à vous, les loyaux» dit le chevalier d'or avans d'oblitérer le deux chevaliers de bronze devans lui",
        image:"./assets/images/perdu.jpg",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', destination: 'debut'}
        ]
    },

    //route sans allié
    attendre : {
        titre: "Réaction tardive",
        description: "Ne voulant pas prendre de décision hâtive, Javier attends un peu avant d'attaquer sans raison. Une décision qu'il regrette amèrement lorsqu'il voit le chavalier d'or réduire celui qui le fuiait en poussières avant de se tourner vers Javier, un sourire moqueur sur le visage.",
        image:"./assets/images/attendre.jpg",
        boutons:[
            {titre: 'Oh non...', destination: 'riposte'}
        ]
    },

    riposte : {
        titre: "Combat perdu d'avance",
        description: "«T'es un peu lent, toi.» Dis le chevalier d'or en s'aprochant. Javier n'as plus le temps d'hésiter le chevalier d'or n'est clairement pas de son côté mais que peut-il faire contre le plus puissant chevalier du sanctuaire?",
        image:"./assets/images/riposte.jpg",
        boutons:[
            {titre: 'Un coup puissant, direct', destination: 'directe'},
            {titre: 'Une rafale de coups rapides', destination: 'desespere'}
        ]
    },

    //mort optionelle
    desespere : {
        titre: "Même pas proche",
        description: "Désespéré, Javier donne le plus de coups de poing possible, le plus vite possible mais aucun de ces petit coups rapides ne'est assez puissant pour battre un chevalier de bronze. Javier est oblitéré en un clin d'oeil",
        image:"./assets/images/perdu.jpg",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', destination: 'debut'}
        ]
    },

    directe : {
        titre: "Précis",
        description: "Prennant avantage du fait que le chevalier d'or ne le prends clairement pas au sérieux, Javier se jette dans la gueule du loup à la vitesse de l'éclair et frappe le chevalier d'or dans le ventre de toutes ses forces. Le chevalier d'or est déstabilisé, ce qui laisse assez de temps à Javier pour porter un coup dévastateur à la gorge de son adversaire, le mettant hors d'état de nuire. <br> «Tu as battu mon chevalier d'or à toi tous seul, impressionant...»",
        image:"./assets/images/directe.jpg",
        boutons:[
            {titre: '«Qui vas là?»', destination: 'meurtre'}
        ]
    },
    //route sans allié fin
    //route avec allié
    aide : {
        titre: "Deux contre un",
        description: "Ensemble, Javier et l'autre chevalier de bronze qui se présente sous le nom de Lancelot combattent le chevalier d'or et, ensemble, ils arrivent à défaire leur puissant ennemi. Lancelot explique ensuite la raison pour laquelle le chevalier d'or le chassait: il a découvert l'identité du traitre original et que le chevalier d'or avait rejoint sa cause. <br> «Dis donc, tu est drôlement bien renseigné, toi...»",
        image:"./assets/images/aide.jpg",
        boutons:[
            {titre: '«Qui vas là?»', destination: 'meurtre'}
        ]
    },
    //route avec allié fin

    meurtre : {
        titre: "Une mort abrupte",
        description: "Javier se retourne, ayant à peine le temps d'entrevoir la silouette du chef de la garde raprochée d'Athéna avant d'être anéanti par ce dernier.",
        image:"./assets/images/meurtre.jpeg",
        boutons:[
            {titre: '«Comment est-ce possible?»', destination: 'traitre'}
    ]
    },

    traitre : {
        titre: "Le traître",
        description: "La garde raprochée d'Athéna, les hommes et femmes en qui Athéna à entièrement confience. Des anciens chevaliers qui sont suposés de n'avoir qu'une chose en commun: une loyauté sans faille envers la Déesse. Finalement, l'homme le plus proche de la déesse sera celui qui causera sa perte.",
        image:"./assets/images/traitre.jpg",
        boutons:[
            {titre: "C'est fini...", destination: 'mort'},
            {titre: '«Non!»', destination: 'twist'}
        ]
    },
    
    //mort 3
    mort : {
        titre: "Mission: échoué",
        description: "Javier est mort, Athéna est maintenant à la merci de ceux qu'elle croyait être ses loyaux serviteurs.",
        image:"./assets/images/perdu.jpg",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', destination: 'debut'}
        ]
    },

    twist : {
        titre: "NON",
        description: "«Non! Ça ne peut pas finir comme ça, je dois pouvoir faire quelque chose.» C'est alors que Javier comprends qu'avant de mourir, il dois donner toute son énergie divine à Lancelot. Ensemble, ils ont réussit à battre le chevalier d'or, peut-être que Lancelot pourras faire de même avec le traître s'il a accès à leurs puissance combinée!",
        image:"./assets/images/twist.gif",
        boutons:[
            {titre: '«Lancelot, vas-y!!!»', destination: 'fin'}
        ]
    },

    fin : {
        titre: "Mort avec honneur",
        description: "Sa conection à Athéna renforcée grâce à Javier, Lancelot arrive à surpasser la puissance du traître, un coup de poing titanèsque creuse un cratère dans le torse de ce dernier. L'ordre et la paix enfin revenus au sanctuaire, sachant qu'Athéna est saine et sauve, javier peut mourrir en paix, en véritable chevalier",
        image:"./assets/images/mort.jpg",
        boutons:[
            {titre: 'Recommencer?', destination: 'debut'}
    ]
    }
};

let twist = false;
/*let jeu = document.querySelector("#jeu");
let titreRempace = document.querySelector("#chapitre");
let descriptionRemplace = document.querySelector("#para");*/

function goToChapter(chapter) {
    if(chapters.hasOwnProperty(chapter)){
    //pre dom
    //let jeu = document.querySelector("#jeu");
    let titreRemplace = document.querySelector("#chapitre");
    let descriptionRemplace = document.querySelector("#para");
    let imageRemplace = document.querySelector("#image");
    /*let bouton1Remplace = document.querySelector("#button1");
    let bouton2Remplace = document.querySelector("#button2");
    let bouton3Remplace = document.querySelector("#button3");*/
    //post dom
    titreRemplace.textContent = chapters[chapter].titre;
    //let nouveauTitre = document.createTextNode(chapters[chapter].titre);
    descriptionRemplace.textContent = chapters[chapter].description;
    //let nouvelleDescription = document.createTextNode(chapters[chapter].description);
    //-->imageRemplace.textContent = chapters[chapter].image;<-- presque là
    //debugger
    imageRemplace.innerHTML = `<img src="${chapters[chapter].image}">`;
    //imageRemplace.className = chapter;
    //debugger
    //bouton1Remplace.textContent = chapters[chapter].boutons[0].titre;


    //Code de la section "coups de pouce pour les boutons!" dans le wiki

    // Sélectionne le div .boutons 
    const boutons = document.querySelector('#option'); 
    // Supprime tous les boutons enfants du div .boutons 
    while (boutons.firstChild) { 
        boutons.removeChild(boutons.firstChild); 
    } 
    // Pour chaque boutons ... 
    for (let i = 0; i < chapters[chapter].boutons.length; i++) { 
    // on crée un nouveau bouton 
    const nouveauBtn = document.createElement('button');
    nouveauBtn.classList.add(`opt`);
    //nouveauBtn.classList.add(`big${i}`);
    //debugger
    // on applique un libellé au bouton 
    nouveauBtn.textContent = chapters[chapter].boutons[i].titre; 
    // on appele goToChapter lorsqu'on clique le bouton 
    nouveauBtn.addEventListener('click', () => { 
    // la destination, c'est la destination du bouton! 
    goToChapter(chapters[chapter].boutons[i].destination)
    
    });
    // enfin, on ajoute le bouton dans la page Web (dans le DOM) 
    boutons.appendChild(nouveauBtn); 

    if(chapter === "debut" && twist == true){
        twist = false;
        //console.log("restart");
        /*let logo = document.querySelector("#logo");
        logo.classList.add("none");*/
    }

    if (chapter === "aide"){
        twist = true;
        //console.log("aide");
    }
    //debugger

    /*if(twist == true){
        console.log("yes")
    }*/

    /*if(twist == false){
        console.log("no")
    }*/

    if(twist == false && chapter === "traitre"){
        //let none = document.querySelector(".opt");
        //debugger
        //let none = document.querySelector(".opt");
        //none.classList.add("none");
        //debugger
        try{
            let none = document.querySelector(".big1");
            none.classList.add = "none";
        }
        //let none = document.querySelector(".1");
        catch{
            let none = document.querySelector(".big1");
            none.classList.add = "none";
        }
        //none.classList.add = "none";
        //none.className("none");
        //console.log("lose")
        //console.log("win")
    }

    };


    /*if(chapter === "debut" && twist == true){
        twist = false;
        //console.log("restart");
        /*let logo = document.querySelector("#logo");
        logo.classList.add("none");*/
    /*}

    if (chapter === "aide"){
        twist = true;
        //console.log("aide");
    }
    //debugger

    /*if(twist == true){
        console.log("yes")
    }*/

    /*if(twist == false){
        console.log("no")
    }*/

    //if(twist == false && chapter === "traitre"){
        //let none = document.querySelector(".opt");
        //nouveauBtn.className("none");
        //none.className("none");
        //console.log("lose")
        //console.log("win")
    //}


    /*let twist = false;

    if(chapter === "debut" && twist == true){
        twist = false;
        console.log("allo");
        /*let logo = document.querySelector("#logo");
        logo.classList.add("none");*/
    /*}

    if (chapter === "aide"){
        twist = true;
        console.log("aide");
    }
    //debugger

    if(twist == true){
        console.log("yes")
    }

    if(twist == false){
        console.log("no")
    }

    if(twist == true && chapter === "traitre"){
        console.log("yes")
    }*/

    /*if(twist == false && chapter === "traitre"){
        let none = document.querySelector("button");
        none.classList.add("none");
        //chapters[traitre].boutons[1].removeAttribute("style", "display: none");
    }*/
    /*if (chapters[chapter].boutons.length == 1){
        bouton2Remplace.setAttribute("style", "display: none");
        bouton3Remplace.setAttribute("style", "display: none");
    }

    if (chapters[chapter].boutons.length == 2){
        bouton3Remplace.setAttribute("style", "display: none");
    }*/

    /*if (chapters[chapter].boutons.length = 10){
        bouton2Remplace.textContent = chapters[chapter].boutons[1].titre;
    }

    else{
        bouton2Remplace.setAttribute("style", "display: none");
    }*/
        //console.log("Titre: ", chapters[chapter].titre);
        //jeu.replaceChild(nouveauTitre, titreRemplace);
        //console.log("description: ", chapters[chapter].description);
        //jeu.replaceChild(nouvelleDescription, descriptionRemplace);

        /*for(i=0; i<=chapters[chapter].boutons.length-1; i++){
        console.log(`Pour choisir l'option: "${chapters[chapter].boutons[i].titre}" écrivez: goToChapter("${chapters[chapter].boutons[i].destination}")`);
        }
    
    else{
        console.log("Cette clé de chapitre n'existe pas.")
    }*/
}


    /*if(chapter === "debut" && twist == true){
        twist = false;
        //console.log("restart");
        /*let logo = document.querySelector("#logo");
        logo.classList.add("none");*/
    /*}

    if (chapter === "aide"){
        twist = true;
        //console.log("aide");
    }*/
    //debugger

    /*if(twist == true){
        console.log("yes")
    }*/

    /*if(twist == false){
        console.log("no")
    }*/

    /*if(twist == false && chapter === "traitre"){
        let none = document.querySelector(".opt");
        none.className("none");
        //console.log("lose")
        //console.log("win")
    }*/
}

goToChapter("debut");