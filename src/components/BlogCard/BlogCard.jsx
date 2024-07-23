import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { fetchBlogCardData } from '../../services/blogPage.service';

const BlogCard = () => {
  const [blogCards, setBlogCards] = useState([]);

  useEffect(() => {
    fetchBlogCards();
  }, []);

  async function fetchBlogCards() {
    try {
      const blogCardsFetched = await fetchBlogCardData();
      setBlogCards(blogCardsFetched);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {blogCards.length > 0 ? (
        blogCards.map((blogCard) => (
          <div
            className="flex gap-2 justify-between border-b border-gray-200 pb-4 mb-8 cursor-pointer"
            key={blogCard.id}
          >
            <Card>
              <CardHeader>
                <CardTitle>{blogCard.title}</CardTitle>
                <CardDescription className="text-gray-500">
                  {blogCard.description.length > 50
                    ? <span> {blogCard.description.slice(0, 40)+"... "} <a href="#" className='hover:text-black'>Read More</a></span>
                    : <span>{blogCard.description}</span>}
                </CardDescription>
              </CardHeader>
              <div className="flex justify-between">
                <div className="flex justify-between">
                  <ul className="flex text-sm ml-5 mr-12 text-gray-500">
                    <li className="m-[3px] p-[2px] pt-[2.5px]">
                      {blogCard.date}
                    </li>
                    <li className="m-[3px] p-[2px] pt-[2.5px] flex gap-1">
                      <img
                        className="h-[18px] w-[20px]"
                        src="https://logowik.com/content/uploads/images/940_like_icon.jpg"
                        alt="Like icon"
                      />
                      <span>{blogCard.likes}</span>
                    </li>
                    <li className="m-[3px] p-[2px] pt-[2.5px] flex gap-1">
                      <img
                        className="h-4 w-4 pt-[3px]"
                        src="https://www.freeiconspng.com/thumbs/comment-png/comment-png-29.png"
                        alt="Comment icon"
                      />
                      <span>{blogCard.comments}</span>
                    </li>
                  </ul>
                  <ul className="flex">
                    <li className="m-1 p-1">
                      <img
                        className="h-4 w-4"
                        src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-minus-circle-thin.png"
                        alt="Cancel Icon"
                      />
                    </li>
                    <li className="m-1 p-1">
                      <img
                        className="h-4 w-4"
                        src="https://t4.ftcdn.net/jpg/06/80/32/77/360_F_680327774_zav9UbAKEShvpA1ONdri6HNKId7sgFUZ.jpg"
                        alt="Bookmark icon"
                      />
                    </li>
                    <li className="m-1 p-1">
                      <img
                        className="h-4 w-4"
                        src="https://cdn2.iconfinder.com/data/icons/pinpoint-interface/48/dots-512.png"
                        alt="Three dot icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <div>
              <img
                className="h-32 w-56"
                src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt="React logo"
              />
            </div>
          </div>
        ))
      ) : (
        <p>No blog available</p>
      )}
    </>
  );
};

export default BlogCard;
