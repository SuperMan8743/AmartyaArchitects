import React from "react";

function ContactMap({ embedUrl }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <div className="mb-10 text-center">

        <h2 className="text-5xl font-bold">
          Find Us
        </h2>

        <p className="mt-4 text-gray-500">
          Visit our office or schedule a meeting with our team.
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">

        <iframe
          src={embedUrl}
          width="100%"
          height="550"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          title="Google Map"
        />

      </div>

    </section>
  );
}

export default ContactMap;