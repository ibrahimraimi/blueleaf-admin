import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "@/components/auth/signin-form";
import { Shell } from "@/components/shell";

export default function SignInPage() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            Welcome back admin
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to log in
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignInForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center text-[0.8rem] gap-2">
          <span className="text-gray-400">Forgotten password?</span>
          <Link
            aria-label="Reset password"
            href="/signin/reset-password"
            className="text-primary underline-offset-4 transition-colors hover:underline"
          >
            Click here to reset
          </Link>
        </CardFooter>
      </Card>
    </Shell>
  );
}
