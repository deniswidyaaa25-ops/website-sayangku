/* =========================
   PASSWORD
========================= */

const PASSWORD = "1234";


function checkPassword() {

    const input =
        document.getElementById("password");

    const error =
        document.getElementById("error");

    const lockScreen =
        document.getElementById("lockScreen");

    const website =
        document.getElementById("website");


    if (input.value === PASSWORD) {

        lockScreen.style.display = "none";

        website.classList.remove("hidden");

        createParticles();

        startReveal();

        window.scrollTo(0, 0);

    }

    else {

        error.innerText =
            "Password salah ❤️ Coba lagi.";

        input.value = "";

    }

}


/* =========================
   ENTER PASSWORD
========================= */

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );



/* =========================
   PINDAH SECTION
========================= */

function goTo(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================
   PARTIKEL
========================= */

function createParticles() {

    const container =
        document.getElementById("particles");


    const symbols = [

        "🌸",
        "🌷",
        "♡",
        "♥",
        "✦",
        "•"

    ];


    setInterval(function() {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.innerText =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.fontSize =
            (10 +
            Math.random() * 18)
            + "px";


        particle.style.animationDuration =
            (6 +
            Math.random() * 8)
            + "s";


        container.appendChild(
            particle
        );


        setTimeout(
            function() {

                particle.remove();

            },
            15000
        );


    }, 500);

}



/* =========================
   ANIMASI SCROLL
========================= */

function startReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("show");

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        function(element) {

            observer.observe(
                element
            );

        }
    );

}



/* =========================
   MUSIK
========================= */

const music =
    document.getElementById(
        "music"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


function toggleMusic() {

    if (!musicPlaying) {

        music.play()
            .then(function() {

                musicPlaying = true;

                musicButton.innerText =
                    "❚❚";

            })
            .catch(function() {

                alert(
                    "Masukkan lagu.mp3 ke folder music."
                );

            });

    }

    else {

        music.pause();

        musicPlaying = false;

        musicButton.innerText =
            "♫";

    }

}



/* =========================
   PELUK VIRTUAL
========================= */

function makeHearts() {

    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💞",
        "🌸"

    ];


    for (
        let i = 0;
        i < 40;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerText =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            "50%";


        heart.style.top =
            "60%";


        heart.style.zIndex =
            "999";


        heart.style.pointerEvents =
            "none";


        heart.style.fontSize =
            (18 +
            Math.random() * 25)
            + "px";


        document.body.appendChild(
            heart
        );


        const x =
            (Math.random() - .5)
            * 700;


        const y =
            -200 -
            Math.random() * 500;


        heart.animate(

            [

                {

                    transform:
                        "translate(-50%,0)"
                        + " scale(.5)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            ${y}px
                        )
                        scale(1.3)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1800 +
                    Math.random() * 1500,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            function() {

                heart.remove();

            },
            3500
        );

    }

}