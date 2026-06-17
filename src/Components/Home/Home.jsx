import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users?per_page=30")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Search */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-2xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-center text-gray-500">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <img
                src={user.avatar_url}
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="mt-4 font-semibold">
                {user.login}
              </h2>
              <Link
                to={`/profile/${user.login}`}
                className=" !no-underline mt-3 inline-block bg-black text-white px-4 py-2 rounded-xl"
              >View Profile
              </Link>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}