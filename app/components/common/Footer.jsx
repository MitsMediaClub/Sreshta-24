"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Footer() {
  return(
  <div className='flex items-center justify-between pt-16 pr-8 pl-8 pb-6'>
  <div className='flex items-center'>
      <Image
          src='/assets/nav/Shreshta.png'
          width={100}
          height={100}
          alt='Shreshta Logo' />
      <div className='bangers text-6xl text-[#285F5F]'>SHRESHTA</div>
  </div>
  <div className='gooddog text-4xl text-[#285F5F]'>© 2024 MITS. All rights reserved.</div>
</div>
  );
}
