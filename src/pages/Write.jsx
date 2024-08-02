import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import JoditEditor from 'jodit-react';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';
import Footer from '../components/Footer/Footer';

function Write() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  useEffect(() => {}, [content]);

  const editorContainerStyle = {
    height: 'auto',
    width: '100%',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
  };

  const toggleEditorVisibility = () => {
    setIsEditorVisible(!isEditorVisible);
  };

  return (
    <>
       <div className="flex items-center justify-between gap-x-4 flex-wrap">
      <button
        disabled={title.length === 0 && content.length === 0}
        type="button"
        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none focus:ring-4 ${
          title.length === 0 && content.length === 0
            ? 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            : 'bg-green-800 hover:bg-green-900 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-700 dark:border-green-700'
        }`}
      >
        Publish
      </button>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white mb-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
        />
      </svg>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </div>

      <br />
      <p class="text-4xl text-gray-500 dark:text-white ml-28">
        Give Your Blog A Title
      </p>
      <br></br>
      <textarea
        className="blog-title-textarea"
        placeholder="Write your blog title here..."
      />
        
     

      <br></br>
      <br></br>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer ml-28"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        onClick={toggleEditorVisibility}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <p class="text-4xl text-gray-500 dark:text-white ml-28">
        Write Your Blog Here:
      </p>
      <br></br>
      {isEditorVisible && (
        <div style={wrapperStyle}>
          <div style={editorContainerStyle}>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newTitle) => setContent(newTitle)}
            />
          </div>
        </div>
      )}
      <p className="text-2xl text-gray-500 dark:text-white text-center">
        Our Sponsors
      </p>
      <Marquee>
        <img src="data:image/png;base64,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"></img>
        <img
          src="data:image/png;base64,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"
          class="h-auto max-w-xs"
        ></img>
        <img
          src="data:image/png;base64,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"
          class="h-auto max-w-xs"
        />
        <img
          src="data:image/jpeg;base64,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"
          class="h-auto max-w-xs"
        />
        <img
          src="https://i.pinimg.com/originals/7b/a2/7b/7ba27b85ee51849568dd6076d0e44b15.png"
          class="h-auto max-w-xs"
        />
      </Marquee>
      <br></br>
      <Footer />
    </>
  );
}

export default Write;
