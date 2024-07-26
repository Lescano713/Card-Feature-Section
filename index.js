const main = document.getElementById("features-section");


const features = [
    {
        name: "Supervisor",
        color: "hsl(180, 62%, 55%)",
        paragraph: "Monitors activity to identify project roadblocks",
        img: './images/icon-supervisor.svg'
    },
    {
        name: "Team Builder",
        color: "hsl(0, 78%, 62%)",
        paragraph: "Scans our talent network to create the optimal team for your project",
        img: './images/icon-team-builder.svg'
    },
    {
        name: "Karma",
        color: "hsl(34, 97%, 64%)",
        paragraph: "Regularly evaluates our talent to ensure quality",
        img: './images/icon-Karma.svg'
    },
    {
        name: "Calculator",
        color: "hsl(212, 86%, 64%)",
        paragraph: "ses data from past projects to provide better delivery estimates",
        img: './images/icon-calculator.svg'
    }
]

createCards();

function createCards (){
    main.innerHTML = "";
    features.forEach(feature =>{
        let section = document.createElement('section');
        section.classList.add('feature-container');
        section.style.borderTop = ` 6px solid ${feature.color}` 
        let h2 = document.createElement('h2');
        h2.innerHTML = feature.name ;
        let p = document.createElement('p');
        p.innerHTML = feature.paragraph ;
        let img = document.createElement('img');
        img.src = feature.img;
        img.alt = `${feature.name}-image`
        section.appendChild(h2);
        section.appendChild(p);
        section.appendChild(img)
        main.appendChild(section);
    }
    )
}
