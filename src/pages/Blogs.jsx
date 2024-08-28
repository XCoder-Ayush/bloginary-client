import BlogCard from '../components/BlogCard/BlogCard';
import HomePageNavBar from '../components/Navbar/HomePageNavBar';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  fetchArticleData,
  fetchTopicData,
  fetchMenuData,
} from '../services/blogPage.service';
import { useState, useEffect } from 'react';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchArticles();
    fetchTopics();
    fetchMenuItems();
  }, []);

  async function fetchArticles() {
    try {
      const articlesFetched = await fetchArticleData();
      setArticles(articlesFetched);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTopics() {
    try {
      const topicsFetched = await fetchTopicData();
      setTopics(topicsFetched);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMenuItems() {
    try {
      const menuFetched = await fetchMenuData();
      setMenuItems(menuFetched);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <HomePageNavBar />
      <div className="max-w-[1336px] m-auto h-full flex justify-evenly">
        <div className="mt-4 pr-4 max-w-[728px]">
          <div className="ml-3 pb-2 text-sm">
            <ul className="flex border-b-2 border-gray-200 text-gray-500">
              <li className="m-[1.5px] pr-1 hover:text-black cursor-pointer text-2xl">+</li>
              <li className="m-1 p-1 hover:text-black cursor-pointer">
                For You
              </li>
              <li className="m-1 p-1 hover:text-black cursor-pointer">
                Following
              </li>
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="m-1 p-1 hover:text-black cursor-pointer"
                  >
                    {item.menuItem}
                  </li>
                ))
              ) : (
                <p>No menu items available.</p>
              )}
            </ul>
          </div>
          <div className="flex-row w-full mt-4">
            <BlogCard />
          </div>
        </div>
        <div className="border-s border-gray-200 pl-custom-clamp mt-4 max-w-[368px] hidden lg:block">
          <div>
            <h3 className="mb-4 text-gray-500 font-semibold">
              Recommended topics
            </h3>
            {topics.length > 0 ? (
              topics.map((topic) => (
                <Badge
                  key={topic.id}
                  variant="outline"
                  className="bg-gray-200 mr-1 mb-1 cursor-pointer hover:bg-gray-300"
                >
                  {topic.topicName}
                </Badge>
              ))
            ) : (
              <p>No topic available</p>
            )}
            <div className="text-green-600 ml-1 mt-5 text-sm cursor-pointer">
              See more topics
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-gray-500 font-semibold mt-5">Articles</h3>
            {articles.length > 0 ? (
              articles.map((article) => (
                <div className="mb-4" key={article.id}>
                  <div className="flex gap-2 mb-2 text-sm">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="mt-1 cursor-pointer font-medium">{article.author}</span>
                  </div>
                  <p className="font-semibold cursor-pointer">{article.description}</p>
                </div>
              ))
            ) : (
              <p>No article available</p>
            )}
            <div className="text-green-600 mt-6 text-sm cursor-pointer">See the full list</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
