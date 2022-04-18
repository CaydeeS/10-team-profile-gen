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

                return html.join('');
            }

            module.exports = team => {

                return `
                <!DOCTYPE html>
              <html lang="en">
              <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <link rel="stylesheet" href="..dist/style.css" />
                    <title>Team Profile Generator</title>
              </head>     
              <body>
                <header>
                <h1> The Team </h1>
                </header>
                
                <main> ${generateTeam(team)} </main>

               </body> 
               </html> 
                    `;
            }