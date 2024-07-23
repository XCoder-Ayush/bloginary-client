export async function fetchBlogCardData(){
    const blogCards = [
      { id: 1, title: 'Web Development', description: 'Building responsive and modern websites.',  date: 'Jan 10, 2015', likes: '32K', comments: 364},
      { id: 2, title: 'App Development', description: 'Creating mobile applications for Android and iOS.', date: 'Feb 11, 2016', likes: '33K', comments: 365},
      { id: 3, title: 'SEO Optimization', description: 'Improving search engine rankings.', date: 'Mar 13, 2017', likes: '34K', comments: 366},
      { id: 4, title: 'Angular Js', description: 'Changing the world with define things', date: 'Apr 14, 2018', likes: '35K', comments: 367},
      { id: 5, title: 'Node Js', description: 'Using the data in the runtime environment', date: 'May 15, 2019', likes: '36K', comments: 368},
      { id: 6, title: 'Three.js', description: '3d library helps to improve data', date: 'Jul 16, 2020', likes: '37K', comments: 369}
    ];
  
    //Actual blog data will came from rest api
   return blogCards;
  }

export async function fetchArticleData(){
  const articles = [
    {id: 1, author: "James Smith", description: "Inside the Outages: A Dangerous Null Pointer Exception Deployed on Friday"},
    {id: 2, author: "Austin Stone", description: "Wireframing is an important step in designing"}
  ]
  return articles;
}

export async function fetchTopicData(){
  const topics = [
    {id: 1, topicName: "React"},
    {id: 2, topicName: "Angular"},
    {id: 3, topicName: "Spring Boot"},
    {id: 4, topicName: "AWS"},
    {id: 5, topicName: "Docker"},
    {id: 6, topicName: "NodeJs"},
    {id: 7, topicName: "Python"},
    {id: 8, topicName: "Design"}
  ]
  return topics;
}

export async function fetchMenuData(){
  const menuItems = [
    {id: 1, menuItem: "Docker"},
    {id: 2, menuItem: "Java"},
    {id: 3, menuItem: "Spring Boot"},
    {id: 4, menuItem: "NextJs"}
  ]
  return menuItems;
}
  