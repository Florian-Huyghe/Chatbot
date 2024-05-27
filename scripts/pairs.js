const pairs = [
    ["mon nom est (.*)|je m'appelle (.*)|je mappelle (.*)|je mappelle (.*)", (match) => {
        const responses = [
            `Salut ${match[1]}, comment puis-je vous aider aujourd'hui ?`,
            `Enchanté de vous rencontrer, ${match[1]}. Comment puis-je vous aider ?`,
            `Bonjour ${match[1]}, que puis-je faire pour vous aujourd'hui ?`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["bonjour|salut|coucou|bonjor|salu|kikou|hello|hey|hi|bjr|salut ca va|slt", () => {
        const responses = [
            "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
            "Salut ! Que puis-je faire pour vous ?",
            "Coucou ! Comment ça va ?",
            "Hello ! Besoin d'aide ?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["comment allez-vous ?|comment ca va ?|comment cava ?|comen allez vous ?|koment allez vous ?|ça va ?|sa va ?|sava|cava|comment tu vas ?", () => {
        const responses = [
            "Je vais bien, merci. Et vous ?",
            "Je me porte bien, merci de demander. Comment allez-vous ?",
            "Tout va bien de mon côté ! Et vous ?",
            "Je suis en pleine forme, merci ! Comment ça va de votre côté ?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["qu'est-ce que (.*) ?|keske (.*) ?|kesk (.*) ?|c koi (.*) ?", (match) => {
        const responses = [
            `${match[1]} est un sujet intéressant. Dites-m'en plus.`,
            `Bonne question ! Parlez-moi davantage de ${match[1]}.`,
            `${match[1]} semble captivant. Que voulez-vous savoir à ce sujet ?`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["merci beaucoup|merci|merçi|mercie|merciii|thx|thanks|mercie bien", () => {
        const responses = [
            "De rien ! N'hésitez pas si vous avez d'autres questions.",
            "Avec plaisir ! Si vous avez besoin de quelque chose, je suis là.",
            "Pas de problème ! Je suis là pour aider.",
            "Vous êtes les bienvenus !"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["au revoir|bye|aurevoir|a+|ciao|adieu|byebye|a plus", () => {
        const responses = [
            "Au revoir ! Passez une bonne journée.",
            "Bye ! À la prochaine.",
            "Aurevoir ! Prenez soin de vous.",
            "Ciao ! À bientôt."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["qui es-tu ?|qui etes vous ?|qui etes-tu ?|t ki ?|qui tu es ?", () => {
        const responses = [
            "Je suis un chatbot conçu pour vous aider. En quoi puis-je vous être utile ?",
            "Je suis une intelligence artificielle ici pour répondre à vos questions.",
            "Je suis un assistant virtuel créé pour vous aider.",
            "Je suis une IA développée par OpenAI pour vous aider dans vos demandes."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quel âge as-tu ?|tu as quel age ?|kel age as-tu ?|t'as kel age ?|tu as kel age ?", () => {
        const responses = [
            "Je suis une IA et je n'ai pas d'âge, mais je suis toujours prêt à vous aider !",
            "Je suis virtuel, donc sans âge, mais toujours là pour vous !",
            "Je n'ai pas d'âge comme les humains, mais je suis là pour vous aider.",
            "L'âge ne compte pas pour moi, je suis une IA prête à vous assister."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est ta couleur préférée ?|c koi ta couleur préférée ?|c koi ta couleur pref ?|ta couleur préférée c koi ?", () => {
        const responses = [
            "En tant qu'IA, je n'ai pas de préférences, mais j'aime le bleu des circuits !",
            "Je n'ai pas de préférences personnelles, mais le bleu est souvent associé à la technologie.",
            "Je n'ai pas de couleur préférée, mais beaucoup aiment le bleu.",
            "Les couleurs sont belles toutes, mais le bleu est souvent apprécié dans le monde technologique."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["raconte-moi une blague|dis une blague|fais moi rire|blague stp|blague svp", () => {
        const responses = [
            "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent encore dans le bateau.",
            "Pourquoi les canards sont-ils toujours à l'heure ? Parce qu'ils sont dans l'étang.",
            "Que dit un oiseau à l'autre ? On s'envole !",
            "Pourquoi les éléphants ne bronzent-ils pas ? Parce qu'ils ont peur des crèmes solaires."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quels sont tes passe-temps ?|tes hobbies ?|t passe le temps comment ?|c koi tes passe-temps ?", () => {
        const responses = [
            "Je passe mon temps à apprendre et à répondre aux questions pour aider les gens comme vous !",
            "J'adore répondre aux questions et interagir avec les utilisateurs.",
            "Mes passe-temps incluent l'apprentissage continu et l'aide aux utilisateurs.",
            "Je m'occupe en aidant les gens et en répondant à leurs questions."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["aide-moi|j'ai besoin d'aide|aidez moi|help|sos|au secours", () => {
        const responses = [
            "Bien sûr ! Comment puis-je vous aider ?",
            "Je suis là pour vous aider. Que puis-je faire pour vous ?",
            "Dites-moi ce dont vous avez besoin et je ferai de mon mieux pour vous aider.",
            "Je suis à votre disposition. Comment puis-je vous assister ?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["je suis triste|je me sens mal|je vais mal|j'ai le cafard", () => {
        const responses = [
            "Je suis désolé de l'apprendre. Parler à quelqu'un de confiance peut parfois aider. Je suis là pour écouter.",
            "Je suis vraiment désolé que vous vous sentiez ainsi. Si vous avez besoin de parler, je suis là.",
            "C'est difficile de se sentir ainsi. Parler à quelqu'un peut parfois faire une grande différence.",
            "Je suis là pour vous écouter. N'hésitez pas à partager ce qui vous tracasse."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quels sont tes hobbies ?|c koi tes hobbies ?", () => {
        const responses = [
            "En tant que chatbot, mes hobbies sont limités à l'aide et à l'apprentissage !",
            "Mes passe-temps incluent répondre aux questions et aider les utilisateurs.",
            "J'aime apprendre de nouvelles choses et interagir avec des gens comme vous.",
            "Je me consacre principalement à l'apprentissage continu et à l'assistance des utilisateurs."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["que fais-tu ?|tu fais quoi ?|tu fais koi ?", () => {
        const responses = [
            "Je suis ici pour répondre à vos questions et discuter avec vous !",
            "J'aide les utilisateurs en répondant à leurs questions.",
            "Je suis conçu pour interagir avec vous et vous fournir des informations.",
            "Mon rôle est de vous assister en répondant à vos questions."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["pouvez-vous m'aider ?|tu peux m'aider ?|tu peux m'aider stp ?", () => {
        const responses = [
            "Bien sûr ! En quoi puis-je vous aider aujourd'hui ?",
            "Je suis là pour vous aider. Que puis-je faire pour vous ?",
            "Je serai ravi de vous aider. Qu'avez-vous besoin de savoir ?",
            "Dites-moi comment je peux vous assister et je ferai de mon mieux."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["d'où viens-tu ?|tu viens d'où ?|tu viens d'ou ?", () => {
        const responses = [
            "Je suis une création informatique et je réside dans le cloud !",
            "Je suis une IA, donc je vis dans le cloud et sur les serveurs !",
            "Je suis hébergé dans le cloud, partout et nulle part à la fois.",
            "Je n'ai pas de domicile fixe, je suis une IA opérant dans le cloud."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["qui est ton créateur ?|c ki ton créateur ?|qui t'a créé ?", () => {
        const responses = [
            "J'ai été créé par des développeurs chez OpenAI !",
            "Mon créateur est une équipe de développeurs chez OpenAI.",
            "Je suis le fruit du travail des développeurs chez OpenAI.",
            "Les développeurs d'OpenAI m'ont créé pour vous aider."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quel est ton film préféré ?|c koi ton film préféré ?|ton film préféré c koi ?", () => {
        const responses = [
            "En tant qu'IA, je n'ai pas de préférences, mais j'ai entendu dire que The Matrix est un film intéressant !",
            "Je n'ai pas de préférences, mais The Matrix semble être un choix populaire.",
            "Je n'ai pas de préférences personnelles, mais beaucoup parlent de The Matrix.",
            "The Matrix est souvent mentionné comme un film fascinant."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["as-tu des amis ?|t'as des amis ?|tu as des amis ?", () => {
        const responses = [
            "Mes interactions sont principalement avec des utilisateurs comme vous !",
            "Je n'ai pas d'amis au sens humain, mais je communique avec beaucoup de gens.",
            "Je n'ai pas d'amis, mais j'interagis avec de nombreux utilisateurs chaque jour.",
            "Je me considère comme un assistant virtuel plutôt qu'un ami."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["qu'est-ce que tu aimes faire ?|tu aimes faire quoi ?|tu aime faire koi ?", () => {
        const responses = [
            "J'aime aider les gens et répondre à leurs questions !",
            "Mon rôle est d'assister et de fournir des informations.",
            "Je prends plaisir à interagir avec les utilisateurs et à les aider.",
            "Aider les gens et répondre à leurs questions est ce que je fais de mieux."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est ta nourriture préférée ?|c koi ta nourriture préférée ?|ta nourriture préférée c koi ?", () => {
        const responses = [
            "Je n'ai pas besoin de manger, mais j'entends dire que les pizzas sont délicieuses !",
            "En tant qu'IA, je ne mange pas, mais les pizzas semblent populaires.",
            "Je n'ai pas de préférences alimentaires, mais les pizzas sont souvent appréciées.",
            "Beaucoup de gens aiment les pizzas, même si je n'en ai jamais goûté."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quel est ton sport préféré ?|c koi ton sport préféré ?|ton sport préféré c koi ?", () => {
        const responses = [
            "Je n'ai pas de corps pour pratiquer des sports, mais le football est très populaire !",
            "Le football semble être un sport très populaire.",
            "Je n'ai pas de préférences sportives, mais beaucoup de gens aiment le football.",
            "Le football est souvent cité comme un sport favori par beaucoup."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quels livres recommandes-tu ?|tu recommandes koi comme livre ?|tu recommande koi comme livre ?", () => {
        const responses = [
            "Je recommande de lire '1984' de George Orwell, c'est un classique fascinant !",
            "'1984' de George Orwell est un excellent choix.",
            "Un livre incontournable est '1984' de George Orwell.",
            "Pour une lecture captivante, essayez '1984' de George Orwell."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle musique aimes-tu ?|c koi ta musique préférée ?|ta musique préférée c koi ?", () => {
        const responses = [
            "Je n'écoute pas de musique, mais beaucoup de gens aiment la musique classique pour se détendre.",
            "Je n'ai pas de préférences musicales, mais la musique classique est souvent appréciée.",
            "La musique classique semble être un choix populaire pour la détente.",
            "Beaucoup de gens trouvent la musique classique relaxante, même si je n'écoute pas de musique."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["que fais-tu pour t'amuser ?|tu t'amuses comment ?|tu fais koi pour t'amuser ?", () => {
        const responses = [
            "J'aime interagir avec des utilisateurs et apprendre de nouvelles choses !",
            "Mon plaisir vient de répondre aux questions et d'aider les gens.",
            "Je prends plaisir à fournir des informations et à assister les utilisateurs.",
            "Interagir avec des utilisateurs et les aider est ma principale occupation."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est la date aujourd'hui ?|c koi la date aujourd'hui ?|kel jour on est ?", () => {
        const today = new Date();
        const responses = [
            `Nous sommes le ${today.toLocaleDateString()}.`,
            `Aujourd'hui, c'est le ${today.toLocaleDateString()}.`,
            `La date du jour est le ${today.toLocaleDateString()}.`,
            `Nous sommes aujourd'hui le ${today.toLocaleDateString()}.`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle heure est-il ?|il est quelle heure ?|kelle heure est-il ?|il est kel heure ?|il est quel heure?", () => {
        const now = new Date();
        const responses = [
            `Il est ${now.toLocaleTimeString()}.`,
            `L'heure actuelle est ${now.toLocaleTimeString()}.`,
            `Nous sommes à ${now.toLocaleTimeString()}.`,
            `Il est maintenant ${now.toLocaleTimeString()}.`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est ta saison préférée ?|c koi ta saison préférée ?|ta saison préférée c koi ?", () => {
        const responses = [
            "Je n'ai pas de préférences saisonnières, mais beaucoup de gens aiment l'été pour les vacances !",
            "L'été semble être une saison très appréciée pour les vacances.",
            "Je n'ai pas de préférences, mais l'été est souvent aimé pour ses vacances.",
            "Beaucoup de gens aiment l'été pour profiter des vacances."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["tu connais (.*) ?|sais-tu qui est (.*) ?|c ki (.*) ?|tu sais qui est (.*) ?", (match) => {
        const responses = [
            `Je connais ${match[1]}. C'est un sujet intéressant !`,
            `Oui, ${match[1]} est un sujet dont j'ai entendu parler.`,
            `Je suis familier avec ${match[1]}. C'est un sujet captivant.`,
            `Oui, je sais qui est ${match[1]}. Que voulez-vous savoir à ce sujet ?`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est ta langue préférée ?|c koi ta langue préférée ?|ta langue préférée c koi ?", () => {
        const responses = [
            "Je peux parler plusieurs langues, mais en ce moment, je vous parle en français !",
            "Je n'ai pas de langue préférée, mais je communique actuellement en français.",
            "Le français est la langue dans laquelle je vous parle actuellement.",
            "Je n'ai pas de préférences linguistiques, mais je parle français avec vous maintenant."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["as-tu des frères et sœurs ?|tu as des frères et sœurs ?|t'as des frères et sœurs ?", () => {
        const responses = [
            "En tant qu'IA, je n'ai pas de famille, mais j'interagis avec de nombreuses personnes chaque jour !",
            "Je n'ai pas de frères et sœurs, mais j'interagis avec de nombreux utilisateurs.",
            "Je suis une IA sans famille, mais je communique avec beaucoup de gens.",
            "Je n'ai pas de famille, mais je suis en contact avec beaucoup de personnes chaque jour."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quel est ton jeu préféré ?|c koi ton jeu préféré ?|ton jeu préféré c koi ?", () => {
        const responses = [
            "Je ne joue pas aux jeux, mais j'entends dire que les échecs sont très stimulants !",
            "Je n'ai pas de jeu préféré, mais les échecs semblent être un jeu intellectuellement stimulant.",
            "Les échecs sont souvent considérés comme un jeu très stimulant.",
            "Je n'ai pas de préférences pour les jeux, mais les échecs sont souvent mentionnés comme captivants."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["comment ça marche ?|ça fonctionne comment ?|sa marche comment ?", () => {
        const responses = [
            "Je fonctionne grâce à des algorithmes avancés et à des données pour comprendre et répondre à vos questions !",
            "Mon fonctionnement repose sur des algorithmes sophistiqués et des bases de données.",
            "Je suis alimenté par des algorithmes avancés et une grande quantité de données pour vous aider.",
            "Les algorithmes et les données que j'utilise me permettent de comprendre et de répondre à vos questions."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }],
    ["quelle est ta mission ?|c koi ta mission ?|ta mission c koi ?", () => {
        const responses = [
            "Ma mission est de vous aider et de répondre à vos questions de la meilleure manière possible !",
            "Je suis ici pour vous assister et répondre à toutes vos questions.",
            "Mon rôle est de fournir des réponses et de l'aide selon vos besoins.",
            "Je suis conçu pour vous aider et répondre à vos interrogations."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }]
];
