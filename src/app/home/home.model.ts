// home.model.ts

export interface IFilmVM {
  id: number;         // Change id to number
  name: string;
  description: string;
  icon: string;       // New icon property for FontAwesome icon codes
}

export const films: IFilmVM[] = [
  { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', icon: 'fas fa-book' },
  { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', icon: 'fas fa-code' },
  { id: 3, name: 'React for Beginners', description: 'Introduction to React and its core concepts.', icon: 'fab fa-react' },
  { id: 4, name: 'Vue.js Essentials', description: 'Learn the essentials of Vue.js.', icon: 'fab fa-vuejs' },
  { id: 5, name: 'Svelte Crash film', description: 'Get started with Svelte in this crash film.', icon: 'fas fa-fire' },
  { id: 6, name: 'Node.js Fundamentals', description: 'Learn the fundamentals of Node.js and server-side programming.', icon: 'fab fa-node' },
  { id: 7, name: 'Express.js In-Depth', description: 'Build robust backend applications using Express.js.', icon: 'fas fa-server' },
  { id: 8, name: 'MongoDB for Developers', description: 'Master MongoDB, the popular NoSQL database.', icon: 'fas fa-database' },
  { id: 9, name: 'Full-Stack Web Development', description: 'Learn to build full-stack web applications.', icon: 'fas fa-laptop-code' },
  { id: 10, name: 'TypeScript Mastery', description: 'Become proficient in TypeScript, the typed superset of JavaScript.', icon: 'fas fa-code-branch' },
  { id: 11, name: 'GraphQL Basics', description: 'Learn the basics of GraphQL, a query language for APIs.', icon: 'fas fa-project-diagram' },
  { id: 12, name: 'RxJS in Angular', description: 'Master reactive programming in Angular using RxJS.', icon: 'fas fa-sync-alt' },
  { id: 13, name: 'Redux for State Management', description: 'Manage state efficiently in your applications using Redux.', icon: 'fas fa-sync' },
  { id: 14, name: 'Web Performance Optimization', description: 'Learn techniques to optimize web performance.', icon: 'fas fa-tachometer-alt' },
  { id: 15, name: 'Progressive Web Apps', description: 'Build web apps that work offline and load quickly.', icon: 'fas fa-mobile-alt' },
  { id: 16, name: 'CSS Grid and Flexbox', description: 'Master modern CSS layout techniques with Grid and Flexbox.', icon: 'fas fa-th-large' },
  { id: 17, name: 'JavaScript ES6+', description: 'Get up to speed with modern JavaScript features.', icon: 'fas fa-js-square' },
  { id: 18, name: 'Testing Angular Applications', description: 'Learn to write tests for your Angular applications using Jasmine and Karma.', icon: 'fas fa-vial' },
  { id: 19, name: 'Docker for Developers', description: 'Learn to containerize your applications with Docker.', icon: 'fab fa-docker' },
  { id: 20, name: 'CI/CD with Jenkins', description: 'Implement continuous integration and delivery pipelines with Jenkins.', icon: 'fas fa-tools' },
];
