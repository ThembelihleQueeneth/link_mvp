import { useState, useEffect } from "react";
import logo from './assets/logo.avif'
import { Copy, Edit, Trash2, ExternalLink, Loader2 } from "lucide-react";
type Link = {
  name: string;
  url: string;
};

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("links");
      if (saved) {
        setLinks(JSON.parse(saved));
      }
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("links", JSON.stringify(links));
    }
  }, [links, isLoading]);

  const addLink = () => {
    if (!name || !url) return;

    if (editingIndex !== null) {
      const updatedLinks = [...links];
      updatedLinks[editingIndex] = { name, url };
      setLinks(updatedLinks);
      setEditingIndex(null);
    } else {
      const newLink = { name, url };
      setLinks([...links, newLink]);
    }

    setName("");
    setUrl("");
  };

  const deleteLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setName("");
      setUrl("");
    }
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setName(links[index].name);
    setUrl(links[index].url);
  };

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">

      <h1 className="text-4xl font-bold mb-2">LinkKeeper</h1>
      <img src={logo} alt="logo" className="w-10 h-10 border rounded-full " />
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
          {editingIndex !== null ? "Update" : "+ Save"}
        </button>

      </div>

      <div className="w-[500px]">
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="animate-spin text-orange-500" size={40} />
            <span className="ml-3 text-gray-500 font-medium">Loading links...</span>
          </div>
        ) : links.length === 0 ? (
          <p className="text-gray-400 text-center">
            No links saved yet. Add your first one above!
          </p>
        ) : (
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow flex items-center justify-between gap-4"
              >
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-medium text-gray-800 truncate">{link.name}</span>
                  <span className="text-gray-500 text-sm truncate">{link.url}</span>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => copyLink(link.url)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                    title="Copy Link"
                  >
                    <Copy size={18} />
                  </button>
                  <button
                    onClick={() => startEdit(index)}
                    className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    title="Edit Link"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => deleteLink(index)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete Link"
                  >
                    <Trash2 size={18} />
                  </button>
                  <a
                    href={link.url}
                    target="_blank"
                    className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors inline-block"
                    title="Open Link"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default App;



