import React from "react";
import logo from './../../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white mt-20">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="logo" />
                        </div>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">Curated tools, technologies, and resources for developers building modern software.</p>

                        <div className="mt-4 flex items-center gap-4">
                            <a href="#" className="text-xs text-gray-500 transition hover:text-gray-900">GitHub</a>
                            <a href="#" className="text-xs text-gray-500 transition hover:text-gray-900">Twitter</a>
                            <a href="#" className="text-xs text-gray-500 transition hover:text-gray-900">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-900">Product</h3>

                        <ul className="space-y-3">
                            <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900" >Home</a></li>

                            <li> <a href="#" className="text-xs text-gray-500 hover:text-gray-900" >Technologies</a></li>

                            <li> <a href="#" className="text-xs text-gray-500 hover:text-gray-900">Projects</a></li>
                        </ul>
                    </div>

                    {/* Company + Legal */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Company */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-900">Company</h3>

                            <ul className="space-y-3">
                                <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900">About</a></li>

                                <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900">Contact</a></li>

                                <li> <a href="#" className="text-xs text-gray-500 hover:text-gray-900" >Careers</a> </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-gray-900">Legal</h3>

                            <ul className="space-y-3">
                                <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900">Privacy Policy</a></li>

                                <li><a href="#" className="text-xs text-gray-500 hover:text-gray-900">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-100">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 DevStack. All rights reserved.</p>

                    <div className="flex gap-5">
                        <a href="#" className="transition hover:text-gray-700">Privacy</a>

                        <a href="#" className="transition hover:text-gray-700">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;