import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import axios from "axios";
import moment from "moment";
import "./Profile.sass";

interface ProfileInfo {
    avatar_url: string;
    created_at: string;
    location: string;
    name: string;
}

const Profile = () => {
    const [profileInfo, changeProfileInfo] : [ProfileInfo | null, Function] = useState({
        avatar_url: "",
        created_at: "",
        location: "",
        name: ""
    });
    const login = useLocation().pathname.substr(1);

    useEffect(() => {
        if (window.sessionStorage.getItem(login)) {
            changeProfileInfo(JSON.parse(window.sessionStorage.getItem(login) as string));
            return ;
        }

        axios.get(`https://api.github.com/users/${login}`).then((result: any) => {
            if (result && result.data) {
                changeProfileInfo(result.data);
                window.sessionStorage.setItem(login, JSON.stringify(result.data));
            } else {
                throw result;
            }
        }).catch((error: any) => {

        });
    }, []);

    return (
            profileInfo?.avatar_url ?
                <div className="profile-wrapper">
                    <img src={profileInfo.avatar_url} className="profile-image" alt={`${login}-image`} />
                    <div className="profile-info-container">
                        <div className="profile-name">{profileInfo?.name}</div>
                        {profileInfo?.location && <div className="profile-location">{profileInfo?.location}</div>}
                        <div className="profile-created-at">From {moment(profileInfo?.created_at).format("DD/MM/YYYY")}</div>
                    </div>
                </div> :
                null
    );
};

export default Profile;