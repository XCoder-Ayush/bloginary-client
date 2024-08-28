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
      // Scroll to the bottom when the preview image is set
      
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

      // Clear the image state after successful upload
      setImage('');

      if (result.fileUrl) {
        // Optional: Uncomment if you want to display the uploaded file URL
        // setImage(result.fileUrl);
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

      <div className="w-full lg:w-1/2 flex flex-col items-center p-6 lg:p-12 overflow-auto">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-4 text-center">
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
          {/* Optionally render uploaded image URL here */}
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-indigo-950">
              User Name
            </label>
            <Input
              type="text"
              id="username"
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('username')}
            />
          </div>

          <div>
            <label htmlFor="firstName" className="block text-indigo-950">
              First-Name
            </label>
            <Input
              type="text"
              id="firstName"
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('firstName')}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-indigo-950">
              Last-Name
            </label>
            <Input
              type="text"
              id="lastName"
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('lastName')}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-indigo-950">
              Password
            </label>
            <Input
              type="password"
              id="password"
              className="w-full p-2 mt-1 text-sm border rounded-xl border-slate-600"
              {...register('password')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-indigo-950">
              Email-address
            </label>
            <Input
              type="email"
              id="email"
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
