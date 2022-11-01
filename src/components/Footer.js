import ZuriLogoSVG from '../assets/svgs/zuri_logo.svg';
import IGSVG from '../assets/svgs/I4G.svg';

export default function Footer () {
    return <footer>
        <div className="footer-inner">
            <img alt="logo" src={ZuriLogoSVG} />

            <p>HNG Internship 9 Frontend Task</p>

            <img alt="logo" src={IGSVG} />

        </div>
    </footer>
}