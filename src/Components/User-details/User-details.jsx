import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, [username]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {username} Repos
      </h2>

      {repos.map((repo) => (
        <div key={repo.id} className="border p-3 mb-2">
          <h3>{repo.name}</h3>
          <a href={repo.html_url} target="_blank">
            Open Repo
          </a>
        </div>
      ))}
    </div>
  );
}