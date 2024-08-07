import React, { useState, useRef } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import '../../src/index.css';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@/components/ui/button';

function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  const handlePublishClick = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <nav className="bg-white text-black p-4">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="text-2xl font-extrabold">BLOGINARY</div>
          <div className="flex items-center gap-x-4 flex-wrap w-full justify-end sm:w-auto">
            <button
              type="button"
              className="px-2 py-2 mt-2 sm:mt-0 rounded-[6px] bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border-2"
              onClick={handlePublishClick}
              disabled={content.trim() === ''}
            >
              Publish
            </button>

            <svg
              className="w-6 h-6 text-gray-800 dark:text-white mt-2 sm:mt-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.209 3.816a1 1 0 0 0-1.966.368l.325 1.74a5.338 5.338 0 0 0-2.8 5.762l.276 1.473.055.296c.258 1.374-.228 2.262-.63 2.998-.285.52-.527.964-.437 1.449.11.586.22 1.173.75 1.074l12.7-2.377c.528-.1.418-.685.308-1.27-.103-.564-.636-1.123-1.195-1.711-.606-.636-1.243-1.306-1.404-2.051-.233-1.085-.275-1.387-.303-1.587-.009-.063-.016-.117-.028-.182a5.338 5.338 0 0 0-5.353-4.39l-.298-1.592Z" />
              <path
                fillRule="evenodd"
                d="M6.539 4.278a1 1 0 0 1 .07 1.412c-1.115 1.23-1.705 2.605-1.83 4.26a1 1 0 0 1-1.995-.15c.16-2.099.929-3.893 2.342-5.453a1 1 0 0 1 1.413-.069Z"
                clipRule="evenodd"
              />
              <path d="M8.95 19.7c.7.8 1.7 1.3 2.8 1.3 1.6 0 2.9-1.1 3.3-2.5l-6.1 1.2Z" />
            </svg>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>
      </nav>

      <div className="mt-8 mx-4 sm:mx-12 md:mx-20 lg:mx-28">
        <div className="flex mt-5">
          <textarea
            className="w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-md focus:outline-none resize-none no-focus text-4xl"
            placeholder="Title"
            rows={2}
            value={title}
            onChange={handleTitleChange}
          ></textarea>
        </div>

        {/* <p className="mt-8 text-4xl text-gray-500 dark:text-white">
          Write Your Blog Here:
        </p> */}

        <div className="mt-5">
          <Editor
            apiKey={import.meta.env.VITE_TINYMC_API_KEY}
            onInit={(_evt, editor) => (editorRef.current = editor)}
            onEditorChange={handleEditorChange}
            init={{
              height: 300,
              width: '100%',
              menubar: false,
              plugins: 'lists link image preview',
              toolbar:
                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            }}
          />
        </div>
        <br></br>
        <button
          type="button"
          className="px-2 py-2 mt-2 sm:mt-0 rounded-[6px] bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border-2"
          onClick={handlePublishClick}
          disabled={content.trim() === ''}
        >
          Save as Draft
        </button>
      </div>
    </>
  );
}

export default Write;
