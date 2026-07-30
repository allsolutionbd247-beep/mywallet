"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Wallet,
  ShieldCheck,
  Pencil,
  Save,
  LogIn,
  ChevronDown,
} from "lucide-react";


export default function UserProfileManagement() {


  const [open, setOpen] = useState(false);

  const [editMode, setEditMode] = useState(false);



  const [userData, setUserData] = useState({

    fullName: "Rahim Ahmed",

    email: "rahim@email.com",

    phone: "+8801700000000",

    dateOfBirth: "12-05-1998",

    country: "Bangladesh",

    address: "Gulshan Road 12, Dhaka",

    primaryCurrency: "BDT",

    accountCreated: "30-07-2026",

    emailVerified: "Verified",

    kycStatus: "Approved",

    walletId: "WAL-100245",

    balance: "৳25,000",

  });



  const handleChange = (
    field: string,
    value: string
  ) => {

    setUserData((prev)=>({

      ...prev,

      [field]: value,

    }));

  };



  const saveProfile = () => {

    console.log(
      "Updated Profile:",
      userData
    );

    setEditMode(false);

  };

  return (

<div className="
mt-5
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
bg-indigo-50
hover:bg-indigo-100
transition
"

>


<div>

<h3 className="
text-lg
font-bold
text-indigo-700
">

User Profile Management

</h3>


<p className="
text-xs
text-gray-500
mt-1
">

View and edit user profile information

</p>


</div>


<ChevronDown

size={20}

className={`

text-indigo-600

transition

${open ? "rotate-180" : ""}

`}

/>


</button>




{open && (

<div className="
p-5
space-y-5
">



{/* Edit Button */}

<div className="
flex
justify-end
">

<button

onClick={()=>setEditMode(!editMode)}

className="
flex
items-center
gap-2
bg-blue-600
text-white
text-xs
px-4
py-2
rounded-lg
"

>

<Pencil size={14}/>

{editMode ? "Close Edit" : "Edit Profile"}

</button>


</div>




{/* Personal Information */}

<div>


<h4 className="
text-sm
font-bold
text-gray-700
mb-3
">

Personal Information

</h4>



<div className="
grid
grid-cols-1
md:grid-cols-2
gap-4
">


{[

["fullName","Full Name"],

["email","Email"],

["phone","Phone Number"],

["dateOfBirth","Date of Birth"],

["country","Country"],

["address","Address"],

["primaryCurrency","Primary Currency"],

].map(([key,label])=>(


<div

key={key}

className="
bg-gray-50
rounded-xl
p-4
"

>


<p className="
text-xs
text-gray-500
mb-1
">

{label}

</p>



{editMode ? (

<input

value={(userData as any)[key]}

onChange={(e)=>

handleChange(
key,
e.target.value
)

}

className="
w-full
border
border-gray-200
rounded-lg
px-3
py-2
text-sm
bg-white
"

/>


) : (


<p className="
font-semibold
text-gray-800
">

{(userData as any)[key]}

</p>


)}


</div>


))}



</div>


</div>





{/* Account Information */}


<div>

<h4 className="
text-sm
font-bold
text-gray-700
mb-3
">

Account Information

</h4>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-3
">


<div className="
bg-emerald-50
rounded-xl
p-4
">

<p className="
text-xs
text-emerald-600
">

Email Verification

</p>

<p className="
font-bold
text-gray-800
">

{userData.emailVerified}

</p>

</div>



<div className="
bg-purple-50
rounded-xl
p-4
">

<p className="
text-xs
text-purple-600
">

KYC Status

</p>

<p className="
font-bold
text-gray-800
">

{userData.kycStatus}

</p>

</div>



<div className="
bg-blue-50
rounded-xl
p-4
">

<p className="
text-xs
text-blue-600
">

Account Created

</p>

<p className="
font-bold
text-gray-800
">

{userData.accountCreated}

</p>

</div>


</div>

</div>





{/* Wallet Information */}

<div>

<h4 className="
text-sm
font-bold
text-gray-700
mb-3
">

Wallet Information

</h4>


<div className="
grid
grid-cols-1
md:grid-cols-2
gap-3
">


<div className="
bg-gray-50
rounded-xl
p-4
">

<p className="
text-xs
text-gray-500
">

Primary Wallet ID

</p>

<p className="
font-bold
">

{userData.walletId}

</p>

</div>



<div className="
bg-green-50
rounded-xl
p-4
">

<p className="
text-xs
text-green-600
">

Available Balance

</p>

<p className="
font-bold
">

{userData.balance}

</p>

</div>


</div>


</div>

{/* Admin Actions */}

<div className="
border-t
pt-5
mt-5
">


<h4 className="
text-sm
font-bold
text-gray-700
mb-3
">

Admin Actions

</h4>



<div className="
flex
gap-3
flex-wrap
">



<button

onClick={saveProfile}

className="
flex
items-center
gap-2
bg-emerald-600
hover:bg-emerald-700
text-white
text-xs
px-5
py-2.5
rounded-lg
transition
"

>

<Save size={15}/>

Save Changes

</button>




<button

onClick={()=>{

console.log(
"Login as User:",
userData.email
);

}}

className="
flex
items-center
gap-2
bg-blue-600
hover:bg-blue-700
text-white
text-xs
px-5
py-2.5
rounded-lg
transition
"

>

<LogIn size={15}/>

Login as User

</button>



</div>


</div>



</div>

)}


</div>

);

}
