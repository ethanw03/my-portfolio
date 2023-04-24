import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/* Social Icons */}
        <SocialIcon url="https://github.com/ethanw03" />
        <SocialIcon url="https://www.linkedin.com/in/ethanw03/" />
        <SocialIcon url="https://www.instagram.com/ethancodes/" />
      </div>
    </header>
  );
}
