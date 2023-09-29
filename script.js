const chapters = {
    debut : {
        titre: "Arrivée au sanctuaire",
        description: "Javier, membre de l'ordre des chevalier de bronze qui se battent au service du sanctuaire d'Athéna à l'aide de l'énergie divine de la Déesse, a recu une lettre provenant dudis sanctuaire lui informant qu'il y a un traitre chez les chevaliers et que son influence se répend à travers le sanctuaire. Il décide donc de rentrer pour offrir son aide.",
        image:"assets",
        boutons: [
            {titre: 'Allons-y!', 'destination': 'ambuscade'}
        ]
    },

    ambuscade : {
        titre: "Attaque surprise",
        description: "Dès son arrivée au sanctuaire, Javier est attaqué par un autre chevalier. Celui-ci semble porter un bouclier, comment Javier compte-t-il riposter?",
        image:"",
        boutons:[
            {titre: 'Un coup puissant, direct', 'destination': 'bloque'},
            {titre: 'Une rafale de coups rapides', 'destination': 'rafale'}
        ]
    },

    //mort 1
    bloque : {
        titre: "Bloqué",
        description: "Tout miser sur une seule attaque contre un adversaire avec une bonne défence semble avoir été une mauvaise idée, l'agresseur profite du manque de jugement de Javier et le tue d'un coup rapide et précis. «Sus à la fausse déesse!» fut la dernière chose qu'il entendit.",
        image:"",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', 'destination': 'debut'}
        ]
    },

    rafale : {
        titre: "Un traitre en moins",
        description: "Le bouclier de son ennemi ne peut rien contre la rafale de coups de poing rapides. Le chevalier finit par tomber sous le poids des coups sans arrèt de Javier, marmonant «La Déesse tombera! Nous allons...» avant de tomber sans connaissance.",
        image:"",
        boutons:[
            {titre: "Continuer d'avancer dans le sanctuaire", 'destination': 'rencontre'}
        ]
    },

    
    rencontre : {
        titre: "Rencontre agitée",
        description: "Alors qu'il continue d'avancer dans le sanctuaire, se demandant comment il pourrait trouver le reste du «Nous» qu'a mentioné le chevalier qu'il a battu, au loin, Javier vois un autre chevalier de bronze fuire un chevalier d'or, le plus haut rang possible pour un chevalier, il est même plus fort la garde raprochée d'Athéna.",
        image:"",
        boutons: [
            {titre: '«Que ce passe-t-il?»', 'destination': 'dilemme'}
        ]
    },

    dilemme : {
        titre: "Le bronze et l'or",
        description: "Le chevalier de bronze supplie Javier de l'aider puisque seul, il ne peut rien contre un chevalier d'or, que fait Javier, devrait-il le croire?",
        image:"",
        boutons: [
            {titre: 'Attaquer le chevalier de bronze', 'destination': 'attaquer'},
            {titre: "Attaquer le chevalier d'or", 'destination': 'aide'},
            {titre: 'Ne pas prendre de décision hâtive', 'destination': 'attendre'}
        ]
    },

    //mort 2
    attaquer : {
        titre: "Rouler sous l'or",
        description: "S'il y a une personne en qui on peut croire, c'est le chevalier d'or, le plus fort et le plus loyal des chevaliers! Javier donne un puissant coup de poing au crâne de l'autre chevalier de bronze, l'assomant instantanément. «Quel dommage, tu viens d'éliminer un des seuls aliés qui vous restait à vous, les loyaux» dit le chevalier d'or avans d'oblitérer le deux chevaliers de bronze devans lui",
        image:"",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', 'destination': 'debut'}
        ]
    },

    //route sans allié
    attendre : {
        titre: "Réaction tardive",
        description: "Ne voulant pas prendre de décision hâtive, Javier attends un peu avant d'attaquer sans raison. Une décision qu'il regrette amèrement lorsqu'il voit le chavalier d'or réduire celui qui le fuiait en poussières avant de se tourner vers Javier, un sourire moqueur sur le visage.",
        image:"",
        boutons:[
            {titre: 'Oh non...', 'destination': 'riposte'}
        ]
    },

    riposte : {
        titre: "Combat perdu d'avance",
        description: "«T'es un peu lent, toi.» Dis le chevalier d'or en s'aprochant. Javier n'as plus le temps d'hésiter le chevalier d'or n'est clairement pas de son côté mais que peut-il faire contre le plus puissant chevalier du sanctuaire?",
        image:"",
        boutons:[
            {titre: 'Un coup puissant, direct', 'destination': 'directe'},
            {titre: 'Une rafale de coups rapides', 'destination': 'desespere'}
        ]
    },

    //mort optionelle
    desespere : {
        titre: "Même pas proche",
        description: "Désespéré, Javier donne le plus de coups de poing possible, le plus vite possible mais aucun de ces petit coups rapides ne'est assez puissant pour battre un chevalier de bronze. Javier est oblitéré en un clin d'oeil",
        image:"",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', 'destination': 'debut'}
        ]
    },

    directe : {
        titre: "Précis",
        description: "Prennant avantage du fait que le chevalier d'or ne le prends clairement pas au sérieux, Javier se jette dans la gueule du loup à la vitesse de l'éclair et frappe le chevalier d'or dans le ventre de toutes ses forces. Le chevalier d'or est déstabilisé, ce qui laisse assez de temps à Javier pour porter un coup dévastateur à la gorge de son adversaire, le mettant hors d'état de nuire. <br> «Tu as battu mon chevalier d'or à toi tous seul, impressionant...»",
        image:"",
        boutons:[
            {titre: '«Qui vas là?»', 'destination': 'mort'}
        ]
    },
    //route sans allié fin
    //route avec allié
    aide : {
        titre: "Deux contre un",
        description: "Ensemble, Javier et l'autre chevalier de bronze qui se présente sous le nom de Lancelot combattent le chevalier d'or et, ensemble, ils arrivent à défaire leur puissant ennemi. Lancelot explique ensuite la raison pour laquelle le chevalier d'or le chassait: il a découvert l'identité du traitre original et que le chevalier d'or avait rejoint sa cause. <br> «Dis donc, tu est drôlement bien renseigné, toi...»",
        image:"",
        boutons:[
            {titre: '«Qui vas là?»', 'destination': 'meurtre'}
        ]
    },
    //route avec allié fin

    meutre : {
        titre: "Une mort abrupte",
        description: "Javier se retourne ayant à peine le temps d'entrevoir la silouette du chef de la garde raprochée d'Athéna avant d'être anéanti par ce dernier.",
        image:"",
        boutons:[
            {titre: '«Comment est-ce possible?»', 'destination': 'traitre'}
    ]
    },

    traitre : {
        titre: "Le traitre",
        description: "La garde raprochée d'Athéna, les hommes et femmes en qui Athéna à entièrement confience. Des anciens chevaliers qui sont suposés de n'avoir qu'une chose en commun: une loyauté sans faille envers la Déesse. Finalement, l'homme le plus proche de la déesse sera celui qui causera sa perte.",
        image:"",
        boutons:[
            {titre: "C'est fini", 'destination': 'mort'},
            {titre: '«Non!»', 'destination': 'twist'}
        ]
    },
    
    //mort 3
    mort : {
        titre: "Mission: échoué",
        description: "Javier est mort, Athéna est maintenant à la merci de ceux qu'elle croyait être ses loyaux serviteurs.",
        image:"",
        boutons:[
            {titre: 'Comment aurait-il pu éviter ce destin?', 'destination': 'debut'}
        ]
    },

    twist : {
        titre: "NON",
        description: "«Non! Ça ne peut pas finir comme ça, je dois pouvoir faire quelque chose.» C'est alors que Javier comprends qu'avant de mourir, il dois donner toute son énergie divine à Lancelot. Ensemble, ils ont réussit à battre le chevalier d'or, peut-être que Lancelot pourras faire de même avec le traître s'il a accès à leurs puissance combinée!",
        image:"",
        boutons:[
            {titre: '«Lancelot, vas-y!!!»', 'destination': 'fin'}
        ]
    },

    fin : {
        titre: "Mort avec honneur",
        description: "Sa conection à Athéna renforcée grâce à Javier, Lancelot arrive à surpasser la puissance du traître, un coup de poing titanèsque creuse un cratère dans le torse de ce dernier. L'ordre et la paix enfin revenus au sanctuaire, sachant qu'Athéna est saine et sauve, javier peut mourrir en paix, en véritable chevalier",
        image:"",
        boutons:[]
    }
};

function goToChapter(chapter) {
    if(chapters.hasOwnProperty(chapter)){
        console.log("Titre: ", chapters[chapter].titre);
        console.log("description: ", chapters[chapter].description);
        console.log("Boutons: ", chapters[chapter].boutons);
    }
    else{
        console.log("Cette clé de chapitre n'existe pas.")
    }
};

goToChapter("debut");