import React from 'react';

const ProfileCard = () => {
    return (
        <>
        <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col">

            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Kuntal Saha</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">kuntal2001saha@gmail.com</p>
                <a href="#" class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit Username
                    {/* <svg class="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg> */}
                </a>
            </div>
        </div>
        </>
    );
};

export default ProfileCard;
