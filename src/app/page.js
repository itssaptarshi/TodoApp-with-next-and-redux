import Image from "next/image";
import Todo from "./Todo/page";
import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Auth/> */}
      Yo

      <>
                  <LoginLink className="btn btn-ghost sign-in-btn">Sign in</LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
     
    </main>
  );
}
