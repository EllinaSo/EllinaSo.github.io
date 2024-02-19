import Ceramico from '../img/Ceramico.jpg';
import Dent from '../img/Dent.jpg';
import Mishka from '../img/Mishka.jpg';
import SurfClub from '../img/SurfClub.jpg';
import Infomatika from '../img/Infomatika.jpg';

const getInnerPortfolioLink = (project) => `${process.env.PUBLIC_URL}/portfolio/${project}/`;

export const LIST_2020 = [
  {
    title: 'mishka',
    description:
      'The project was completed as part of the HTML Academy course. Contains main page, collection page and order form. All scripts including form validation and a slider made in pure JS. Utilizing SVG sprites and the Yandex.Maps API.',
    img: Mishka,
    demo: getInnerPortfolioLink('mishka'),
    src: 'https://github.com/EllinaSo/EllinaSo.github.io/tree/main/public/portfolio/mishka',
  },
  {
    title: 'dent',
    description:
      'The project is the main page for a local dental clinic. It was commissioned by the layout designer to be used in a presentation. Made with Bootstrap, jQuery and Swiper slider.',
    img: Dent,
    demo: getInnerPortfolioLink('dent'),
    src: 'https://github.com/EllinaSo/EllinaSo.github.io/tree/main/public/portfolio/dent',
  },
  {
    title: 'surfclub',
    description: 'Landing page for small business with navigation made with jQuery and sliders based on Owl Carousel.',
    img: SurfClub,
    demo: getInnerPortfolioLink('surfclub'),
    src: 'https://github.com/EllinaSo/EllinaSo.github.io/tree/main/public/portfolio/surfclub',
  },
  {
    title: 'ceramico',
    description: 'Landing page for small business with navigation and products loading made with jQuery.',
    img: Ceramico,
    demo: getInnerPortfolioLink('ceramico'),
    src: 'https://github.com/EllinaSo/EllinaSo.github.io/tree/main/public/portfolio/ceramico',
  },
  {
    title: 'infomatika',
    description:
      'Test assignment using pure JavaScript for the company Infomatika. The main task is to create hexagons that animate and update content on scroll or click.',
    img: Infomatika,
    src: 'https://github.com/EllinaSo/match-schedule',
    demo: 'https://ellinaso.github.io/match-schedule/',
  },
];
