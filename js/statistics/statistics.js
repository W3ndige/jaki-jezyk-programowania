import Chart from 'chart.js';
import statistics2018 from './statistics2018-data';
import statistics2019 from './statistics2019-data';
import statistics2020 from './statistics2020-data';
import statistics2021 from './statistics2021-data';

require('../../css/statistics.css');

const defaultColors = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];

const year = parseInt(document.getElementById('statistics').getAttribute('data-year'));

const yearToStats = {
  2018: statistics2018,
  2019: statistics2019,
  2020: statistics2020,
  2021: statistics2021,
};
const statistics = yearToStats[year];

const langProjects = document.getElementById('lang-projects');
const top10GithubProjectsCtx = document.getElementById('top10GithubProjects').getContext('2d');
const tiobeCurrentYearCtx = document.getElementById('tiobeCurrentYear').getContext('2d');
const tiobeLastYearCanvas = document.getElementById('tiobeLastYear');
const tiobeLastYearCtx = tiobeLastYearCanvas ? tiobeLastYearCanvas.getContext('2d') : null;
const stackQuestionsCtx = document.getElementById('stackQuestions').getContext('2d');
const meetupMeetupsLocalCtx = document.getElementById('meetupMeetupsLocal').getContext('2d');
const meetupMeetupsGlobalCtx = document.getElementById('meetupMeetupsGlobal').getContext('2d');
const meetupMembersLocalCtx = document.getElementById('meetupMembersLocal').getContext('2d');
const meetupMembersGlobalCtx = document.getElementById('meetupMembersGlobal').getContext('2d');
const githubMoreThen1000StarsCtx = document.getElementById('githubMoreThen1000Stars').getContext('2d');
const githubProjectsCtx = document.getElementById('githubProjects').getContext('2d');

createLineChart(tiobeCurrentYearCtx, 'Tiobe index - ranking', 'Pozycja', statistics.labels, statistics.tiobeCurrentYear, true);
createLineChart(tiobeLastYearCtx, 'Tiobe index - ranking - poprzedni rok', 'Pozycja', statistics.lastYearLabels, statistics.tiobeLastYear, true);
createLineChart(stackQuestionsCtx, 'Stack Overflow - liczba pytań', 'Liczba pytań', statistics.labels, statistics.stackQuestions);
createLineChart(meetupMeetupsLocalCtx, 'Meetup - ilość grup - Polska', 'Liczba grup', statistics.labels, statistics.meetupMeetupsLocal);
createLineChart(meetupMeetupsGlobalCtx, 'Meetup - ilość grup - cały świat', 'Liczba grup', statistics.labels, statistics.meetupMeetupsGlobal);
createLineChart(meetupMembersLocalCtx, 'Meetup - wielkość społeczności - Polska', 'Liczba członków', statistics.labels, statistics.meetupMembersLocal);
createLineChart(meetupMembersGlobalCtx, 'Meetup - wielkość społeczności - cały świat', 'Liczba członków', statistics.labels, statistics.meetupMembersGlobal);
createLineChart(githubProjectsCtx, 'Github - liczba projektów', 'Liczba projektów', statistics.labels, statistics.githubProjects);
createLineChart(githubMoreThen1000StarsCtx, 'Github - ilość projektów z liczbą gwiazdek większą niż 1000', 'Liczba projektów', statistics.labels, statistics.githubMoreThen1000Stars);

const lang = 'Java';
const ctx = document.getElementById('github-projects-for-lang').getContext('2d');

createLineChart(ctx, 'Github - top 10 projektów ' + lang, 'Liczba gwiazdek', statistics.labels, statistics.langToProjects[lang]);

let previousBtn = document.querySelector('.git-lang-switcher');


const activeBtnBgColor = '#4d4d4d';
previousBtn.style.background = activeBtnBgColor;

document.querySelectorAll('.git-lang-switcher').forEach((btn) => {
  btn.addEventListener('click', () => {
    previousBtn.style.background = '';
    btn.style.background = activeBtnBgColor;
    langProjects.innerHTML = '<canvas class="chart" id="github-projects-for-lang"></canvas>';
    const lang = btn.getAttribute('data-lang');
    const ctx = document.getElementById('github-projects-for-lang').getContext('2d');
    createLineChart(ctx, 'Github - top 10 projektów ' + lang, 'Liczba gwiazdek', statistics.labels, statistics.langToProjects[lang]);
    previousBtn = btn;
  });
});

createLineChart(top10GithubProjectsCtx, 'Github - porównanie najlepszych projektów z każdego języka', 'Liczba gwiazdek', statistics.labels, statistics.top10GithubProjects);

function createLineChart(ctx, title, yAxisLabel, labels, datasets, reverse = false) {
  if (ctx === null) {
    return;
  }
  const header = document.createElement('h2');
  header.innerText = title;

  ctx.canvas.parentElement.insertBefore(header, ctx.canvas);

  if (window.matchMedia('(max-width: 768px)').matches) ctx.canvas.height = 360;

  datasets.forEach((entry, i) => {
    const color = defaultColors[i];
    entry.borderColor = color;
    entry.backgroundColor = color;
    entry.fill = false;
  });

  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets,
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
          ticks: {
            reverse,
            min: reverse ? 1 : null,
            fontSize: 14,
          },
          scaleLabel: {
            display: true,
            labelString: yAxisLabel,
            fontSize: 16,
          },
        }],
      },
    },
  });
}

const demoDialog = $('#demo');

if (localStorage.getItem('stats-demo-closed') !== 'true') {
  demoDialog.modal('show');
} else {
  demoDialog.modal('hide');
}

demoDialog.on('hidden.bs.modal', () => {
  localStorage.setItem('stats-demo-closed', 'true');
});

const chartsContainer = document.querySelector('.charts-container');
window.addEventListener('resize', () => {
  chartsContainer.style.width = '100.1%';
  setTimeout(() => {
    chartsContainer.style.width = '100%';
  }, 1);
});
