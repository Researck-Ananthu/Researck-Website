"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { PhoneIcon } from "lucide-react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import { FaMapLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import Rk from "@/assets/images/logos/RK.png";
import { footerContent } from "@/lib/constant";

const FooterSection = () => {
    const getIconComponent = (iconName: string): ReactNode => {
        const icons: { [key in typeof iconName]: ReactNode } = {
            FaMapLocationDot: (
                <FaMapLocationDot className="h-5 w-5 text-emerald-800" />
            ),
            PhoneIcon: (
                <PhoneIcon className="h-5 w-5 text-emerald-800 fill-emerald-800" />
            ),
            EmailRoundedFillIcon: <EmailRoundedFillIcon />,
        };

        return icons[iconName] || null;
    };

    return (
        <footer className=" container pt-16 pb-10 mx-auto border-t divide-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 max-lg:gap-10 border-b-2 pb-10 lg:pb-14 border-gray-200 lg:divide-x-2 divide-gray-200 ">
                    {/* Open - Contact Section */}
                    <div className="pr-9 lg:col-span-7 xl:pr-16">
                        <h5 className="text-lg font-medium text-gray-900 max-md:text-center mb-7">
                            {footerContent.contact.title}
                        </h5>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 border-b-2 border-gray-200">
                            {footerContent.contact.details.map(
                                (detail, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row items-center gap-2.5"
                                    >
                                        {getIconComponent(detail.icon)}
                                        <p className="text-base font-normal text-gray-600">
                                            {detail.text}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Open - Nav section */}
                        <nav className="flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-14 xl:gap-24 pt-14">
                            {footerContent.sections.map((section, index) => (
                                <div key={index} className="block">
                                    <h6 className="text-lg font-medium text-gray-900 mb-7 max-md:text-center">
                                        {section.title}
                                    </h6>
                                    <ul className="flex flex-col max-md:items-center gap-6">
                                        {section.links.map((link, i) => (
                                            <li key={`${link.name}` + i}>
                                                <Link
                                                    href={link.href}
                                                    className="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                        {/* Close - Nav section */}
                    </div>
                    {/* Close - Contact Section */}

                  {/* Open - Newsletter Section */}
                    <div className="lg:col-span-5  lg:pl-9 xl:pl-16 col-start-1 max-lg:row-start-1">
                        <Link
                            href="#"
                            className="mb-9 flex justify-start items-center gap-2 max-md:mx-auto max-md:flex max-md:w-full"
                        >
                            <div></div>
                            <Image
                                src={Rk}
                                alt="Researck"
                                width="165"
                                height="33"
                                className="w-14 h-14"
                            />
                            <p className="text-lg font-medium text-gray-900">
                                Researck
                            </p>
                        </Link>
                        <h2 className="font-manrope font-semibold text-2xl max-md:text-center leading-9 text-gray-900 mt-9 mb-5">
                          {footerContent.newsletter.headline}
                        </h2>
                        <p className="text-base font-normal text-gray-500 max-md:text-center mb-8">
                          {footerContent.newsletter.description}
                        </p>
                        <div className="relative max-w-xs max-md:max-w-full max-md:mx-auto  text-gray-500 focus-within:text-gray-900 mb-5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                                <EmailRoundedOutlineIcon />
                            </div>
                            <input
                                type="text"
                                id="default-search"
                                className="block w-full md:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
                                placeholder={footerContent.newsletter.placeholder}
                            />
                        </div>
                        <button className="py-2.5 px-7 max-md:w-full max-md:text-center rounded-full max-md:mx-auto flex items-center justify-center bg-emerald-800 text-base font-semibold text-white mb-8 transition-all duration-500 hover:bg-emerald-900">
                          {footerContent.newsletter.buttonText}
                        </button>
                        <div className="flex items-center max-md:justify-center gap-4">
                            <Link
                                href="#"
                                className="text-black transition-all duration-500 hover:text-emerald-800 focus-within:text-emerald-800 focus-within:outline-0"
                            >
                                <FaSquareXTwitter className="size-8" />
                            </Link>
                            <Link
                                href="#"
                                className="text-black transition-all duration-500 hover:text-emerald-800 focus-within:text-emerald-800 focus-within:outline-0"
                            >
                                <FaInstagramSquare className="size-8" />
                            </Link>
                            <Link
                                href="#"
                                className="text-black transition-all duration-500 hover:text-emerald-800 focus-within:text-emerald-800 focus-within:outline-0"
                            >
                                <FaFacebookSquare className="size-8" />
                            </Link>
                            <Link
                                href="#"
                                className="text-black transition-all duration-500 hover:text-emerald-800 focus-within:text-emerald-800 focus-within:outline-0"
                            >
                                <FaYoutubeSquare className="size-8" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* */}
                <div className="max-w-5xl mx-auto flex flex-col items-center justify-center pt-7">
                    <p className="text-sm font-normal text-gray-500">
                        <a href="https://pagedone.io/">{footerContent.copyright.text}</a>
                    </p>
                    <p className="text-center text-sm text-gray-500/75 mt-4">
                      {footerContent.copyright.policy}
                    </p>
                </div>
                {/*  */}
            </div>
        </footer>
    );
};
export default FooterSection;

const EmailRoundedFillIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
        >
            <path
                d="M0.980369 2.24792C1.71093 1.28666 2.86648 0.666016 4.16699 0.666016H12.5003C13.7782 0.666016 14.9162 1.26527 15.6485 2.19809C15.6369 2.2106 15.6257 2.22364 15.615 2.23721L14.8684 3.18004L13.1551 5.20653C12.1329 6.41561 11.7452 6.85169 11.2425 7.08496C10.7399 7.31822 10.1565 7.33272 8.57326 7.33273H8.09451C6.51086 7.33271 5.92743 7.31822 5.42467 7.08486C4.92191 6.8515 4.53424 6.41525 3.51199 5.20572L1.80012 3.18021L1.79155 3.17028L0.980369 2.24792Z"
                fill="#065F46"
            />
            <path
                d="M0.331033 3.52856C0.224291 3.88909 0.166992 4.27086 0.166992 4.66602V11.3327C0.166992 13.5418 1.95785 15.3327 4.16699 15.3327H12.5003C14.7095 15.3327 16.5003 13.5418 16.5003 11.3327V4.66602C16.5003 4.25643 16.4388 3.86122 16.3244 3.48914L15.9071 4.01614C15.9027 4.02173 15.8981 4.02725 15.8935 4.0327L14.0746 6.18411C13.1883 7.23323 12.6064 7.92194 11.8038 8.29441C11.0011 8.66689 10.0995 8.66657 8.7261 8.6661L7.94163 8.6661C6.56792 8.66657 5.66611 8.66688 4.86332 8.29426C4.06053 7.92164 3.47866 7.23268 2.5923 6.18317L0.786009 4.04589L0.331033 3.52856Z"
                fill="#065F46"
            />
        </svg>
    );
};

const EmailRoundedOutlineIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M2.95739 5.61072L6.47281 7.80147C8.18826 8.87052 9.04599 9.40504 9.99991 9.40489C10.9538 9.40474 11.8114 8.86994 13.5265 7.80035L17.0509 5.60245M9.16667 16.6663H10.8333C13.976 16.6663 15.5474 16.6663 16.5237 15.69C17.5 14.7137 17.5 13.1424 17.5 9.99967C17.5 6.85698 17.5 5.28563 16.5237 4.30932C15.5474 3.33301 13.976 3.33301 10.8333 3.33301H9.16667C6.02397 3.33301 4.45262 3.33301 3.47631 4.30932C2.5 5.28563 2.5 6.85698 2.5 9.99967C2.5 13.1424 2.5 14.7137 3.47631 15.69C4.45262 16.6663 6.02397 16.6663 9.16667 16.6663Z"
                stroke="#111827"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
