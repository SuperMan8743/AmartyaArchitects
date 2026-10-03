import React, { useEffect, useState } from "react";
import { getVlogs } from "../api/api";
import PageSkeleton from "../components/pageSkeleton/PageSkeleton";

// Normal YouTube URL ko embed URL me convert karega
function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    // youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // youtube.com/shorts/VIDEO_ID
      if (parsedUrl.pathname.includes("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }
    }

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return "";
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return "";
  }
}

function VlogPage() {
  const [vlogs, setVlogs] = useState(null);

  useEffect(() => {
    async function loadVlogs() {
      try {
        const data = await getVlogs();

        console.log("VLOGS:", data);

        setVlogs(data);
      } catch (error) {
        console.error("VLOG ERROR:", error);
        setVlogs([]);
      }
    }

    loadVlogs();
  }, []);

  if (!vlogs) {
    return <PageSkeleton />;
  }

  return (
    <section className="min-h-screen bg-[#0B1623] px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-3">
            Amartya Architects
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Vlogs
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            Explore our projects, design process and architectural journey.
          </p>
        </div>

        {/* No Vlogs */}
        {vlogs.length === 0 && (
          <p className="text-gray-400">
            No vlogs available right now.
          </p>
        )}

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-8">
          {vlogs.map((vlog) => {
            const embedUrl = getYoutubeEmbedUrl(vlog.youtubeUrl);

            if (!embedUrl) return null;

            return (
              <article
                key={vlog.id}
                className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden"
              >
                {/* YouTube Player */}
                <div className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title={vlog.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Title */}
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {vlog.title}
                  </h2>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default VlogPage;