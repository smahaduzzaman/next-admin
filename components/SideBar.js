import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";

const SideBar = forwardRef(({ showNav }, ref) => {
    const router = useRouter();

    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <picture>
                    <img
                        className="w-32 h-auto"
                        src="/ferox-transparent.png"
                        alt="company logo"
                    />
                </picture>
            </div>
        </div>
    )

})

SideBar.displayName = "SideBar";

export default SideBar;