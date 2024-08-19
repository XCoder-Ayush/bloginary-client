export default async function fetchBlogData(){
  const blogs = [
    { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.',  },
    { id: 2, title: 'App Development', description: 'Creating mobile applications for Android and iOS.' },
    { id: 3, title: 'SEO Optimization', description: 'Improving search engine rankings.' },
    { id: 4, title: 'Angular Js', description: 'Changing the world with define things' },
    { id: 5, title: 'Node Js', description: 'Using the data in the runtime environment' },
    { id: 6, title: 'Three.js', description: '3d library helps to improve data' },
  ];
//Actual blog data will came from rest api
 return blogs;
}
