import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, [username]);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-2xl mx-auto">
        <img
          src={user.avatar_url}
          className="w-28 h-28 mx-auto rounded-full"
        />

        <h1 className="text-2xl font-bold mt-3">
          {user.login}
        </h1>

        <div className="flex justify-center gap-6 mt-4 text-gray-600">
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>

      <Link to={`/repos/${user.login}`} className="!no-underline mt-4 inline-block bg-black hover:bg-blue-400 text-white px-4 py-2 rounded-xl transition">
          Open Repos →
      </Link>
      </div>

      {/* Repos */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Top Repos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">{repo.name}</h3>
              <p className="text-sm text-gray-500">
                {repo.description || "No description"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}