import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function RepoDetails() {

    const { username, repoName } = useParams();
    const [repo, setRepo] = useState(null);
    useEffect(() => {
        fetch(
            `https://api.github.com/repos/${username}/${repoName}`
        )
            .then(res => res.json())
            .then(data => setRepo(data))
    }, [username, repoName]);
    if (!repo)
        return <p className="p-6">
            Loading...
        </p>
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold">
                {repo.name}
            </h1>
            <p className="mt-4">
                {repo.description || "No description"}
            </p>
            <div className="mt-5">
                <p>
                    ⭐ Stars: {repo.stargazers_count}
                </p>
                <p>
                    🍴 Forks: {repo.forks_count}
                </p>
                <p>
                    Language: {repo.language}
                </p>
            </div>
            <a href={repo.html_url} target="_blank" className="text-blue-600"> Open on GitHub </a>
        </div>
    )
}