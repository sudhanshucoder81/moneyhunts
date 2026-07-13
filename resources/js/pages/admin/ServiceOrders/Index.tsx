import { Link } from "@inertiajs/react";
import { useState } from "react";

import {
    Search,
    ShoppingCart,
    CheckCircle2,
    XCircle,
    Clock3,
    Eye,
    FileText,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";


interface Props {

    orders: {
        data: any[];
    };

}


export default function Index({ orders }: Props) {


    const [search, setSearch] = useState("");


    const filtered = orders.data.filter((order) =>

        order.order_no
            ?.toLowerCase()
            .includes(search.toLowerCase())

        ||

        order.user?.name
            ?.toLowerCase()
            .includes(search.toLowerCase())

        ||

        order.reg_no
            ?.toLowerCase()
            .includes(search.toLowerCase())

    );


    const pending = orders.data.filter(
        (x) => x.status === 0
    ).length;


    const success = orders.data.filter(
        (x) => x.status === 1
    ).length;


    const cancel = orders.data.filter(
        (x) => x.status === 2
    ).length;



    const statusBadge = (status:number)=>{


        if(status === 1)
        {
            return (
                <Badge className="bg-green-600 rounded-full">
                    Success
                </Badge>
            )
        }


        if(status === 2)
        {
            return (
                <Badge variant="destructive" className="rounded-full">
                    Cancel
                </Badge>
            )
        }


        return (
            <Badge className="bg-yellow-500 rounded-full">
                Pending
            </Badge>
        )

    }



    return (

<div className="">


{/* Header */}

<div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">


<div className="flex flex-col lg:flex-row justify-between gap-5">


<div>

<h1 className="text-3xl font-bold flex items-center gap-3">

<ShoppingCart size={35}/>

Service Orders

</h1>


<p className="text-blue-100 mt-3">

Manage customer service orders and payment status.

</p>


</div>


</div>


</div>




{/* Statistics */}


<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">


<Card className="rounded-3xl border-0 shadow-lg">

<CardContent className="p-6">

<div className="flex justify-between">


<div>

<p className="text-gray-500">
Total Orders
</p>


<h2 className="text-4xl font-bold text-[#293878] mt-2">

{orders.data.length}

</h2>


</div>


<div className="bg-blue-100 text-[#293878] p-4 rounded-2xl">

<FileText size={32}/>

</div>


</div>

</CardContent>

</Card>





<Card className="rounded-3xl border-0 shadow-lg">

<CardContent className="p-6">


<div className="flex justify-between">


<div>

<p className="text-gray-500">
Pending
</p>


<h2 className="text-3xl font-bold text-yellow-600">

{pending}

</h2>


</div>


<div className="bg-yellow-100 text-yellow-600 p-4 rounded-2xl">

<Clock3 size={32}/>

</div>


</div>


</CardContent>

</Card>






<Card className="rounded-3xl border-0 shadow-lg">

<CardContent className="p-6">


<div className="flex justify-between">


<div>

<p className="text-gray-500">
Success
</p>


<h2 className="text-3xl font-bold text-green-600">

{success}

</h2>


</div>


<div className="bg-green-100 text-green-600 p-4 rounded-2xl">

<CheckCircle2 size={32}/>

</div>


</div>


</CardContent>

</Card>






<Card className="rounded-3xl border-0 shadow-lg">

<CardContent className="p-6">


<div className="flex justify-between">


<div>

<p className="text-gray-500">
Cancelled
</p>


<h2 className="text-3xl font-bold text-red-600">

{cancel}

</h2>


</div>


<div className="bg-red-100 text-red-600 p-4 rounded-2xl">

<XCircle size={32}/>

</div>


</div>


</CardContent>

</Card>



</div>





{/* Search */}


<Card className="mt-8 rounded-3xl border-0 shadow-lg">

<CardContent className="p-6">


<div className="relative">


<Search
className="absolute left-4 top-3.5 text-gray-400"
/>


<input

type="text"

placeholder="Search Order No / User / Reg No..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full h-12 rounded-xl border pl-12 focus:ring-4 focus:ring-[#293878]/20 outline-none"

/>


</div>


</CardContent>

</Card>







{/* Table */}


<Card className="mt-8 rounded-3xl border-0 shadow-lg">


<CardContent className="p-0">


<div className="overflow-x-auto">


<table className="w-full">


<thead className="bg-slate-100">


<tr>


<th className="px-6 py-4 text-left">
Sr No.
</th>


<th className="px-6 py-4 text-left">
Order No
</th>


<th className="px-6 py-4 text-left">
 Name
</th>


<th className="px-6 py-4 text-left">
Reg No
</th>


<th className="px-6 py-4 text-center">
Services
</th>


<th className="px-6 py-4 text-right">
Amount
</th>


<th className="px-6 py-4 text-center">
Status
</th>


<th className="px-6 py-4 text-center">
Action
</th>


</tr>


</thead>



<tbody>


{
filtered.length > 0 ?

filtered.map((order,index)=>(


<tr
key={order.id}
className="border-b hover:bg-slate-50 transition"
>


<td className="px-6 py-5 font-bold">

{index+1}

</td>



<td className="px-6 py-5 font-semibold text-[#293878]">

{order.order_no}

</td>



<td className="px-6 py-5">

{order.user?.name ?? "-"}

</td>



<td className="px-6 py-5">

{order.reg_no}

</td>



<td className="px-6 py-5 text-center">

<Badge variant="secondary">

{order.details?.length ?? 0}

</Badge>

</td>



<td className="px-6 py-5 text-right font-semibold">

₹ {order.total_amount}

</td>



<td className="px-6 py-5 text-center">

{statusBadge(order.status)}

</td>




<td className="px-6 py-5 text-center">


<Link href={`/admin/service-orders/${order.id}`}>

<Button
size="icon"
className="rounded-xl bg-[#293878]"
>


<Eye size={18}/>


</Button>


</Link>


</td>



</tr>


))


:

<tr>

<td
colSpan={8}
className="py-16 text-center"
>


<h3 className="text-xl font-bold">

No Orders Found

</h3>


<p className="text-gray-500">

No service orders available.

</p>


</td>


</tr>


}



</tbody>


</table>


</div>


</CardContent>


</Card>




</div>


    );

}