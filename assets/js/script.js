const chapters = {
    debut: {
        titre: "Arrivée au sanctuaire",
        description: "Javier, membre de l'ordre des chevalier de bronze qui se battent au service du sanctuaire d'Athéna à l'aide de l'énergie divine de la Déesse, a recu une lettre provenant dudis sanctuaire lui informant qu'il y a un traitre chez les chevaliers et que son influence se répend à travers le sanctuaire. Il décide donc de rentrer pour offrir son aide.",
        image: "./assets/images/sanctuaire.jfif",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Allons-y!',
            destination: 'ambuscade'
        }]
    },

    ambuscade: {
        titre: "Attaque surprise",
        description: "Dès son arrivée au sanctuaire, Javier est attaqué par un autre chevalier. Celui-ci semble porter un bouclier, comment Javier compte-t-il riposter?",
        image: "./assets/images/ambuscade.jpeg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Un coup puissant, direct',
            destination: 'bloque'
        },
        {
            titre: 'Une rafale de coups rapides',
            destination: 'rafale'
        }
        ]
    },

    //mort 1
    bloque: {
        titre: "Bloqué",
        description: "Tout miser sur une seule attaque contre un adversaire avec une bonne défence semble avoir été une mauvaise idée, l'agresseur profite du manque de jugement de Javier et le tue d'un coup rapide et précis. «Sus à la fausse déesse!» fut la dernière chose qu'il entendit.",
        image: "./assets/images/perdu.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Comment aurait-il pu éviter ce destin?',
            destination: 'debut'
        }]
    },

    rafale: {
        titre: "Un traitre en moins",
        description: "Le bouclier de son ennemi ne peut rien contre la rafale de coups de poing rapides. Le chevalier finit par tomber sous le poids des coups sans arrèt de Javier, marmonant «La Déesse tombera! Nous allons...» avant de tomber sans connaissance.",
        //image: "./assets/images/rafale.gif",
        //[enlever image]
        video: "./assets/videos/rafale.mp4",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        //sonSup: "./assets/sons/rozan_sho_ryu_ha.mp3",
        boutons: [{
            titre: "Continuer d'avancer dans le sanctuaire",
            destination: 'rencontre'
        }]
    },


    rencontre: {
        titre: "Rencontre agitée",
        description: "Alors qu'il continue d'avancer dans le sanctuaire, se demandant comment il pourrait trouver le reste du «Nous» qu'a mentioné le chevalier qu'il a battu, au loin, Javier vois un autre chevalier de bronze fuire un chevalier d'or, le plus haut rang possible pour un chevalier, il est même plus fort la garde rapprochée d'Athéna.",
        image: "./assets/images/rencontre.jpeg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: '«Que ce passe-t-il?»',
            destination: 'dilemme'
        }]
    },

    dilemme: {
        titre: "Le bronze et l'or",
        description: "Le chevalier de bronze supplie Javier de l'aider puisque seul, il ne peut rien contre un chevalier d'or, que fait Javier, devrait-il le croire?",
        image: "./assets/images/or.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Attaquer le chevalier de bronze',
            destination: 'attaquer'
        },
        {
            titre: "Attaquer le chevalier d'or",
            destination: 'aide'
        },
        {
            titre: 'Ne pas prendre de décision hâtive',
            destination: 'attendre'
        }
        ]
    },

    //mort 2
    attaquer: {
        titre: "Rouler sous l'or",
        description: "S'il y a une personne en qui on peut croire, c'est le chevalier d'or, le plus fort et le plus loyal des chevaliers! Javier donne un puissant coup de poing au crâne de l'autre chevalier de bronze, l'assomant instantanément. «Quel dommage, tu viens d'éliminer un des seuls aliés qui vous restait à vous, les loyaux» dit le chevalier d'or avans d'oblitérer le deux chevaliers de bronze devans lui",
        image: "./assets/images/perdu.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Comment aurait-il pu éviter ce destin?',
            destination: 'debut'
        }]
    },

    //route sans allié
    attendre: {
        titre: "Réaction tardive",
        description: "Ne voulant pas prendre de décision hâtive, Javier attends un peu avant d'attaquer sans raison. Une décision qu'il regrette amèrement lorsqu'il voit le chavalier d'or réduire celui qui le fuiait en poussières avant de se tourner vers Javier, un sourire moqueur sur le visage.",
        image: "./assets/images/attendre.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Oh non...',
            destination: 'riposte'
        }]
    },

    riposte: {
        titre: "Combat perdu d'avance",
        description: "«T'es un peu lent, toi.» Dis le chevalier d'or en s'aprochant. Javier n'as plus le temps d'hésiter le chevalier d'or n'est clairement pas de son côté mais que peut-il faire contre le plus puissant chevalier du sanctuaire?",
        image: "./assets/images/riposte.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Un coup puissant, direct',
            destination: 'directe'
        },
        {
            titre: 'Une rafale de coups rapides',
            destination: 'desespere'
        }
        ]
    },

    //mort optionelle
    desespere: {
        titre: "Même pas proche",
        description: "Désespéré, Javier donne le plus de coups de poing possible, le plus vite possible mais aucun de ces petit coups rapides ne'est assez puissant pour battre un chevalier de bronze. Javier est oblitéré en un clin d'oeil",
        image: "./assets/images/perdu.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Comment aurait-il pu éviter ce destin?',
            destination: 'debut'
        }]
    },

    directe: {
        titre: "Précis",
        description: "Prennant avantage du fait que le chevalier d'or ne le prends clairement pas au sérieux, Javier se jette dans la gueule du loup à la vitesse de l'éclair et frappe le chevalier d'or dans le ventre de toutes ses forces. Le chevalier d'or est déstabilisé, ce qui laisse assez de temps à Javier pour porter un coup dévastateur à la gorge de son adversaire, le mettant hors d'état de nuire. «Tu as battu mon chevalier d'or à toi tous seul, impressionant...»",
        image: "./assets/images/directe.jpg",
        son: "./assets/sons/saint_seiya_ost_2.mp3",
        boutons: [{
            titre: '«Qui va là?»',
            destination: 'meurtre'
        }]
    },
    //route sans allié fin
    //route avec allié
    aide: {
        titre: "Deux contre un",
        description: "Ensemble, Javier et l'autre chevalier de bronze qui se présente sous le nom de Lancelot combattent le chevalier d'or et, ensemble, ils arrivent à défaire leur puissant ennemi. Lancelot explique ensuite la raison pour laquelle le chevalier d'or le chassait: il a découvert l'identité du traitre original et que le chevalier d'or avait rejoint sa cause. «Dis donc, tu est drôlement bien renseigné, toi...»",
        image: "./assets/images/aide.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: '«Qui va là?»',
            destination: 'meurtre'
        }]
    },
    //route avec allié fin

    meurtre: {
        titre: "Une mort abrupte",
        description: "Javier se retourne, ayant à peine le temps d'entrevoir la silouette du chef de la garde raprochée d'Athéna avant d'être anéanti par ce dernier.",
        image: "./assets/images/meurtre.jpeg",
        son: "./assets/sons/saint_seiya_ost_3.mp3",
        boutons: [{
            titre: '«Comment est-ce possible?»',
            destination: 'traitre'
        }]
    },

    traitre: {
        titre: "Le traître",
        description: "La garde raprochée d'Athéna, les hommes et femmes en qui Athéna à entièrement confience. Des anciens chevaliers qui sont suposés de n'avoir qu'une chose en commun: une loyauté sans faille envers la Déesse. Finalement, l'homme le plus proche de la déesse sera celui qui causera sa perte.",
        image: "./assets/images/traitre.jpg",
        son: "./assets/sons/saint_seiya_ost_3.mp3",
        boutons: [{
            titre: "C'est fini...",
            destination: 'mort'
        },
        {
            titre: '«Non!»',
            destination: 'twist'
        }
        ]
    },

    //mort 3
    mort: {
        titre: "Mission: échoué",
        description: "Javier est mort, Athéna est maintenant à la merci de ceux qu'elle croyait être ses loyaux serviteurs.",
        image: "./assets/images/perdu.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Comment aurait-il pu éviter ce destin?',
            destination: 'debut'
        }]
    },

    twist: {
        titre: "NON",
        description: "«Non! Ça ne peut pas finir comme ça, je dois pouvoir faire quelque chose.» C'est alors que Javier comprends qu'avant de mourir, il dois donner toute son énergie divine à Lancelot. Ensemble, ils ont réussit à battre le chevalier d'or, peut-être que Lancelot pourras faire de même avec le traître s'il a accès à leurs puissance combinée!",
        //image: "./assets/images/twist.gif",
        //[enlever image]
        video: "./assets/videos/twist.mp4",
        son: "./assets/sons/saint_seiya_ost_3.mp3",
        boutons: [{
            titre: '«Lancelot, vas-y!!!»',
            destination: 'fin'
        }]
    },

    fin: {
        titre: "Mort avec honneur",
        description: "Sa conection à Athéna renforcée grâce à Javier, Lancelot arrive à surpasser la puissance du traître, un coup de poing titanèsque creuse un cratère dans le torse de ce dernier. L'ordre et la paix enfin revenus au sanctuaire, sachant qu'Athéna est saine et sauve, javier peut mourrir en paix, en véritable chevalier",
        image: "./assets/images/mort.jpg",
        son: "./assets/sons/saint_seiya_ost_1.mp3",
        boutons: [{
            titre: 'Recommencer?',
            destination: 'debut'
        }]
    }
};

let twist = false;

function goToChapter(chapter) {
    if (chapters.hasOwnProperty(chapter)) {
        const titreRemplace = document.querySelector("#chapitre");
        const descriptionRemplace = document.querySelector("#para");
        const imageRemplace = document.querySelector("#image");
        //const soundEffect = document.querySelector("#sunSup");

        titreRemplace.textContent = chapters[chapter].titre;
        descriptionRemplace.textContent = chapters[chapter].description;
        //sonRemplace.innerHTML = `<audio src=${chapters[chapter].son}></audio>`;
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
            nouveauBtn.classList.add(`big${i}`);
            // on applique un libellé au bouton 
            nouveauBtn.textContent = chapters[chapter].boutons[i].titre;
            // on appele goToChapter lorsqu'on clique le bouton 
            nouveauBtn.addEventListener('click', () => {
                // la destination, c'est la destination du bouton! 
                goToChapter(chapters[chapter].boutons[i].destination)
                //activer le son qui joue à chaque changement de page
                //const killerQueen = document.querySelector("audio");
                //killerQueen.currentTime = 0;
                //killerQueen.play();
            });
            // enfin, on ajoute le bouton dans la page Web (dans le DOM) 
            boutons.appendChild(nouveauBtn);
        };

        //code son:
        const sonRemplace = document.querySelector("#son");
        sonRemplace.innerHTML = `<audio src="${chapters[chapter].son}" id="${chapter}-son"></audio>`;

        if (chapter === "debut") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 494;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "ambuscade" || chapter === "dilemme") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 288;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "rafale") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            //let sonSup = document.querySelector()
            setTimeout(function () {
                sonActuel.currentTime = 859;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 2500);
            });
        }

        if (chapter === "rencontre") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1330;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "aide") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 35;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 990);
            });
        }

        if (chapter === "meurtre") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1310;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 1800);
            });
        }

        if (chapter === "traitre") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1767;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 2900);
            });
        }

        if (chapter === "twist") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1092;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "fin") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 175;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        //sons du chemain alternatif
        if (chapter === "attendre") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1743;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "riposte") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 1749;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        if (chapter === "directe") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 569;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }
        //sons de mort
        if (chapter === "bloque" || chapter === "attaquer" || chapter === "desespere" || chapter === "mort") {
            let sonActuel = document.querySelector(`#${chapter}-son`);
            setTimeout(function () {
                sonActuel.currentTime = 735;
                sonActuel.play();

                setTimeout(function () {
                    sonActuel.pause();
                    sonActuel.currentTime = 0;
                }, 3000);
            });
        }

        //si y'a de quoi à changer dans les sons:
        //ost 1: https://www.youtube.com/watch?v=47b3mWohtGY
        //ost 2: https://www.youtube.com/watch?v=yVb-yUlkszs
        //ost 3: https://www.youtube.com/watch?v=b_RRG2BuRn0&t=732s
        //code son fini

        const none = document.querySelector(".opt.big1");



        if (chapter === "debut" && twist == true) {
            twist = false;
        }

        if (chapter === "aide") {
            twist = true;
        }

        if (chapter === "traitre" && twist == false) {
            none.setAttribute("style", "display: none");
        }

        if (chapters[chapter].video) {
            //debugger
            imageRemplace.innerHTML = `<video src="${chapters[chapter].video}" class="${chapter}" autoplay loop></video>`;
        } else {
            //debugger
            imageRemplace.innerHTML = `<img src="${chapters[chapter].image}" class="${chapter}">`;
        }

       /* if (chapters[chapter].sonSup) {
            //debugger
            imageRemplace.innerHTML = `<video src="${chapters[chapter].video}" class="${chapter}" autoplay loop></video>`;
        } else {
            //debugger
            imageRemplace.innerHTML = `<img src="${chapters[chapter].image}" class="${chapter}">`;
        }*/

        //const killerQueen = document.querySelector("audio");

        /*if (killerQueen.ended()){
            killerQueen.currentTime = 0;
        }*/


        /*if (chapter.hasOwnProperty(image)){
            debugger
            imageRemplace.innerHTML = `<img src="${chapters[chapter].image}" class="${chapter}">`;
        }else{
            imageRemplace.innerHTML = `<video src="${chapters[chapter].video}" class="${chapter}"></video>`;
        }*/

        //const button = document.querySelectorAll(".opt");

        /*button.addEventListener("click", function () {
            const killerQueen = document.querySelector("audio");
            killerQueen.play();
        })*/

        
    }
}

goToChapter("debut");

//enlever l'image favicon de seiya stp

//spawn.theRock()