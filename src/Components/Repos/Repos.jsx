import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Repos() {

    const { username } = useParams();
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username) return;
        fetch(`https://api.github.com/users/${username}/repos`)
            .then((res) => res.json())
            .then((data) => {
                setRepos(Array.isArray(data) ? data : []);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [username]);

    if (loading) {
        return <p className="p-6">Loading repos...</p>
    }
    return (

        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-6">
                {username} Repositories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-white p-4 rounded-xl shadow">
                        <h3 className="font-bold">
                            {repo.name}
                        </h3>
                        <p className="text-gray-500">
                            {repo.description || "No description"}
                        </p>
                        <Link
                            to={`/repo/${username}/${repo.name}`}
                            className="bg-green-400 text-white !no-underline px-4 py-2 rounded-lg inline-block mt-3 hover:bg-green-800 transition">
                            Open Repo
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}