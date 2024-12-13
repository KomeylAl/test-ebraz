'use client';

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface AdminEditCompProps {
  data: any;
  token: string | undefined;
}

const EditAdminCompo = ({ data }: AdminEditCompProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleBirthDateChange = (value: any) => {
    setBirthDate(value.toString());
  };

  const handleSubmit = async (e: any) => {
    //  setIsLoading(true);
    //  await axios
    //    .patch(
    //      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/admins/${data.id}/edit`,
    //      {
    //        name: name || data.name,
    //        phone: phone || data.phone,
    //        address: address || data.address,
    //        birth_date: birthDate || data.birth_date,
    //      },
    //      {
    //        headers: {
    //          Accept: "application/json",
    //          "Content-Type": "application/json",
    //          Authorization: `Bearer ${token}`,
    //        },
    //      }
    //    )
    //    .then(function (response) {
    //      if (response.status === 200) {
    //        toast.success("اطلاعات با موفقیت بروز رسانی شد");
    //        router.refresh();
    //        router.push("/admin/admins");
    //      } else {
    //        toast.error("خطا در بروز رسانی اطلاعات");
    //      }
    //    })
    //    .catch(function (error) {
    //      console.log(error);
    //      toast("خطا در برقراری ارتباط با سرور");
    //    })
    //    .finally(() => setIsLoading(false));
  };

  if (!data) {
    return <div>در حال دریافت اطلاعات</div>;
  }
  return (
    <div className="w-full h-full flex flex-col">
      {/* <Header pageTitle="ویرایش اطلاعات ادمین" /> */}
      <div className="w-full h-full p-8 flex flex-col">
        <div className="w-full flex gap-3 mt-9">
          <div className="w-full">
            <label>نام و نام خانوادگی</label>
            <input
              placeholder={data.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
          <div className="w-full">
            <label>آدرس</label>
            <input
              placeholder={data.address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
        </div>
        <div className="w-full flex gap-3 mt-9">
          <div className="w-full">
            <label>شماره تلفن</label>
            <input
              placeholder={data.phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
          <div className="w-full">
            <label>تاریخ تولد</label>
            <div className="w-full"></div>
          </div>
        </div>
        <div className="flex gap-3">
          <div
            onClick={handleSubmit}
            className={`
        mt-9 w-52 cursor-pointer text-center rounded-md py-2 text-white
        ${isLoading ? "bg-blue-400" : "bg-blue-700"}
    `}
          >
            ویرایش اطلاعات
          </div>
          <div
            onClick={handleSubmit}
            className={`
        mt-9 w-52 cursor-pointer text-center rounded-md py-2 text-white
        ${isLoading ? "bg-amber-300" : "bg-amber-500"}
    `}
          >
            ویرایش رمز عبور
          </div>
          <div
            onClick={handleSubmit}
            className={`
        mt-9 w-52 cursor-pointer text-center rounded-md py-2 text-white
        ${isLoading ? "bg-rose-300" : "bg-rose-500"}
    `}
          >
            حذف
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdminCompo;
