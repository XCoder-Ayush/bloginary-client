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
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Membership = () => {

    return (
        <>
            <Navbar />

            <div className="flex flex-col gap-8 py-10 px-40 items-center ">
                <div className="w-20 h-20">
                    <img className="object-cover w-full h-full" src="https://t4.ftcdn.net/jpg/03/49/37/73/360_F_349377375_ffnj0RHK52KsooH7IBdtpjNtdEP7bKM7.jpg" alt="" />
                </div>
                <div className="text-center">
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, corporis deleniti. Mollitia expedita debitis voluptatibus obcaecati maxime quibusdam, ut, nostrum rerum quos inventore assumenda! Voluptatibus aut vitae neque nam animi. Earum fuga perferendis officia!</span>
                </div>
                <div className="flex gap-3 justify-center">
                    <Button variant="outline" className="bg-black text-white rounded-xl">Pay Monthly</Button>
                    <Button variant="outline" className="bg-black text-white rounded-xl">Pay Quatarly and save upto $10</Button>
                    <Button variant="outline" className="bg-black text-white rounded-xl">Pay Annually and save upto $15</Button>
                </div>

                <div className="flex gap-5">
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
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Button</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle><span className="font-bold">Quatarly</span></CardTitle>
                            <CardDescription>
                                <div className="flex">
                                    <span className="text-5xl font-bold">$50</span><span className="flex items-end font-semibold">/ Quatarly</span>
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
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Button</Button>
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
                            <Button variant="outline" className="bg-slate-800 text-white rounded-xl w-full">Button</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Membership;