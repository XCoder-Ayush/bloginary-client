import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const DropdownList = () => {
    return (
        <>
        <div className='flex flex-col gap-4 p-2'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-slate-100 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='flex gap-5'>
                            <div className='w-10 h-10'>
                                <img className="object-cover w-full h-full" src="https://static.vecteezy.com/system/resources/previews/006/017/592/non_2x/ui-profile-icon-vector.jpg" alt="" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='text-xl font-semibold'>Basic Info</div>
                                <div className='text-xs font-normal'>Name, Resume etc.</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-5 p-6'>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                                </div>
                                <div>
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>

                            </div>
                            <div className='w-24'>
                                <Button variant="outline">Upload Resume</Button>
                            </div>
                            <div className="flex flow-row gap-3">
                                <span>Gender :</span>
                                <RadioGroup defaultValue="option-one" className="flex flow-row gap-3">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="option-one" />
                                        <Label htmlFor="option-one">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="option-two" />
                                        <Label htmlFor="option-two">Female</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="others" id="option-three" />
                                        <Label htmlFor="option-two">Others</Label>
                                    </div>
                                </RadioGroup>

                            </div>
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-slate-100 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='flex gap-5'>
                            <div className='w-10 h-10'>
                                <img className="object-cover w-full h-full" src="https://toppng.com/uploads/preview/background-education-logo-for-education-a-11563058486g8lcjy4wvq.png" alt="" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='text-xl font-semibold'>Education</div>
                                <div className='text-xs font-normal'>Major, College etc.</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-5 p-6'>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="college" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Name</label>
                                    <input type="text" id="college" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XYZ college" required />
                                </div>
                                <div>
                                    <label for="major" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Major</label>
                                    <input type="text" id="major" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Engineering" required />
                                </div>
                                <div>
                                    <label for="graduation_year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduation Year</label>
                                    <input type="text" id="graduation_year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="YYYY" required />
                                </div>

                            </div>
                            
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-slate-100 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='flex gap-5'>
                            <div className='w-10 h-10'>
                                <img className="object-cover w-full h-full" src="https://cdn-icons-png.flaticon.com/512/4192/4192708.png" alt="" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='text-xl font-semibold'>Job Information</div>
                                <div className='text-xs font-normal'>Profile, Company etc.</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-5 p-6'>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                
                                <div>
                                    <label for="profile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
                                    <input type="text" id="profile" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                                </div>
                                

                            </div>
                            
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-slate-100 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='flex gap-5'>
                            <div className='w-10 h-10'>
                                <img className="object-cover w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Chain_link_icon_slanted.png" alt="" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='text-xl font-semibold'>External Profiles</div>
                                <div className='text-xs font-normal'>Github, LinkedIn etc.</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-5 p-6'>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github</label>
                                    <input type="text" id="github" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="www.github.com/abc123" required />
                                </div>
                                <div>
                                    <label for="linkedIn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn</label>
                                    <input type="text" id="linkedIn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="www.linkedin.com/abc123" required />
                                </div>
                                <div>
                                    <label for="twitter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
                                    <input type="text" id="twitter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="www.twitter.com/abc123" required />
                                </div>

                            </div>
                            
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="bg-slate-100 px-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                        <div className='flex gap-5'>
                            <div className='w-10 h-10'>
                                <img className="object-cover w-full h-full" src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png" alt="" />
                            </div>
                            <div className='flex flex-col items-start'>
                                <div className='text-xl font-semibold'>Settings</div>
                                <div className='text-xs font-normal'>Mock Interviews, Subscription</div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className='flex gap-5 p-6'>
                            
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Access Mock Interviews</Button>
                            </div>
                            <div className='w-30'>
                                <Button variant="outline" className="border-red-600 text-red-600">Subscription plans</Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        </>

    );
};

export default DropdownList;
