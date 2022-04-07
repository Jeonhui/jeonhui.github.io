import './styles/Nav.css';

export default function Nav() {
    return (
        <div className="Nav">
            <ul className="pageList">
                <li>
                    <a><div className="logo"/></a>
                </li>
                <li><a><span>Profile</span></a></li>
                <li><a><span>Portfolio</span></a></li>
                <li><a><span>Contact</span></a></li>
            </ul>
        </div>
    );
}

