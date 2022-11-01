import ProfilePictureSVG from '../assets/svgs/profile__img.svg';

export default function Profile() {
    return <div className="profile_section">
        <div className="profile_section_inner">
            <img alt="profile" src={ProfilePictureSVG} id="profile_pic" className="profile_picture" />

            <h3>Majesty Nosakhare</h3>
        </div>
    </div>
}