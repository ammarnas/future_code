export interface Ifilm {
    id: number;
    title: string;
    description: string;
    lessonsCount: number;
    category: CategoryType;
    longDescription: string;
    imageUrl: string;
}
export enum CategoryType {
    beginners = 1,
    intermediate = 2,
    advanced = 3,
    other
}

export const films: Ifilm[] = [
  {
    id: 1,
    title: 'Angular Basics',
    description: 'Learn the basics of Angular.',
    lessonsCount: 10,
    category: CategoryType.beginners,
    longDescription: 'This film covers the fundamental concepts of Angular, including components, services, and modules.',
    imageUrl: 'path/to/angular-basics-image.jpg'
  },
  {
    id: 2,
    title: 'Advanced Angular',
    description: 'Deep dive into Angular features.',
    lessonsCount: 12,
    category: CategoryType.beginners,
    longDescription: 'Explore advanced Angular topics such as lazy loading, advanced routing techniques, and state management.',
    imageUrl: 'path/to/advanced-angular-image.jpg'
  },
  {
    id: 3,
    title: 'React for Beginners',
    description: 'Introduction to React and its core concepts.',
    lessonsCount: 8,
    category: CategoryType.beginners,
    longDescription: 'Get started with React by learning about components, state management, and hooks.',
    imageUrl: 'path/to/react-beginners-image.jpg'
  },
  {
    id: 4,
    title: 'Vue.js Essentials',
    description: 'Learn the essentials of Vue.js.',
    lessonsCount: 9,
    category: CategoryType.beginners,
    longDescription: 'Understand the core concepts of Vue.js, including directives, components, and Vuex for state management.',
    imageUrl: 'path/to/vue-essentials-image.jpg'
  },
  {
    id: 5,
    title: 'Svelte Crash film',
    description: 'Get started with Svelte in this crash film.',
    lessonsCount: 7,
    category: CategoryType.beginners,
    longDescription: 'Dive into Svelte, a modern JavaScript framework, and learn about its unique approach to building user interfaces.',
    imageUrl: 'path/to/svelte-crash-film-image.jpg'
  },
  {
    id: 6,
    title: 'Node.js Fundamentals',
    description: 'Learn the fundamentals of Node.js and server-side programming.',
    lessonsCount: 11,
    category: CategoryType.advanced,
    longDescription: 'Master the basics of Node.js, including its event-driven architecture, modules, and NPM package management.',
    imageUrl: 'path/to/nodejs-fundamentals-image.jpg'
  },
  {
    id: 7,
    title: 'Express.js In-Depth',
    description: 'Build robust backend applications using Express.js.',
    lessonsCount: 10,
    category: CategoryType.advanced,
    longDescription: 'Learn to build scalable and efficient backend applications with Express.js, including routing and middleware.',
    imageUrl: 'path/to/expressjs-in-depth-image.jpg'
  },
  {
    id: 8,
    title: 'MongoDB for Developers',
    description: 'Master MongoDB, the popular NoSQL database.',
    lessonsCount: 8,
    category: CategoryType.other,
    longDescription: 'Understand MongoDB, including its document-based data model, querying, and indexing.',
    imageUrl: 'path/to/mongodb-for-developers-image.jpg'
  },
  {
    id: 9,
    title: 'Full-Stack Web Development',
    description: 'Learn to build full-stack web applications.',
    lessonsCount: 15,
    category: CategoryType.intermediate,
    longDescription: 'Get a comprehensive understanding of full-stack development by learning both frontend and backend technologies.',
    imageUrl: 'path/to/fullstack-web-development-image.jpg'
  },
  {
    id: 10,
    title: 'TypeScript Mastery',
    description: 'Become proficient in TypeScript, the typed superset of JavaScript.',
    lessonsCount: 9,
    category: CategoryType.beginners,
    longDescription: 'Enhance your JavaScript skills with TypeScript, learning about type annotations, interfaces, and advanced types.',
    imageUrl: 'path/to/typescript-mastery-image.jpg'
  },
  {
    id: 11,
    title: 'GraphQL Basics',
    description: 'Learn the basics of GraphQL, a query language for APIs.',
    lessonsCount: 7,
    category: CategoryType.advanced,
    longDescription: 'Understand the basics of GraphQL, including queries, mutations, and schema design.',
    imageUrl: 'path/to/graphql-basics-image.jpg'
  },
  {
    id: 12,
    title: 'RxJS in Angular',
    description: 'Master reactive programming in Angular using RxJS.',
    lessonsCount: 11,
    category: CategoryType.beginners,
    longDescription: 'Learn how to use RxJS for reactive programming in Angular applications, including observables and operators.',
    imageUrl: 'path/to/rxjs-in-angular-image.jpg'
  },
  {
    id: 13,
    title: 'Redux for State Management',
    description: 'Manage state efficiently in your applications using Redux.',
    lessonsCount: 10,
    category: CategoryType.beginners,
    longDescription: 'Get to know Redux for managing application state, including actions, reducers, and middleware.',
    imageUrl: 'path/to/redux-for-state-management-image.jpg'
  },
  {
    id: 14,
    title: 'Web Performance Optimization',
    description: 'Learn techniques to optimize web performance.',
    lessonsCount: 8,
    category: CategoryType.intermediate,
    longDescription: 'Discover strategies to improve web performance, including lazy loading, caching, and minimizing render-blocking resources.',
    imageUrl: 'path/to/web-performance-optimization-image.jpg'
  },
  {
    id: 15,
    title: 'Progressive Web Apps',
    description: 'Build web apps that work offline and load quickly.',
    lessonsCount: 9,
    category: CategoryType.beginners,
    longDescription: 'Learn to create Progressive Web Apps (PWAs) with offline capabilities and fast loading times.',
    imageUrl: 'path/to/progressive-web-apps-image.jpg'
  },
  {
    id: 16,
    title: 'CSS Grid and Flexbox',
    description: 'Master modern CSS layout techniques with Grid and Flexbox.',
    lessonsCount: 8,
    category: CategoryType.beginners,
    longDescription: 'Understand CSS Grid and Flexbox for creating complex and responsive layouts with ease.',
    imageUrl: 'path/to/css-grid-flexbox-image.jpg'
  },
  {
    id: 17,
    title: 'JavaScript ES6+',
    description: 'Get up to speed with modern JavaScript features.',
    lessonsCount: 10,
    category: CategoryType.beginners,
    longDescription: 'Learn about the latest JavaScript features introduced in ES6 and beyond, including arrow functions, classes, and modules.',
    imageUrl: 'path/to/javascript-es6-plus-image.jpg'
  },
  {
    id: 18,
    title: 'Testing Angular Applications',
    description: 'Learn to write tests for your Angular applications using Jasmine and Karma.',
    lessonsCount: 8,
    category: CategoryType.beginners,
    longDescription: 'Get to know testing strategies for Angular applications, including unit tests, integration tests, and end-to-end tests.',
    imageUrl: 'path/to/testing-angular-applications-image.jpg'
  },
  {
    id: 19,
    title: 'Docker for Developers',
    description: 'Learn to containerize your applications with Docker.',
    lessonsCount: 10,
    category: CategoryType.other,
    longDescription: 'Master Docker basics, including creating and managing containers, Docker images, and Docker Compose.',
    imageUrl: 'path/to/docker-for-developers-image.jpg'
  },
  {
    id: 20,
    title: 'CI/CD with Jenkins',
    description: 'Implement continuous integration and delivery pipelines with Jenkins.',
    lessonsCount: 11,
    category: CategoryType.other,
    longDescription: 'Learn to set up and manage CI/CD pipelines using Jenkins, including automation and integration with various tools.',
    imageUrl: 'path/to/cicd-with-jenkins-image.jpg'
  },
];
