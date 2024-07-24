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
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            company: '',
            phone: '',
            gender: 'male',
            college: '',
            major: '',
            graduationYear: '',
            jobProfile: '',
            jobCompany: '',
            github: '',
            linkedIn: '',
            twitter: ''
        });
    
        
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleRadioChange = (event) => {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        
        const handleBasicInfoSubmit = (event) => {
            event.preventDefault();
            console.log('Basic Info submitted:', formData.firstName, formData.lastName, formData.company, formData.phone, formData.gender);
        };
    
        const handleEducationSubmit = (event) => {
            event.preventDefault();
            console.log('Education submitted:', formData.college, formData.major, formData.graduationYear);
        };
    
        const handleJobSubmit = (event) => {
            event.preventDefault();
            console.log('Job Info submitted:', formData.jobProfile, formData.jobCompany);
        };
    
        const handleExternalProfilesSubmit = (event) => {
            event.preventDefault();
            console.log('External Profiles submitted:', formData.github, formData.linkedIn, formData.twitter);
        };

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
                        <form onSubmit={handleBasicInfoSubmit} className='flex flex-col gap-5 p-6'>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text" id="firstName" name="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text" id="lastName" name="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                    <input type="text" id="company" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" value={formData.company} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className='w-24'>
                                <Button variant="outline">Upload Resume</Button>
                            </div>
                            <div className="flex flow-row gap-3">
                                <span>Gender :</span>
                                <RadioGroup name="gender" defaultValue="male" className="flex flow-row gap-3" value={formData.gender} onChange={handleRadioChange}>
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
                                <Button type="submit" variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </form>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
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
                        <form onSubmit={handleEducationSubmit} className='flex flex-col gap-5 p-6'>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Name</label>
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="XYZ college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="major" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Major</label>
                                    <input
                                        type="text"
                                        id="major"
                                        name="major"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Engineering"
                                        value={formData.major}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="graduationYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Graduation Year</label>
                                    <input
                                        type="text"
                                        id="graduationYear"
                                        name="graduationYear"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="YYYY"
                                        value={formData.graduationYear}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-30'>
                                <Button type="submit" variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </form>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
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
                        <form onSubmit={handleJobSubmit} className='flex flex-col gap-5 p-6'>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
                                    <input
                                        type="text"
                                        id="profile"
                                        name="profile"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Job Profile"
                                        value={formData.profile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-30'>
                                <Button type="submit" variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </form>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
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
                        <form onSubmit={handleExternalProfilesSubmit} className='flex flex-col gap-5 p-6'>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="github" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github</label>
                                    <input
                                        type="text"
                                        id="github"
                                        name="github"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="www.github.com/username"
                                        value={formData.github}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="linkedIn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn</label>
                                    <input
                                        type="text"
                                        id="linkedIn"
                                        name="linkedIn"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="www.linkedin.com/in/username"
                                        value={formData.linkedIn}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Twitter</label>
                                    <input
                                        type="text"
                                        id="twitter"
                                        name="twitter"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="www.twitter.com/username"
                                        value={formData.twitter}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-30'>
                                <Button type="submit" variant="outline" className="border-red-600 text-red-600">Update</Button>
                            </div>
                        </form>
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
