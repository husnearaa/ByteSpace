"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import AuthImage from "@/assets/images/auth/authImg.png";
import LogoIcon from "@/assets/images/logo.png";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
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
        <div className="absolute left-6 top-5  xl:left-[190px] lg:top-[22px]">
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
                <h1 className="text-[14px] md:text-[22px] font-semibold leading-[1.3] text-white">
                  Sign in with ease
                </h1>

                <p className="mt-2 text-[10px] md:text-[15px] font-normal leading-[1.7] text-white/90">
                  Experience a seamless and efficient sign-in process that
                  grants you instant access to a world of knowledge.
                </p>
              </div>

              {/* Course Image */}
              <div className="mt-8 flex justify-center lg:mt-12 lg:justify-start ">
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

            {/* ================= LOGIN CARD ================= */}
            <div className="mx-auto w-full max-w-[353px] rounded-[15px] bg-white px-8 py-9 sm:max-w-[380px] sm:px-10 sm:py-10 lg:max-w-[353px]">
              {/* Small Heading */}
              <p className="text-[12px] font-normal text-[#0047FF]">
                Sign In
              </p>

              {/* Title */}
              <h2 className="mt-1 text-[27px] font-semibold leading-[1.15] text-[#292929]">
                Welcome Back
              </h2>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-7"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="login-email"
                    className="text-[12px] font-normal text-[#222222]"
                  >
                    Email
                  </label>

                  <input
                    id="login-email"
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
                    htmlFor="login-password"
                    className="text-[12px] font-normal text-[#222222]"
                  >
                    Password
                  </label>

                  <div className="relative mt-1">
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
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
                      onClick={() => setShowPassword((prev) => !prev)}
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

                {/* Sign In Button */}
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-full bg-[#C8FF00] px-5 py-2 text-[12px] font-normal text-[#111111] transition-colors hover:bg-[#baf000]"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="mt-12 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#E2E2E2]" />

                <span className="text-[9px] text-[#999999]">
                  or
                </span>

                <div className="h-px flex-1 bg-[#E2E2E2]" />
              </div>

              {/* Social Login */}
              <div className="mt-7 flex justify-center gap-3">
                <button
                  type="button"
                  className="flex h-[45px] w-[45px] items-center justify-center rounded-[12px] border border-[#DDDDDD] text-[21px] font-semibold text-black transition-colors hover:bg-[#F7F7F7]"
                  aria-label="Continue with Facebook"
                >
                  f
                </button>

                <button
                  type="button"
                  className="flex h-[45px] w-[45px] items-center justify-center rounded-[12px] border border-[#DDDDDD] text-[20px] font-semibold text-black transition-colors hover:bg-[#F7F7F7]"
                  aria-label="Continue with Google"
                >
                  G
                </button>
              </div>

              {/* Register Link */}
              <p className="mt-11 text-center text-[12px] text-[#999999]">
                New user?{" "}
                <a
                  href="/register"
                  className="text-[#0047FF] hover:underline"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;