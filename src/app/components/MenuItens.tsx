'use client'
import Link from "next/link"
import React, { useState } from 'react';

type MenuProps = {
  mobile?: any;
}

export default function ManuItens(props: MenuProps) {
  const [btnActive, setBtnActive] = useState("home")

  return (
    <>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "home" && "active"}`} onClick={() => setBtnActive("home")} href="/">Home</Link>
      </li>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "sobre" && "active"}`} onClick={() => setBtnActive("sobre")} href="/sobre">Sobre</Link>
      </li>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "graduacao" && "active"}`} onClick={() => setBtnActive("graduacao")} href="/graduacao">Graduação</Link>
      </li>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "galeria" && "active"}`} onClick={() => setBtnActive("galeria")} href="/galeria">Galeria</Link>
      </li>
      <li className="nav-item" data-bs-dismiss={`${props.mobile}`}>
        <Link className={`nav-link ${btnActive === "contato" && "active"}`} onClick={() => setBtnActive("contato")} href="/contato">Contato</Link>
      </li>
    </>
  )
}
