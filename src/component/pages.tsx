/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ILogin } from "@/interface/auth/auth.interface";
import { loginSchema } from "@/schemas/login.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";

import { LuAsterisk } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import toast from "react-hot-toast";

//form hook
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  // Mutations
  const { mutate, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log(response);
      toast.success("Login Successful");
      // Invalidate and refetch
    },
    onError: (error) => {
      console.log(error);

      toast.error("Login Failed");
    },
  });

  console.log(errors);
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    console.log(data);
    await mutate(data);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full max-w-sm flex flex-col gap-8">
          <div className="flex flex-col gap-1 ">
            <div className="flex">
              <label
                className="text-base tracking-wide font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <LuAsterisk className="text-lg text-red-500" />
            </div>

            <input
              {...register("email")}
              type="text"
              placeholder="johndoe@gmail.com"
              className={`text-lg border ${
                errors.email
                  ? "border-red-500 text-red-500"
                  : "border-gray-500 text-black"
              }`}
            />
            {errors?.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col    ">
            <div className="flex">
              <label
                className="text-base tracking-wide font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <LuAsterisk className="text-lg text-red-500" />
            </div>
            <input
              {...register("password")}
              type="text"
              name="password"
              placeholder="password"
              className={`text-lg border ${
                errors.password
                  ? "border-red-500 text-red-500"
                  : "border-gray-500 text-black"
              }`}
            />
            {errors?.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            disabled={isPending}
            type="submit"
            className="text-lg font-semibold px-4 py-3 bg-blue-500 rounded-md text-white cursor-pointer disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300"
          >
            {isPending ? "Logging" : "Login"}
          </button>

          <p>
            <Link href="/register">
              Already have a account?
              <span className="text-blue-500 font-semibold">Register</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
