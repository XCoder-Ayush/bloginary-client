import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import userService from '../services/auth.service.js';
import { Input } from '@/components/ui/input';

function Auth() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (previewUrl) {
    }
  }, [previewUrl]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
    }
  };

  const onSubmit = async (data) => {
    if (!selectedFile) {
      console.log('Please select a file');
      return;
    }

    try {
      const result = await userService.authservice(data, selectedFile);
      console.log('File uploaded successfully:', result);

     

      setImage('');

      if (result.fileUrl) {
        setImage(result.fileUrl);
      } else {
        console.log('File URL not returned by the server.');
      }
    } catch (error) {
      console.log('Error during file upload:', error);

    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe6ddca9f346cee226451f5e5c0ac176a14caa27b7f42f0a4d1b15cf1ffe321?placeholderIfAbsent=true&apiKey=dad88bdb43554cd0b45e9e38f1a2d88e"
          alt="Sign In Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center p-6 lg:p-12 overflow-auto lg:ml-[-2rem]">
        <h1 className="text-xl lg:text-3xl font-semibold text-black ">
          Register Your Details
        </h1>
        <div className="mt-4 flex items-center justify-center">
          {previewUrl && (
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={previewUrl}
                alt="Selected file preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {image && (
            <img
              src={image}
              alt="Uploaded file preview"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="mt-6 w-full max-w-md">
          <label htmlFor="file" className="block text-indigo-950">
            Upload your profile picture
          </label>
          <Input
            type="file"
            id="file"
            className="w-full mt-1 border rounded-lg border-slate-600"
            onChange={onFileChange}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md mt-6 space-y-4"
        >
          <div>
            <Input
              type="text"
              id="username"
              placeholder=" Username" 
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('username')}
            />
          </div>

          <div>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name" 
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('firstName')}
            />
          </div>
          <div>
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name" 
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('lastName')}
            />
          </div>
          <div>
            <Input
              type="password"
              id="password"
              placeholder="Password" 
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('password')}
            />
          </div>
          <div>
            <Input
              type="email"
              id="email"
              placeholder="Email" 
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('email')}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-6 text-white rounded-xl bg-black"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
