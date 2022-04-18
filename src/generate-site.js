const generateTeam = (team) => {
    console.log(team);
    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class ="card-header">
            ${manager.name} <br/>
            <i class="fas fa-mug-hot"></i>Manager</div>
            <ul class="list-grou list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
           </div> 
            `;
            html.push(managerHtml);
        }
        const generateEngineer = engineer => {
            console.log(engineer);
            let engineerHtml = `
            <div class="card" style="width: 18rem;">
                <div class ="card-header">
                ${engineer.name} <br/>
                <i class="fas fa-mug-hot"></i>Engineer</div>
                <ul class="list-grou list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.githubName}">${engineer.githubName}</a></li>
                </ul>
               </div> 
                `;
                html.push(engineerHtml);
            }
            const generateIntern = intern => {
                console.log(intern);
                let internHtml = `
                <div class="card" style="width: 18rem;">
                    <div class ="card-header">
                    ${intern.name} <br/>
                    <i class="fas fa-mug-hot"></i>Intern</div>
                    <ul class="list-grou list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                   </div> 
                    `;
                    html.push(internHtml);
                }

                for (let i = 0; i < team.length; i++) {
                    if (team[i].getRole() === "Manager") {
                        generateManager(team[i]);
                    }
                    if (team[i].getRole() === "Engineer") {
                        generateEngineer(team[i]);
                    }
                    if (team[i].getRole() === "Intern") {
                        generateIntern(team[i]);
                    }    
                }
                

}