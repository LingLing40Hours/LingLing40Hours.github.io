//project array
const projects = [
  {
    title: 'GMTK2024 Game Jam Submission',
    image: '/assets/img/gmtk2024_cover.png',
    description: 'A pixel art fish simulator...',
    accomplishments: [
      'Players can move fluidly using LMB + drag.',
      'Raise awareness on the severity of plastic pollution.'
    ],
    onlineLink: 'https://waibibabow.itch.io/the-ultimate-fishs-guide-to-catching-fish-2024-edition',
    githubLink: 'https://github.com/Parm345/gmtk2024'
  },
  {
    title: 'GMTK2023 Game Jam Submission',
    image: '/assets/img/gmtk2023_cover.png',
    description: 'A not so generic gun shooter.',
    onlineLink: 'https://battlemonk345.itch.io/generic-gun-shooter',
    githubLink: 'https://github.com/LingLing40Hours/gmtk2023'
  },
  {
    title: 'GMTK2022 Game Jam Submission',
    image: '/assets/img/gmtk2022_cover.png',
    description: 'A 2D puzzle platformer.',
    onlineLink: 'https://battlemonk345.itch.io/slide-of-dice',
    githubLink: 'https://github.com/Parm345/GMTK-2022'
  }
];

function generateProjectHTML(project) {
  return `
    <div class="col s12">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img alt="${project.title}" src="${project.image}" style="height: auto; width: 100%" class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
          <p>${project.description}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
          <ul>${project.accomplishments?.map(acc => `<li>${acc}</li>`).join('') || ''}</ul>
          <div class="card-action">
            <a href="${project.onlineLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-external-link"></i></a>
            <a href="${project.githubLink}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;
}
  
function loadProject() {
  const projectContainer = document.getElementById('recent-projects');
  const projectHTML = generateProjectHTML(projects[loadedProjects]);
  projectContainer.innerHTML += projectHTML;
  loadedProjects++;

  //hide load button when all projects are loaded
  if (loadedProjects >= projects.length) {
    document.getElementById('load-more').style.display = 'none';
  }
}

//main
let loadedProjects = 0;
document.getElementById('load-more').addEventListener('click', loadProject);
loadProject(); //initialize page with one project showing
  