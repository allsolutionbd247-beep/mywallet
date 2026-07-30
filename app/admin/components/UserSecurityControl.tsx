"use client";

import { useState } from "react";
import { ChevronDown, Copy, ShieldCheck } from "lucide-react";

export default function UserSecurityControl() {

  const [open, setOpen] = useState(false);

  const [copied, setCopied] = useState("");

  const [holdAmount, setHoldAmount] = useState(0);

  const [showReleaseConfirm, setShowReleaseConfirm] =
    useState(false);

  const [holdReleased, setHoldReleased] =
    useState(false);


  const copyText = async (text:string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);

    setTimeout(() => {
      setCopied("");
    },1500);
  };

  return (

<div className="
mt-6
bg-white
rounded-xl
border
border-gray-100
shadow-sm
overflow-hidden
">


{/* Header */}

<button
onClick={()=>setOpen(!open)}
className="
w-full
flex
justify-between
items-center
p-5
bg-red-50
hover:bg-red-100
"
>

<div>

<h4 className="
text-sm
font-bold
text-gray-800
">

User Security Control

</h4>


<p className="
text-xs
text-gray-500
">

Security, reset and fraud protection

</p>


</div>


<ChevronDown
size={20}
className={open ? "rotate-180":""}
/>


</button>



{open && (

<div className="
p-5
space-y-4
">



{/* Email Reset */}

<div className="
bg-gray-50
rounded-xl
p-4
flex
justify-between
">

<div>

<p className="text-xs text-gray-500">
Email Reset
</p>

<p className="font-semibold">
user@email.com
</p>

</div>


<button
className="
bg-blue-600
text-white
text-xs
px-3
py-2
rounded-lg
"
>

Reset Email

</button>


</div>





{/* PIN Reset */}

<div className="
bg-gray-50
rounded-xl
p-4
flex
justify-between
">

<div>

<p className="text-xs text-gray-500">
PIN Reset
</p>

<p className="font-semibold">
User PIN Security
</p>

</div>


<button
className="
bg-purple-600
text-white
text-xs
px-3
py-2
rounded-lg
"
>

Reset PIN

</button>


</div>





{/* Fraud Hold */}

<div className="
bg-orange-50
border
border-orange-100
rounded-xl
p-4
">


<p className="
text-xs
text-orange-600
">

Fraud Hold Balance

</p>


<div className="
flex
gap-3
mt-3
">


<input
type="number"
placeholder="Enter amount"
className="
border
rounded-lg
px-3
py-2
text-sm
"
/>


<button
className="
bg-orange-600
text-white
px-4
py-2
rounded-lg
text-xs
"
>

Hold Balance

</button>


</div>


</div>

{/* Release Hold */}

<div className="
bg-emerald-50
border
border-emerald-100
rounded-xl
p-4
flex
justify-between
items-center
">


<div>

<p className="
text-xs
text-emerald-600
">

Active Hold

</p>


<p className="
font-bold
">

${holdAmount} USD

</p>


</div>


<button
onClick={()=>setShowReleaseConfirm(true)}
className="
bg-emerald-600
text-white
text-xs
px-4
py-2
rounded-lg
"
>

Release Hold

</button>


</div>





{/* Confirmation */}

{showReleaseConfirm && (

<div className="
bg-yellow-50
border
border-yellow-200
rounded-xl
p-4
">


<p className="
text-sm
font-semibold
">

Release held balance?

</p>


<div className="
flex
gap-3
mt-3
">


<button
onClick={()=>setShowReleaseConfirm(false)}
className="
bg-gray-200
px-4
py-2
rounded-lg
text-xs
"
>

Cancel

</button>


<button
onClick={()=>{
setHoldReleased(true);
setShowReleaseConfirm(false);
}}
className="
bg-emerald-600
text-white
px-4
py-2
rounded-lg
text-xs
"
>

Confirm Release

</button>


</div>

</div>

)}



{holdReleased && (

<div className="
bg-emerald-50
rounded-xl
p-4
">

<p className="
text-emerald-700
font-bold
text-sm
">

Fraud Hold Released Successfully

</p>


</div>

)}



</div>

)}


</div>

);

}
