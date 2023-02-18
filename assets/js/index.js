const theme = document.getElementById("theme");
const themeIcon = theme.querySelector("i");
const root = document.querySelector(":root");

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "white";

changeTheme(defaultTheme);

function changeThemeIcon(theme) {
    if(theme === "dark") {
        themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
    } else {
        themeIcon.classList.replace("ri-sun-line", "ri-moon-line");
    }
}

function changeTheme(themeName) {

    const properties = {
        dark: {
            "--bg": "#1b1b1b",
            "--default-color-active": "#fff",
            "--default-color": "#959595",
            "--stroke": "rgba(151, 151, 151, 0.87)",
            "--default-shadow": "rgb(0, 0, 0)",
            "--default-card": "#202020"
        },
        white: {
            "--bg": "#f0f8ff",
            "--default-color-active": "#000000",
            "--default-color": "#3b3b3b",
            "--stroke": "rgba(151, 151, 151, 0.87)",
            "--default-shadow": "rgb(41, 41, 41)",
            "--default-card": "#fff"
        }
    }

    const theme = themeName==="dark" ? "dark" : "white";

    for(const property in properties[theme]) {
        const value = properties[theme][property];

        root.style.setProperty(property, value);
    }

    changeThemeIcon(theme);
}

theme.addEventListener("click", (e) => {
    e.preventDefault()

    document.body.classList.toggle("dark");

    changeTheme(String(document.body.classList[0]));
})
