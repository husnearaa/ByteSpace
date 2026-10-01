"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import AuthImage from "@/assets/images/auth/authImg.png";
import LogoIcon from "@/assets/images/logo.png";

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0639E6]">
      {/* Grid Background */}
      <div
        className="min-h-screen w-full bg-[#0639E6]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      >
        {/* Top Left Logo */}
        <div className="absolute left-6 top-5  xl:left-[198px] lg:top-[22px]">
          <Image
            src={LogoIcon}
            alt="ByteSpace"
            width={32}
            height={32}
            className="h-[32px] w-[32px] object-contain"
            priority
          />
        </div>

        <div className="mx-auto flex min-h-screen w-full max-w-[1100px] items-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-[70px]">
            {/* ================= LEFT SIDE ================= */}
            <div className="flex w-full flex-col">
              {/* Text */}
              <div className="max-w-[450px]">
                <h1 className="text-[14px] font-semibold leading-[1.3] text-white md:text-[22px]">
                  Sign up and come in
                </h1>

                <p className="mt-2 text-[10px] font-normal leading-[1.7] text-white/90 md:text-[15px]">
                  The registration process is straightforward, uncomplicated,
                  and efficient, allowing users to sign up quickly, easily,
                  and at no cost.
                </p>
              </div>

              {/* Course Image */}
              <div className="mt-8 flex justify-center lg:mt-12 lg:justify-start">
              <div className=" lg:block hidden">  <Image
                  src={AuthImage}
                  alt="ByteSpace courses"
                  width={430}
                  height={390}
                  priority
                  className="h-auto w-full max-w-[390px] object-contain sm:max-w-[420px]"
                /></div>
              </div>
            </div>

            {/* ================= REGISTER CARD ================= */}
            <div className="mx-auto w-full max-w-[353px] rounded-[15px] bg-white px-8 py-9 sm:px-10 sm:py-10 lg:max-w-[400px]">
              {/* Small Heading */}
              <p className="text-[12px] font-normal text-[#0047FF]">
                Create an Account
              </p>

              {/* Title */}
              <h2 className="mt-1 md:text-[32px] text-[24px] font-semibold leading-[1.15] text-[#292929]">
                Welcome to
                <br />
                ByteSpace
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-7"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="register-name"
                    className="text-[12px] font-normal text-[#222222]"
                  >
                    Full Name
                  </label>

                  <input
                    id="register-name"
                    type="text"
                    placeholder="Jamie Davis"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={`mt-1 h-[38px] w-full rounded-[6px] border bg-white px-3 text-[12px] text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#0047FF] ${
                      errors.fullName
                        ? "border-red-400"
                        : "border-[#DDDDDD]"
                    }`}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-[8px] text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mt-4">
                  <label
                    htmlFor="register-email"
                    className="text-[12px] font-normal text-[#222222]"
                  >
                    Email
                  </label>

                  <input
                    id="register-email"
                    type="email"
                    placeholder="designer@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`mt-1 h-[38px] w-full rounded-[6px] border bg-white px-3 text-[12px] text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#0047FF] ${
                      errors.email
                        ? "border-red-400"
                        : "border-[#DDDDDD]"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[8px] text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="mt-4">
                  <label
                    htmlFor="register-password"
                    className="text-[12px] font-normal text-[#222222]"
                  >
                    Password
                  </label>

                  <div className="relative mt-1">
                    <input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                      className={`h-[38px] w-full rounded-[6px] border bg-white px-3 pr-9 text-[12px] text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#0047FF] ${
                        errors.password
                          ? "border-red-400"
                          : "border-[#DDDDDD]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#333333]"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={14} strokeWidth={1.7} />
                      ) : (
                        <Eye size={14} strokeWidth={1.7} />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-[8px] text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Continue */}
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-[#C8FF00] px-5 py-2 text-[12px] font-normal text-[#111111] transition-colors hover:bg-[#baf000]"
                  >
                    Continue
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="mt-[76px] text-center text-[11px] text-[#999999]">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[#0047FF] hover:underline"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;