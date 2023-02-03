/* <section id="home">
        <div class="main">
            <h1 class="headings">Hi, I am</h1>
            <h1 class="headings1">Harshitha D</h1> <br>
            <h3>Associate Software Engineering Intern at Contentstack</h3><br>
            

            <button class="btn" target="_blank" href="https://drive.google.com/open?id=1MOjaP1eaGpZwpayyMsBvc4g89SW85G3V">
                Resume
            </button>
        </div>
    </section> */

// {
//     "wish": "Hi, I'm",
//     "name": "Harshitha D",
//     "role": "Associate Software Engineering Intern at Contentstack",
//     "button": [
//         {
//             "title": "Resume",
//             "href": "https://drive.google.com/open?id=1MOjaP1eaGpZwpayyMsBvc4g89SW85G3V"
//         }
//     ]
// }

class HomeComponent {
    constructor(homeItems) {
        this.homeItems = homeItems;
        this.isMounted = false;
    }
    render() {

        const { wish, name, role, button } = this.homeItems;


        const home = document.createElement("section");
        const homeMain = document.createElement("div");
        const headings = document.createElement("h1");
        const headings1 = document.createElement("h1");
        const headings3 = document.createElement("h3");
        const resumeBtn = document.createElement("button");

        home.classList.add("home");
        home.id="home";
        homeMain.classList.add("main");
        headings.classList.add("headings");
        headings1.classList.add("headings1");
        resumeBtn.classList.add("btn");

        headings.innerText = wish;
        headings1.innerText = name;
        headings3.innerText = role;
        resumeBtn.innerText=button[0];
        resumeBtn.href=button[1];
        resumeBtn.target="_blank";

        home.appendChild(homeMain);
        homeMain.appendChild(headings);
        homeMain.appendChild(headings1);
        homeMain.appendChild(headings3);
        homeMain.appendChild(resumeBtn);

        return home;

    }

    mount(el) {
        if (this.isMounted) return
        if (el) {
            el.appendChild(this.render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.render());
        this.isMounted = true;
        return;
    }
}

export { HomeComponent };