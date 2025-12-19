import { useState } from "react";

import ModalContent from "../ui/ModalContent";

export default function Header(){
  const [open, setOpen] = useState(false)

    return <><div
  onClick={() => setOpen(true)}
  className="w-full h-18 sm:h-28 flex items-center px-4 cursor-pointer"
>
  <div className="relative w-full h-full">
    <img
      src="/logo.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </div>
</div>
{/* BackgroundImage */}
 <div className="fixed inset-0 w-full h-full -z-10">
      <img
        src="/todoezelbg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
{open && <ModalContent onClose={() => setOpen(false)} />}</>
}
 