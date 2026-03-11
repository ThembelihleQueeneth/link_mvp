import { useState } from "react";

type Link = {
  name: string;
  url: string;
};

function App() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<Link[]>([]);

  const addLink = () => {
    if (!name || !url) return;

    const newLink = { name, url };
    setLinks([...links, newLink]);

    setName("");
    setUrl("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">

      <h1 className="text-4xl font-bold mb-2">LinkKeeper</h1>
      <p className="text-gray-500 mb-10">
        Save your links. Never lose them again.
      </p>

      <div className="flex gap-3 mb-10">

        <input
          className="border rounded-lg px-4 py-2 w-48"
          placeholder="Link name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border rounded-lg px-4 py-2 w-72"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={addLink}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
        >
          + Save
        </button>

      </div>

      <div className="w-[500px]">
        {links.length === 0 ? (
          <p className="text-gray-400 text-center">
            No links saved yet. Add your first one above!
          </p>
        ) : (
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow flex justify-between"
              >
                <span>{link.name}</span>

                <a
                  href={link.url}
                  target="_blank"
                  className="text-blue-500"
                >
                  Open
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default App;