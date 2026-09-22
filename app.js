document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen
                ? "×"
                : "☰";

        });

    }


    /* =====================================================
       RECEITAS
    ===================================================== */

    const recipes = {

        sushi: {

            title: "Sushi",

            tag: "PRATO 01",

            number: "01",

            time: "25 min",

            calories: "320 kcal",

            protein: "18 g",

            carb: "42 g",

            fat: "8 g",

            image:
                "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85",

            description:
                "Uma combinação de arroz, peixe e vegetais que reúne diferentes grupos de nutrientes em um prato colorido.",

            ingredients: [

                "1 xícara de arroz para sushi",

                "150 g de peixe fresco adequado para consumo cru",

                "2 folhas de alga nori",

                "1/2 cenoura",

                "1/2 pepino",

                "Gergelim a gosto",

                "Molho de soja para acompanhar"

            ],

            steps: [

                "Prepare o arroz de acordo com as instruções da embalagem.",

                "Corte o peixe, a cenoura e o pepino em tiras.",

                "Coloque a alga nori sobre uma esteira e espalhe uma camada fina de arroz.",

                "Adicione o peixe e os vegetais.",

                "Enrole cuidadosamente e corte em pedaços."

            ],

            theme:
                "O peixe e os demais alimentos fornecem nutrientes utilizados pelo organismo. O funcionamento das células depende de moléculas e informações genéticas relacionadas ao DNA e ao RNA.",

            care:
                "Peixes crus devem ser de procedência confiável e próprios para consumo cru. Pessoas com restrições alimentares ou maior risco de infecções devem evitar preparações com peixe cru."

        },


        torta: {

            title: "Torta de frango",

            tag: "PRATO 02",

            number: "02",

            time: "45 min",

            calories: "390 kcal",

            protein: "24 g",

            carb: "38 g",

            fat: "16 g",

            image:
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",

            description:
                "Uma opção prática para o café da tarde, combinando frango, vegetais e massa assada.",

            ingredients: [

                "200 g de peito de frango cozido e desfiado",

                "1 cenoura pequena",

                "1 tomate",

                "2 ovos",

                "1 xícara de leite",

                "1 xícara de farinha de trigo",

                "1 colher de sopa de óleo",

                "Fermento químico",

                "Sal e temperos a gosto"

            ],

            steps: [

                "Cozinhe e desfie o frango.",

                "Misture os ovos, leite, farinha e óleo para formar a massa.",

                "Acrescente o fermento e misture delicadamente.",

                "Monte a torta colocando parte da massa, o recheio de frango e o restante da massa.",

                "Asse em forno preaquecido até dourar."

            ],

            theme:
                "O frango é fonte de proteínas, que são importantes para a formação e manutenção dos tecidos. As células utilizam aminoácidos para produzir suas próprias proteínas.",

            care:
                "A quantidade de sal e gordura pode ser reduzida conforme a receita. Pessoas com alergia ou intolerância a algum ingrediente devem verificar a composição antes do consumo."

        },


        almondega: {

            title: "Almôndega",

            tag: "PRATO 03",

            number: "03",

            time: "35 min",

            calories: "280 kcal",

            protein: "22 g",

            carb: "12 g",

            fat: "16 g",

            image:
                "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1000&q=85",

            description:
                "Carne, temperos e ingredientes simples formam uma preparação rica em proteínas.",

            ingredients: [

                "300 g de carne moída",

                "1/2 cebola",

                "1 dente de alho",

                "2 colheres de sopa de aveia",

                "1 ovo",

                "Cheiro-verde",

                "Sal e temperos a gosto"

            ],

            steps: [

                "Misture a carne com a cebola, alho, ovo e aveia.",

                "Tempere a mistura.",

                "Modele pequenas bolas com as mãos.",

                "Coloque em uma assadeira.",

                "Asse até que estejam completamente cozidas."

            ],

            theme:
                "A carne fornece proteínas e outros nutrientes. As proteínas são formadas por aminoácidos e desempenham diversas funções fundamentais no organismo.",

            care:
                "A carne deve ser completamente cozida antes do consumo. Evite excesso de sal e dê preferência a cortes com menor quantidade de gordura."

        },


        omelete: {

            title: "Omelete",

            tag: "PRATO 04",

            number: "04",

            time: "15 min",

            calories: "250 kcal",

            protein: "16 g",

            carb: "7 g",

            fat: "17 g",

            image:
                "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",

            description:
                "Uma preparação rápida feita com ovos e vegetais, ideal para uma refeição simples e nutritiva.",

            ingredients: [

                "2 ovos",

                "1/2 tomate",

                "1/4 de cebola",

                "1 colher de sopa de queijo",

                "Cheiro-verde",

                "Sal a gosto",

                "1 fio de azeite"

            ],

            steps: [

                "Bata os ovos em um recipiente.",

                "Adicione o tomate, cebola, queijo e cheiro-verde.",

                "Tempere moderadamente.",

                "Aqueça uma frigideira com um fio de azeite.",

                "Coloque a mistura e cozinhe dos dois lados."

            ],

            theme:
                "O ovo contém proteínas, vitaminas e minerais. Os nutrientes obtidos na alimentação participam de diversos processos celulares, que são orientados pelas informações presentes no material genético.",

            care:
                "O ovo deve ser bem cozido, principalmente para pessoas mais vulneráveis a infecções alimentares. A quantidade de sal e queijo pode ser ajustada conforme a necessidade."

        }

    };


    /* =====================================================
       DESCOBRIR QUAL RECEITA FOI ABERTA
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const recipeName =
        params.get("prato") || "sushi";

    const recipe =
        recipes[recipeName];


    /* =====================================================
       PREENCHER RECEITA
    ===================================================== */

    if (recipe) {

        const title =
            document.querySelector("#recipe-title");

        const image =
            document.querySelector("#recipe-image");

        const tag =
            document.querySelector("#recipe-tag");

        const number =
            document.querySelector("#recipe-number");

        const description =
            document.querySelector("#recipe-description");

        const time =
            document.querySelector("#recipe-time");

        const calories =
            document.querySelector("#recipe-calories");

        const protein =
            document.querySelector("#nutrition-protein");

        const carb =
            document.querySelector("#nutrition-carb");

        const fat =
            document.querySelector("#nutrition-fat");

        const ingredients =
            document.querySelector("#ingredients");

        const steps =
            document.querySelector("#steps");

        const theme =
            document.querySelector("#recipe-theme");

        const care =
            document.querySelector("#recipe-care");


        if (title)
            title.textContent = recipe.title;

        if (image) {

            image.src = recipe.image;

            image.alt = recipe.title;

        }

        if (tag)
            tag.textContent = recipe.tag;

        if (number)
            number.textContent = recipe.number;

        if (description)
            description.textContent = recipe.description;

        if (time)
            time.textContent = recipe.time;

        if (calories)
            calories.textContent = recipe.calories;

        if (protein)
            protein.textContent = recipe.protein;

        if (carb)
            carb.textContent = recipe.carb;

        if (fat)
            fat.textContent = recipe.fat;

        if (theme)
            theme.textContent = recipe.theme;

        if (care)
            care.textContent = recipe.care;


        /* INGREDIENTES */

        if (ingredients) {

            ingredients.innerHTML =
                recipe.ingredients
                    .map(item => `<li>${item}</li>`)
                    .join("");

        }


        /* PREPARO */

        if (steps) {

            steps.innerHTML =
                recipe.steps
                    .map(item => `<li>${item}</li>`)
                    .join("");

        }


        /* =================================================
           QR CODE
        ================================================= */

        const qr =
            document.querySelector("#recipe-qr");

        if (qr) {

            const currentUrl =
                window.location.href;

            qr.src =
                "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data="
                + encodeURIComponent(currentUrl);

        }


        document.title =
            `${recipe.title} | Núcleo`;

    }

});
