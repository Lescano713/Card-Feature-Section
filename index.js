const main = document.getElementById("features-section");


const features = [
    {
        name: "Supervisor",
        paragraph: "Monitors activity to identify project roadblocks"
    },
    {
        name: "Team Builder",
        paragraph: "Scans our talent network to create the optimal team for your project"
    },
    {
        name: "Karma",
        paragraph: "Regularly evaluates our talent to ensure quality"
    },
    {
        name: "Calculator",
        paragraph: "ses data from past projects to provide better delivery estimates"
    }
]

createCards();

function createCards (){
    main.innerHTML = "";
    features.forEach(feature =>{
        let section = document.createElement('div');
        section.classList.add('feature-container');
        let h2 = document.createElement('h2');
        h2.innerHTML = feature.name ;
        let p = document.createElement('p');
        p.innerHTML = `${feature.paragraph}` ;
        section.appendChild(h2);
        section.appendChild(p);
        main.appendChild(section);
    }
    )
}
