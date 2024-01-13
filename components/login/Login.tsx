import { globalStateContext } from "@/provider/GlobalContextProvider";
import { login } from "@/services/shop.service";
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useState } from "react";
import "./Login.css";

export default function Login() {
  
  const router = useRouter();
  const { setUserLogged } = useContext(globalStateContext);

  const loginHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget['username'].value;
    const password = e.currentTarget['password'].value;

    const user = await login(username, password);

    if (user) {
      router.push("/shop");
      setUserLogged(user);
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={loginHandle}>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="login-label"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="login-label"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="login-input"
            autoComplete="false"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="login-checkbox"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="primary-button"
        >
          Login
        </button>
      </form>
  );
}