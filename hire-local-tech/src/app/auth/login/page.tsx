import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { SignIn } from "@/components/auth/sign-in";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center mt-[-2rem]">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-6 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Find local tech jobs</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <SignIn />
      </div>
    </div>
  );
} 