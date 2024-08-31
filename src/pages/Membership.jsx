import React from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Membership = () => {

    return (
        <>
            <Navbar />

            <div className="flex flex-col gap-10 py-10 px-10 items-center sm:px-10 md:px-30 lg:px-20">
                <div className="w-20 h-20 mt-5">
                    <img className="object-cover w-full h-full" src="https://t4.ftcdn.net/jpg/03/49/37/73/360_F_349377375_ffnj0RHK52KsooH7IBdtpjNtdEP7bKM7.jpg" alt="" />
                </div>
                <div className="text-center w-3/4">
                    <span className="font-sans font-medium">We warmly invite you to become a part of the Bloginary family! At Bloginary we are passionate about sharing stories, insights and knowledge with the world. Whether you're a experienced blogger or just starting out, there's a place for you here.</span>
                </div>
                <div className="grid grid-cols-3 gap-5 justify-center">
            
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger><Button variant="outline" className="bg-black text-white rounded-xl">Pay Monthly</Button></TooltipTrigger>
                            <TooltipContent className ="rounded-xl">
                                <p className="font-medium p-0.5">Save upto $5</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger><Button variant="outline" className="bg-black text-white rounded-xl">Pay Quaterly</Button></TooltipTrigger>
                            <TooltipContent className ="rounded-xl">
                                <p className="font-medium p-0.5">Save upto $10</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger><Button variant="outline" className="bg-black text-white rounded-xl">Pay Annually</Button></TooltipTrigger>
                            <TooltipContent className ="rounded-xl">
                                <p className="font-medium p-0.5">Save upto $20</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    <Card>
                        <CardHeader>
                            <CardTitle><span className="font-bold">Monthly</span></CardTitle>
                            <CardDescription>
                                <div className="flex">
                                    <span className="text-5xl font-bold">$20</span><span className="flex items-end font-semibold">/ Month</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className=" pl-5 list-disc list-outside text-sm">
                                <li><span>Read member only stories.</span></li>
                                <li><span>Support writers you read most.</span></li>
                                <li><span>Earn money for your writing.</span></li>
                                <li><span>Connect your custom domain.</span></li>
                                <li><span>Create your own publications.</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Subscribe</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle><span className="font-bold">Quaterly</span></CardTitle>
                            <CardDescription>
                                <div className="flex">
                                    <span className="text-5xl font-bold">$50</span><span className="flex items-end font-semibold">/ Quaterly</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className=" pl-5 list-disc list-outside text-sm">
                                <li><span>Read member only stories.</span></li>
                                <li><span>Support writers you read most.</span></li>
                                <li><span>Earn money for your writing.</span></li>
                                <li><span>Connect your custom domain.</span></li>
                                <li><span>Create your own publications.</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Subscribe</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle><span className="font-bold">Annually</span></CardTitle>
                            <CardDescription>
                                <div className="flex">
                                    <span className="text-5xl font-bold">$165</span><span className="flex items-end font-semibold">/ Annually</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className=" pl-5 list-disc list-outside text-sm">
                                <li><span>Read member only stories.</span></li>
                                <li><span>Support writers you read most.</span></li>
                                <li><span>Earn money for your writing.</span></li>
                                <li><span>Connect your custom domain.</span></li>
                                <li><span>Create your own publications.</span></li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Subscribe</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Membership;