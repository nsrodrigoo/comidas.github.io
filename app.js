/* =========================================================
   NÚCLEO
   APP.JS
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================================
           MENU MOBILE
        ===================================================== */

        const menuButton =
            document.querySelector(
                ".menu-toggle"
            );


        const navigation =
            document.querySelector(
                ".nav"
            );


        if (
            menuButton &&
            navigation
        ) {

            menuButton.addEventListener(
                "click",
                () => {

                    const isOpen =
                        navigation.classList.toggle(
                            "open"
                        );


                    menuButton.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );


                    menuButton.textContent =
                        isOpen
                            ? "×"
                            : "☰";

                }
            );

        }



        /* =====================================================
           CARDÁPIO
        ===================================================== */

        const search =
            document.querySelector(
                "#search"
            );


        const cards =
            [
                ...document.querySelectorAll(
                    ".menu-card"
                )
            ];


        const filters =
            [
                ...document.querySelectorAll(
                    ".chip"
                )
            ];


        const emptyMessage =
            document.querySelector(
                "#empty-state"
            );


        let currentFilter =
            "todos";



        /* =====================================================
           RENDERIZA FILTROS
        ===================================================== */

        function renderMenu() {

            const searchText =
                (
                    search?.value || ""
                )
                    .toLowerCase()
                    .trim();


            let visibleCards = 0;


            cards.forEach(
                card => {

                    const category =
                        card.dataset.category;


                    const name =
                        card.dataset.name;


                    const categoryMatch =
                        currentFilter === "todos" ||
                        category === currentFilter;


                    const searchMatch =
                        searchText === "" ||
                        name.includes(
                            searchText
                        );


                    const shouldShow =
                        categoryMatch &&
                        searchMatch;


                    if (shouldShow) {

                        card.style.display =
                            "";

                        visibleCards++;

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            if (emptyMessage) {

                emptyMessage.classList.toggle(
                    "show",
                    visibleCards === 0
                );

            }

        }



        /* =====================================================
           CLIQUE NOS FILTROS
        ===================================================== */

        filters.forEach(
            filter => {

                filter.addEventListener(
                    "click",
                    () => {

                        filters.forEach(
                            item => {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        filter.classList.add(
                            "active"
                        );


                        currentFilter =
                            filter.dataset.filter;


                        renderMenu();

                    }
                );

            }
        );



        /* =====================================================
           PESQUISA
        ===================================================== */

        if (search) {

            search.addEventListener(
                "input",
                renderMenu
            );

        }



        /* =====================================================
           DADOS DAS RECEITAS
        ===================================================== */

        const recipes = {


            sushi: {

                title:
                    "Sushi",

                tag:
                    "PROTEÍNA",

                number:
                    "01",

                time:
                    "25 min",

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

                title:
                    "Massa",

                tag:
                    "CARBOIDRATO",

                number:
                    "02",

                time:
                    "20 min",

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

                title:
                    "Abacate",

                tag:
                    "GORDURAS",

                number:
                    "03",

                time:
                    "10 min",

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

                title:
                    "Ovo",

                tag:
                    "PROTEÍNA",

                number:
                    "04",

                time:
                    "12 min",

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



        /* =====================================================
           RECEITA SELECIONADA
        ===================================================== */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );


        const recipeName =
            urlParams.get(
                "prato"
            ) || "sushi";


        const selectedRecipe =
            recipes[
                recipeName
            ];


        const recipeTitle =
            document.querySelector(
                "#recipe-title"
            );



        /* =====================================================
           PREENCHE A PÁGINA
        ===================================================== */

        if (
            recipeTitle &&
            selectedRecipe
        ) {


            document.title =
                `${selectedRecipe.title} — Núcleo`;


            const image =
                document.querySelector(
                    "#recipe-image"
                );


            if (image) {

                image.src =
                    selectedRecipe.image;

                image.alt =
                    selectedRecipe.title;

            }


            const tag =
                document.querySelector(
                    "#recipe-tag"
                );


            if (tag) {

                tag.textContent =
                    selectedRecipe.tag;

            }


            const number =
                document.querySelector(
                    "#recipe-number"
                );


            if (number) {

                number.textContent =
                    selectedRecipe.number;

            }


            recipeTitle.textContent =
                selectedRecipe.title;


            const description =
                document.querySelector(
                    "#recipe-description"
                );


            if (description) {

                description.textContent =
                    selectedRecipe.description;

            }


            const time =
                document.querySelector(
                    "#recipe-time"
                );


            if (time) {

                time.textContent =
                    selectedRecipe.time;

            }



            /* =============================
               INGREDIENTES
            ============================= */

            const ingredients =
                document.querySelector(
                    "#ingredients"
                );


            if (ingredients) {

                ingredients.innerHTML =
                    selectedRecipe.ingredients
                        .map(
                            ingredient =>
                                `<li>${ingredient}</li>`
                        )
                        .join("");

            }



            /* =============================
               PASSOS
            ============================= */

            const steps =
                document.querySelector(
                    "#steps"
                );


            if (steps) {

                steps.innerHTML =
                    selectedRecipe.steps
                        .map(
                            step =>
                                `<li>${step}</li>`
                        )
                        .join("");

            }

        }

    }
);
