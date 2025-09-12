import Link from "next/link";
import React from "react";

export default function CTAContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const phoneNumber = "263776193195";
  const message = encodeURIComponent(
    "Hello, I would like to know more about your services!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
