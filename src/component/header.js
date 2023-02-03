class HeaderComponent {
    constructor(headerItems) {
        this.headerItems = headerItems;
        this.isMounted = false;
    }
    render() {
        
        const navBar = document.createElement("nav");
        const { title, href } = this.headerItems;
        const uList = document.createElement("ul");

        navBar.classList.add("navBar");
        uList.classList.add("uList");
        this.headerItems.forEach(() => {
            const liList = document.createElement('li');
            liList.textContent = title;
            liList.href = href;
            uList.appendChild(liList);
        });

        navBar.appendChild(uList);

        return navBar;
    }
    mount(el) {
        if (this.isMounted) return;
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

export { HeaderComponent };



















        // const home=document.createElement("a");
        // const about=document.createElement("a");
        // const education=document.createElement("a");
        // const contact=document.createElement("a");
        // var navItems = ['HOME', 'ABOUT', 'EDUCATION', 'CONTACT'];

        // uList.classList.add("uList");
        // home.id="home";
        // about.id="about";
        // education.id="education";
        // contact.id="contact";

        // home.innerText="HOME";
        // about.innerText="ABOUT";
        // education.innerText="EDUCATION";
        // contact.innerText="CONTACT";