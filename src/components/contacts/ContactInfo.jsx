import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function ContactInfo({ info }) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold">{info.heading}</h2>

        <p className="text-gray-500 mt-4 leading-8">{info.description}</p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-6">
        {/* Phone */}

        <div className="flex items-start gap-4">
          <a
              href={`tel:${info.phone}`}
              className="flex items-center gap-4 text-hover"
            >
          <div className="p-4 rounded-xl bg-black text-white">
            <FaPhoneAlt />
          </div>

          <div>
            
              <div>
                <h4 className="font-semibold">Phone</h4>

                <p className="text-gray-500">{info.phone}</p>
              </div>
            
          </div>
          </a>
        </div>

        {/* Email */}

        <div className="flex items-start gap-4">
           <a
            href={`mailto:${info.email}`}
            className="flex items-center gap-4 text-hover"
          >
          <div className="p-4 rounded-xl bg-black text-white">
            <FaEnvelope />
          </div>
         
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-500 hover:text-hover transition-colors duration-300">
                {info.email}
              </p>
            </div>
          </a>
        </div>

        {/* Address */}

        <div className="flex items-start gap-4">
          <a
            href="https://maps.app.goo.gl/uTJRrFRRVATaioac9"
           target="_blank"
            className="flex items-center gap-4 text-hover "
          >
          <div className="p-4 rounded-xl bg-black text-white">
            <FaMapMarkerAlt />
          </div>
          
          <div>
            <h4 className="font-semibold  text-hover">Address</h4>
            <p className="text-gray-500">{info.address}</p>
          </div>
          </a>
        </div>

        {/* Office Hours */}

        <div className="flex items-start gap-4">
          <div className="p-4 rounded-xl bg-black text-white text-hover">
            <FaClock />
          </div>

          <div className="text-hover">
            <h4 className="font-semibold">Office Hours</h4>

            <p className="text-gray-500">{info.workingHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
