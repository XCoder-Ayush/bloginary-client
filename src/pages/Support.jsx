import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Footer from '../components/Footer/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Support() {
  return (
    <>
      <div className="flex flex-col gap-10 py-10 px-4 sm:px-10 items-center">
        <div>
          <span className="text-4xl font-extrabold whitespace-nowrap dark:text-white">
            BLOGINARY
          </span>
        </div>
        <div className="text-center w-full md:w-3/4">
          <span className="font-sans font-medium text-2xl">Contact Us</span>
        </div>
        <div className="text-center w-full md:w-3/4">
          <span className="font-sans font-medium text-gray-400">
            Have a question or need assistance? Feel free to reach out to us
            using the contact form below. We are here to help!
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 w-full max-w-screen-lg">
          <Card className="w-full h-auto p-5 rounded-2xl flex flex-col justify-between">
            <CardHeader>
              <CardTitle>
                <span className="font-bold">
                  <i className="far fa-comment"></i>
                </span>
              </CardTitle>
              <CardDescription>
                <div className="flex">
                  <span className="flex items-end font-bold text-3xl">
                    Chat Support
                  </span>
                </div>
                <div className="flex mt-4">
                  <span className="flex items-end font-bold text-gray-400">
                    We are here to help
                  </span>
                </div>
                <div className="flex mt-6">
                  <span className="flex items-end text-black font-semibold break-words">
                    https://www.bloginary.live/contact-us
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full h-auto p-5 rounded-2xl flex flex-col justify-between">
            <CardHeader>
              <CardTitle>
                <span className="font-bold">
                  <i className="fas fa-landmark"></i>
                </span>
              </CardTitle>
              <CardDescription>
                <div className="flex">
                  <span className="flex items-end font-bold text-3xl">
                    Visit Us
                  </span>
                </div>
                <div className="flex mt-4">
                  <span className="flex items-end font-bold text-gray-400">
                    Visit our office HQ
                  </span>
                </div>
                <div className="flex mt-6">
                  <span className="flex items-end text-black font-semibold break-words">
                    https://www.bloginary.live/contact-us
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full h-auto p-5 rounded-2xl flex flex-col justify-between">
            <CardHeader>
              <CardTitle>
                <span className="font-bold">
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: '#000000' }}
                  ></i>
                </span>
              </CardTitle>
              <CardDescription>
                <div className="flex">
                  <span className="flex items-end font-bold text-3xl">
                    Call Us
                  </span>
                </div>
                <div className="flex mt-4">
                  <span className="flex items-end font-bold text-gray-400">
                    Mon-Fri from 10AM to 9PM
                  </span>
                </div>
                <div className="flex mt-6">
                  <span className="flex items-end text-black font-semibold break-words">
                    +91 9874656203
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full h-auto p-5 rounded-2xl flex flex-col justify-between">
            <CardHeader>
              <CardTitle>
                <span className="font-bold">
                  <i class="far fa-envelope"></i>
                </span>
              </CardTitle>
              <CardDescription>
                <div className="flex">
                  <span className="flex items-end font-bold text-3xl">
                    Email Us
                  </span>
                </div>
                <div className="flex mt-4">
                  <span className="flex items-end font-bold text-gray-400">
                    Email related query
                  </span>
                </div>
                <div className="flex mt-6">
                  <span className="flex items-end text-black font-semibold break-words">
                    bloginary.live@gmail.com
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-4 md:p-10 items-start justify-center w-full max-w-screen-lg mx-auto">
        <div className="w-full md:w-2/3 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1708961462805-9949475ea462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image not found"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Input
            type="text"
            id="Text"
            placeholder="Enter Your Name"
            className="w-full mt-1 p-4 text-lg border rounded-xl border-slate-600"
          />
          <Input
            type="email"
            id="Email"
            placeholder="Enter Your Email"
            className="w-full mt-1 p-4 text-lg border rounded-xl border-slate-600"
          />
          <Textarea
            placeholder="Type your message here."
            className="w-full mt-1 p-4 text-lg border rounded-xl border-slate-600"
          />
          <Button className="w-full mt-1 p-2 text-lg bg-black text-white rounded-xl">
            Send message
          </Button>
        </div>
      </div>

      <Footer className="w-full max-w-screen-lg mx-auto" />
    </>
  );
}
