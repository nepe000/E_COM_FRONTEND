/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ISign } from "@/interface/auth/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { registerSchema } from "@/schemas/register.schema";
import GenderInput from "../component/ui/gender-input";

const RegisterPage = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISign>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: {},
      confirm_password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<ISign> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center md:gap-6 p-4 w-full md:w-[500px] bg-white shadow-lg rounded-lg"
      >
        {/* First Name & Last Name side by side */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col ">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.firstName && (
              <p className="text-xs text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.lastName && (
              <p className="text-xs text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-gray-700">Email</label>

          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors?.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-gray-700">Password</label>

          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors?.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            {...register("confirm_password")}
            type="password"
            placeholder="Confirm Password"
            className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.confirm_password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors?.confirm_password && (
            <p className="text-xs text-red-500">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            {...register("phoneNumber")}
            type="text"
            placeholder="Phone Number"
            className={`mt-1 p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors?.phoneNumber && (
            <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <GenderInput control={control} />
        </div>

        <button
          type="submit"
          className="w-full text-lg font-semibold px-4 py-2 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
