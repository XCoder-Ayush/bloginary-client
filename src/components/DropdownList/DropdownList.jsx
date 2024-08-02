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

        basicInfo: {
            firstName: '',
            lastName: '',
            company: '',
            phone: '',
            gender: 'male',
        },
        education: {
            college: '',
            major: '',
            graduationYear: '',
        },
        jobInfo: {
            profile: '',
            company: '',
        },
        externalProfiles: {
            github: '',
            linkedIn: '',
            twitter: '',
        },
    });

    const handleInputChange = (event, section) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };


    const handleUpdate = (section) => {
        console.log('Update clicked for', section, formData[section]);

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
                            <form className='flex flex-col gap-5 p-6'>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                        <input type="text" id="firstName" name="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={formData.basicInfo.firstName} onChange={(e) => handleInputChange(e, 'basicInfo')} required />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                        <input type="text" id="lastName" name="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" value={formData.basicInfo.lastName} onChange={(e) => handleInputChange(e, 'basicInfo')} required />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                        <input type="text" id="company" name="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" value={formData.basicInfo.company} onChange={(e) => handleInputChange(e, 'basicInfo')} required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                        <input type="tel" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={formData.basicInfo.phone} onChange={(e) => handleInputChange(e, 'basicInfo')} required />
                                    </div>
                                </div>
                                <div className='w-24'>
                                    <Button variant="outline">Upload Resume</Button>
                                </div>
                                <div className="flex flow-row gap-3">
                                    <span>Gender :</span>
                                    <RadioGroup name="gender" defaultValue="male" className="flex flow-row gap-3" value={formData.basicInfo.gender} onChange={(e) => handleInputChange(e, 'basicInfo')}>
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
                                            <Label htmlFor="option-three">Others</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className='w-30'>
                                    <Button type="submit" variant="outline" className="border-red-600 text-red-600" onClick={() => handleUpdate('basicInfo')}>Update</Button>
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
                            <form className='flex flex-col gap-5 p-6'>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Name</label>
                                        <input
                                            type="text"
                                            id="college"
                                            name="college"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="XYZ college"
                                            value={formData.education.college}
                                            onChange={(e) => handleInputChange(e, 'education')}
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
                                            value={formData.education.major}
                                            onChange={(e) => handleInputChange(e, 'education')}
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
                                            value={formData.education.graduationYear}
                                            onChange={(e) => handleInputChange(e, 'education')}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='w-30'>
                                    <Button type="submit" variant="outline" className="border-red-600 text-red-600" onClick={() => handleUpdate('education')}>Update</Button>
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
                            <form className='flex flex-col gap-5 p-6'>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile</label>
                                        <input
                                            type="text"
                                            id="profile"
                                            name="profile"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Job Profile"
                                            value={formData.jobInfo.profile}
                                            onChange={(e) => handleInputChange(e, 'jobInfo')}
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
                                            value={formData.jobInfo.company}
                                            onChange={(e) => handleInputChange(e, 'jobInfo')}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='w-30'>
                                    <Button type="submit" variant="outline" className="border-red-600 text-red-600" onClick={() => handleUpdate('jobInfo')}>Update</Button>
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
                            <form className='flex flex-col gap-5 p-6'>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="github" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github</label>
                                        <input
                                            type="text"
                                            id="github"
                                            name="github"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="www.github.com/username"
                                            value={formData.externalProfiles.github}
                                            onChange={(e) => handleInputChange(e, 'externalProfiles')}
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
                                            value={formData.externalProfiles.linkedIn}
                                            onChange={(e) => handleInputChange(e, 'externalProfiles')}
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
                                            value={formData.externalProfiles.twitter}
                                            onChange={(e) => handleInputChange(e, 'externalProfiles')}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='w-30'>
                                    <Button type="submit" variant="outline" className="border-red-600 text-red-600" onClick={() => handleUpdate('externalProfiles')}>Update</Button>
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
