import { useState } from "react";

export default function CompareRepos() {

  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const [repos1, setRepos1] = useState(null);
  const [repos2, setRepos2] = useState(null);


  async function getRepos(username, setRepos) {

    const res = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const data = await res.json();

    setRepos(data);

  }



  function compare() {

    if (!user1.trim() || !user2.trim()) {

      alert("Please enter two usernames");
      return;

    }


    getRepos(user1, setRepos1);
    getRepos(user2, setRepos2);

  }



  return (

    <div className="min-h-screen p-6">


      <h1 className="text-3xl font-bold text-center mb-8">
        Compare Repositories
      </h1>



      {/* Inputs */}

      <div className="flex flex-col gap-4 max-w-md mx-auto">


        <input

          type="text"
          placeholder="Enter first username"

          value={user1}

          onChange={(e)=>setUser1(e.target.value)}

          className="border p-3 rounded-lg"

        />



        <input

          type="text"
          placeholder="Enter second username"

          value={user2}

          onChange={(e)=>setUser2(e.target.value)}

          className="border p-3 rounded-lg"

        />



        <button

          onClick={compare}

          className="bg-blue-600 text-white px-6 py-2 rounded-lg mx-auto"

        >

          Compare

        </button>


      </div>





      {/* Result */}


      {repos1 && repos2 && (


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">



          <RepoCard

            username={user1}

            repos={repos1}

          />



          <RepoCard

            username={user2}

            repos={repos2}

          />


        </div>


      )}



    </div>

  );

}





function RepoCard({username, repos}) {


  const stars = repos.reduce(

    (total, repo) => total + repo.stargazers_count,

    0

  );



  return (

    <div className="border rounded-xl p-5 shadow">


      <h2 className="text-xl font-bold mb-3">

        {username}

      </h2>



      <p>
        📦 Repositories: {repos.length}
      </p>


      <p>
        ⭐ Stars: {stars}
      </p>



      <div className="mt-3">


        <h3 className="font-semibold">
          Repo Names:
        </h3>


        {repos.slice(0,5).map((repo)=>(

          <p key={repo.id} className="text-gray-600">

            {repo.name}

          </p>

        ))}


      </div>


    </div>

  );

}