"use client";

import Image from "next/image";
import loginbg from "../../../public/images/login.png";
import logo from "../../../public/images/milagra.png";

export default function login() {
    return (
        <div
            className="flex h-screen items-center justify-center bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${loginbg.src})` }}
        >
            <div className="bg-white/80 rounded-xl lg:p-8 py-2 px-6 w-full max-w-md flex flex-col items-center gap-2 lg:gap-4 shadow-lg ">
                <Image src={logo} alt="Logo" width={120} height={50} />
                <h2 className="text-[#555451] md:text-3xl text-xl font-semibold">ADMIN LOGIN</h2>
               
                <div className="flex flex-col gap-4 w-full mt-4 ">
                    <div>
                        <label className="text-sm lg:text-lg">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-[#3E2B24] lg:p-4 p-2 w-full rounded-xl text-sm md:text-md"
                        />
                    </div>
                    <div>
                        <label className="text-sm lg:text-lg">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border lg:p-4 w-full p-2 rounded-xl border-[#3E2B24] text-sm md:text-md"
                        />
                    </div>
                    <div className="flex justify-center items-center mb-6">
                        <button className="bg-[#845607]  text-[#fff] border-[#C4910D] hover:bg-[#fff] hover:text-[#C4910D] w-1/2 rounded-xl py-2 px-4 text-sm md:text-lg">
                            Submit
                        </button>
                    </div>
                </div>

               
            </div>
        </div>
    );
}
