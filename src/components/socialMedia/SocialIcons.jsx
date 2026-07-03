import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
  FaPinterest,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const icons = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  phone: FaPhoneAlt,
  email: FaEnvelope,
  address: FaMapMarkerAlt,
};

function SocialIcons({ name, href, size = 28 }) {
  const Icon = icons[name];

  if (!Icon) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-hover"
    >
      <Icon size={size} />
    </a>
  );
}

export default SocialIcons;
