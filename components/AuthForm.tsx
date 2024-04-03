"use client";

import { useCallback, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "@components/Input";
import Button from "@components/Button";
import AuthSocialButton from "@components/AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

const AuthForm = () => {
  type Varient = "LOGIN" | "REGISTER";
  const [varient, setVarient] = useState<Varient>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (varient === "LOGIN") {
      setVarient("REGISTER");
    } else {
      setVarient("LOGIN");
    }
  }, [varient]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (varient === "REGISTER") {
    }
    if (varient === "LOGIN") {
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div
      className="mt-8 
      sm:mx-auto 
      sm:w-full
      sm:max-w-md "
    >
      <div className="bg-white px-4 py-8 shadow sm-rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {varient === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input id="email" label="Email" register={register} errors={errors} />
          <Input
            id="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {varient === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="absolute
            inset-0
            flex
            items-center"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
          <div
            className="
          flex
          gap-2
          justify-center
          text-sm
          mt-6
          px-2
          text-gray-500
          "
          >
            <div> {varient === "LOGIN" ? "New to Messenger?" : " Already have an account?"}</div>
            <div onClick={toggleVarient} className="underline cursor-pointer">
              {varient === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
