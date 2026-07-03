import React, { useEffect, useState } from "react";

import { getContactPage } from "../api/api";

import PageHero from "../components/pagehero/PageHero"

import {
  ContactInfo,
  ContactForm,
  ContactMap,
} from "../components/contacts";

function ContactPage() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    async function loadContactPage() {
      const data = await getContactPage();
      setContactData(data);
    }

    loadContactPage();
  }, []);

  if (!contactData) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Hero */}

      <PageHero
        image={contactData.hero.bannerImage}
        title={contactData.hero.title}
        subTitle={contactData.hero.subTitle}
      />

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20">

          <ContactInfo
            info={contactData.info}
          />

          <ContactForm
            form={contactData.form}
          />

        </div>

      </section>

      {/* Map */}

      <ContactMap
        embedUrl={contactData.map.embedUrl}
      />
    </>
  );
}

export default ContactPage;