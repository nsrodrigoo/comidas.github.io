document.addEventListener("DOMContentLoaded", () => {


    /* =================================
       MENU MOBILE
    ================================= */

    const toggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            const open =
                nav.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );

            toggle.textContent =
                open ? "×" : "☰";

        });

    }


    /* =================================
       BUSCA DO CARDÁPIO
    ================================= */

    const search =
        document.querySelector("#search");


    const cards =
        [
            ...document.querySelectorAll(
                ".menu-card"
            )
        ];


    const chips =
        [
            ...document.querySelectorAll(
                ".chip"
            )
        ];


    const empty =
        document.querySelector(
            "#empty-state"
        );


    let activeFilter = "todos";


    function renderMenu() {

        const term =
            (
                search?.value || ""
            )
                .toLowerCase()
                .trim();


        let visible = 0;


        cards.forEach(card => {

            const matchesFilter =
                activeFilter === "todos" ||
                card.dataset.category === activeFilter;


            const matchesSearch =
                !term ||
                card.dataset.name.includes(term);


            const show =
                matchesFilter &&
                matchesSearch;


            card.style.display =
                show ? "" : "none";


            if (show) {

                visible++;

            }

        });


        if (empty) {

            empty.classList.toggle(
                "show",
                visible === 0
            );

        }

    }


    chips.forEach(chip => {

        chip.addEventListener(
            "click",
            () => {

                chips.forEach(c => {

                    c.classList.remove(
                        "active"
                    );

                });


                chip.classList.add(
                    "active"
                );


                activeFilter =
                    chip.dataset.filter;


                renderMenu();

            }
        );

    });


    if (search) {

        search.addEventListener(
            "input",
            renderMenu
        );

    }


    /* =================================
       RECEITAS
    ================================= */

    const recipeData = {


        sushi: {

            title: "Sushi",

            tag: "PROTEÍNA",

            number: "01",

            time: "25 min",

            image:
                "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85",

            description:
                "Com muito sabor e um toque fresco, uma combinação que mostra como diferentes nutrientes podem dividir o mesmo prato.",

            ingredients: [

                "Arroz para sushi",

                "Peixe fresco",

                "Alga nori",

                "Gergelim",

                "Molho de soja"

            ],

            steps: [

                "Prepare o arroz até ficar macio e levemente pegajoso.",

                "Monte as folhas de nori e distribua o arroz em uma camada fina.",

                "Adicione o recheio, enrole com cuidado e corte em pedaços."

            ]

        },


        massa: {

            title: "Massa",

            tag: "CARBOIDRATO",

            number: "02",

            time: "20 min",

            image:
                "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85",

            description:
                "Uma receita simples para observar como carboidratos podem aparecer como fonte de energia em uma refeição.",

            ingredients: [

                "Massa de sua preferência",

                "Tomate",

                "Alho",

                "Azeite",

                "Manjericão"

            ],

            steps: [

                "Cozinhe a massa até ficar al dente.",

                "Refogue alho e tomate no azeite.",

                "Misture a massa ao molho e finalize com manjericão."

            ]

        },


        abacate: {

            title: "Abacate",

            tag: "GORDURAS",

            number: "03",

            time: "10 min",

            image:
                "https://images.unsplash.com/photo-1603046891744-76e6300f3a15?auto=format&fit=crop&w=1000&q=85",

            description:
                "Cremoso, versátil e cheio de possibilidades: um jeito simples de falar sobre gorduras na alimentação.",

            ingredients: [

                "1 abacate maduro",

                "Limão",

                "Sal",

                "Gergelim",

                "Pimenta"

            ],

            steps: [

                "Amasse o abacate com um garfo.",

                "Tempere com limão, sal e pimenta.",

                "Finalize com gergelim e sirva imediatamente."

            ]

        },


        ovo: {

            title: "Ovo",

            tag: "PROTEÍNA",

            number: "04",

            time: "12 min",

            image:
                "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",

            description:
                "Um alimento cotidiano que ajuda a conectar proteína, gordura e micronutrientes em uma única refeição.",

            ingredients: [

                "2 ovos",

                "Pão integral",

                "Tomate",

                "Folhas verdes",

                "Azeite"

            ],

            steps: [

                "Cozinhe ou mexa os ovos até o ponto desejado.",

                "Toste o pão e monte a base.",

                "Acrescente os ovos, folhas e tomate."

            ]

        }

    };


    /* =================================
       CARREGA RECEITA
    ================================= */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const selected =
        recipeData[
            params.get("prato") || "sushi"
        ];


    const recipeTitle =
        document.querySelector(
            "#recipe-title"
        );


    if (recipeTitle && selected) {


        document.title =
            `${selected.title} — Núcleo`;


        document.querySelector(
            "#recipe-image"
        ).src =
            selected.image;


        document.querySelector(
            "#recipe-image"
        ).alt =
            selected.title;


        document.querySelector(
            "#recipe-tag"
        ).textContent =
            selected.tag;


        document.querySelector(
            "#recipe-number"
        ).textContent =
            selected.number;


        document.querySelector(
            "#recipe-title"
        ).textContent =
            selected.title;


        document.querySelector(
            "#recipe-description"
        ).textContent =
            selected.description;


        document.querySelector(
            "#recipe-time"
        ).textContent =
            selected.time;


        const ingredients =
            document.querySelector(
                "#ingredients"
            );


        ingredients.innerHTML =
            selected.ingredients
                .map(item =>
                    `<li>${item}</li>`
                )
                .join("");


        const steps =
            document.querySelector(
                "#steps"
            );


        steps.innerHTML =
            selected.steps
                .map(item =>
                    `<li>${item}</li>`
                )
                .join("");

    }

});
