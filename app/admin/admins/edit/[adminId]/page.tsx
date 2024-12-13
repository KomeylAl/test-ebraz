import EditAdminCompo from "@/app/admin/_components/EditAdminCompo";
import axios from "axios";
import { cookies } from "next/headers";

interface EditAdminsPageProps {
  params: Promise<{ adminId: string }>
}

export default async function EditAdmins({ params }: EditAdminsPageProps) {
  
   const cookie = await cookies()
   const token = cookie.get('token')

   const { adminId } = await params
 
   let admin: any;
   await axios
     .get(
       `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/admins/${adminId}`,
       {
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
       }
     )
     .then(function (response) {
       admin = response.data;
     })
     .catch(function (error) {
       console.log(error);
       return
     });
 
   return ( 
     <EditAdminCompo data={admin[0]} token={token?.value} />
   );
 }