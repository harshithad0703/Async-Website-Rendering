class header{
    render(){
        const navBar=document.createElement("nav");
        const uList=document.createElement("ul");
        const home=document.createElement("a");
        const about=document.createElement("a");
        const education=document.createElement("a");
        const contact=document.createElement("a");

        navBar.classList.add("navBar");
        uList.classList.add("uList");
        home.id="home";
        about.id="about";
        education.id="education";
        contact.id="contact";
        
        home.innerText="HOME";
        about.innerText="ABOUT";
        education.innerText="EDUCATION";
        contact.innerText="CONTACT";

        home.addEventListener('click',()=>{
            home();
        })
    }
}