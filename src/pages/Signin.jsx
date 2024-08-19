import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    // Pass the email as state
    navigate('/home', { state: { email: data['email-address'] } });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe6ddca9f346cee226451f5e5c0ac176a14caa27b7f42f0a4d1b15cf1ffe321?placeholderIfAbsent=true&apiKey=dad88bdb43554cd0b45e9e38f1a2d88e"
          alt="Sign In Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-12">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-4">
          Sign in or create an account
        </h1>
        <p className="text-neutral-600 mb-6">
          Welcome back! Please enter your details
        </p>

        <div className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-indigo-950">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-1 border rounded-md border-slate-600"
                {...register('email-address')}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-indigo-950">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-1 border rounded-md border-slate-600"
                {...register('password')}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-6 text-white bg-black rounded-md" 
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="mt-4 text-right text-indigo-950">
          Did you forget your password?
        </div>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-black"></div>
          <span className="mx-3 text-sm text-neutral-600">
            or register account
          </span>
          <div className="flex-grow h-px bg-black"></div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-center p-3 border rounded-md border-opacity-30 border-black cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/139b21fbcd4b2e4ea66bfdce8a4afbd547ccf104ccbea0da956ad93432c67d5b?placeholderIfAbsent=true&apiKey=dad88bdb43554cd0b45e9e38f1a2d88e"
              alt="Google logo"
              className="w-6 h-6"
            />
            <span className="ml-3 text-black">Continue with Google</span>
          </div>
          <div className="flex items-center justify-center p-3 border rounded-md border-opacity-30 border-black cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca704e2ab09eccc3f51d810db0d6b1b648bf1dff0fa939f35ff8c7d4d993efb3?placeholderIfAbsent=true&apiKey=dad88bdb43554cd0b45e9e38f1a2d88e"
              alt="Facebook logo"
              className="w-8 h-8"
            />
            <span className="ml-3 text-black">Continue with Facebook</span>
          </div>
          <div className="flex items-center justify-center p-3 border rounded-md border-opacity-30 border-black cursor-pointer">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c622e317ee08b4dd630d81b6c08b49b73c6f95802af24f9e5dd19f22f3282d35?placeholderIfAbsent=true&apiKey=dad88bdb43554cd0b45e9e38f1a2d88e"
              alt="Instagram logo"
              className="w-8 h-8"
            />
            <span className="ml-3 text-black">Continue with Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
