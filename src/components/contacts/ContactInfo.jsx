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
        <h2 className="text-4xl font-bold">
          {info.heading}
        </h2>

        <p className="text-gray-500 mt-4 leading-8">
          {info.description}
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-6">

        {/* Phone */}

        <div className="flex items-start gap-4">

          <div className="p-4 rounded-xl bg-black text-white">
            <FaPhoneAlt />
          </div>

          <div>
            <h4 className="font-semibold">
              Phone
            </h4>

            <p className="text-gray-500">
              {info.phone}
            </p>
          </div>

        </div>

        {/* Email */}

        <div className="flex items-start gap-4">

          <div className="p-4 rounded-xl bg-black text-white">
            <FaEnvelope />
          </div>

          <div>
            <h4 className="font-semibold">
              Email
            </h4>

            <p className="text-gray-500">
              {info.email}
            </p>
          </div>

        </div>

        {/* Address */}

        <div className="flex items-start gap-4">

          <div className="p-4 rounded-xl bg-black text-white">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h4 className="font-semibold">
              Address
            </h4>

            <p className="text-gray-500">
              {info.address}
            </p>
          </div>

        </div>

        {/* Office Hours */}

        <div className="flex items-start gap-4">

          <div className="p-4 rounded-xl bg-black text-white">
            <FaClock />
          </div>

          <div>
            <h4 className="font-semibold">
              Office Hours
            </h4>

            <p className="text-gray-500">
              {info.officeHours}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;