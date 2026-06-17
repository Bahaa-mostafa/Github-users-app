import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className=" text-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/home" className="!no-underline text-black text-xl font-bold">
                            <img src="/img/GitHub-logo.png" alt="logo" className="h-11" />
                        </Link>
                        <ul className="flex gap-6">
                            <li>
                                <Link to="/home" className="text-black !no-underline transition font-medium">Home</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="text-black !no-underline transition font-medium">Contacts</Link>
                            </li>
                            <li>
                                <Link to="/Compare" className="text-black !no-underline transition font-medium">CompareRepos</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
