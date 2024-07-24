import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import DropdownList from "../components/DropdownList/DropdownList";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ProfilePage = () => {
    return(
        <>
        <Navbar/>

        <div className="flex gap-3 py-3">
            <div className="flex justify-center p-4"><ProfileCard/></div>
            <div className="flex-grow"><DropdownList/></div>
        </div>

        <Footer/>
        </>
    );
}

export default ProfilePage;