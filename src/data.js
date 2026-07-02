export const projectsData = [
  {
    id: 0,
    category: 'frontend',
    image: {
      url: 'images/Screenshot_frontend_mentor_qr_component.jpg',
      alt: 'Screenshot of a QR Code component linking to the Frontend Mentor website',
    },
    title: 'Frontend Mentor Challenge: QR Code Component',
    description:
      "My solution to Frontend Mentor's QR code component challenge. During this challenge, I realized the QR code was unusable for screen reader users, so I added a visually hidden component with a link and text to the same destination to make it accessible.",
    technologies: 'HTML and CSS',
    link: {
      url: 'https://github.com/adriarodr/qr-code-component',
      text: 'GitHub Repo',
    },
  },
  {
    id: 1,
    category: 'frontend',
    image: {
      url: 'images/Screenshot_sprout_grow.jpg',
      alt: 'Screenshot of Sprout and Grow webpage',
    },
    title: 'Sprout & Grow',
    description:
      'A multi-page website designed and built from a client brief for my web development certificate. I designed the layout and built it with HTML and CSS. The website features a products page with interactive filtering made entirely with CSS.',
    technologies: 'HTML and CSS',
    link: {
      url: 'https://wcet.waketech.edu/arodriguez28/WEB140/sprout-and-grow/index.html',
      text: 'Sprout & Grow webpage',
    },
  },
  {
    id: 2,
    category: 'frontend',
    image: {
      url: 'images/Screenshot_product_card.jpg',
      alt: 'Screenshot of product preview card for Chanel Perfume',
    },
    title: 'Frontend Mentor Challenge: Product Preview Card',
    description:
      "My solution to Frontend Mentor's product preview card component challenge. I learned to use the HTML picture element to display product images at different resolutions for mobile and desktop views.",
    technologies: 'HTML and CSS',
    link: {
      url: 'https://github.com/adriarodr/preview-card',
      text: 'GitHub Repo',
    },
  },
  {
    id: 3,
    category: 'frontend',
    image: {
      url: 'images/Screenshot_recipe_page.jpg',
      alt: 'Screenshot of Omelette recipe webpage',
    },
    title: 'Frontend Mentor Challenge: Recipe Page',
    description:
      "My solution to Frontend Mentor's recipe page challenge. This project reinforced what I learned in my web development classes by applying heading hierarchy, accessibility, and HTML and CSS validation with the W3C validator.",
    technologies: 'HTML and CSS',
    link: {
      url: 'https://github.com/adriarodr/recipe-page',
      text: 'GitHub Repo',
    },
  },
];

export const experienceData = [
  {
    id: 0,
    type: 'Class Project',
    title: 'Sprout & Grow Website',
    years: '2024',
    duties: [
      'Designed a multi-page website using Figma that incorporates client needs as described in a design brief',
      'Translated the Figma designs into a website using HTML and CSS',
    ],
  },
  {
    id: 1,
    type: 'Personal Learning',
    title: 'Frontend Mentor Challenges',
    years: '2024 - Present',
    duties: [
      'Assessed frontend designs and translated the designs into responsive webpages',
      'Explored and experimented with JavaScript libraries and frameworks to implement the designs, such as React',
    ],
  },
  {
    id: 2,
    type: 'Technology Responsibilities',
    title: 'Astrophysics Research at NC State University',
    years: '2026 - Present',
    duties: [
      'Collaborate with a mentor and lab partner to implement a Python program to compile and prepare data from thousands of simulation for machine learning',
    ],
  },
  {
    id: 3,
    type: 'Volunteer Work',
    title: 'Full-stack Developer',
    years: '2026 - Present',
    duties: [
      'Work with a lab manager to identify their specific needs for developing a web application',
      'Design and implement an inventory web application using Next.js, focusing on security, ease of use, database integration, and role management',
    ],
  },
];
