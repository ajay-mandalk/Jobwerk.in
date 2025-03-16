import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, BrowserRouter } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", userCredential.user);
      // Redirect or perform other actions after successful SignUp
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful:", result.user);
     // Redirect or perform other actions after successful SignUp
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <BrowserRouter>
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
              Enter your email below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                  Sign Up
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleLogin}
              >
                  Sign Up with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login-form" className="underline underline-offset-4">
                  Login
                </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </BrowserRouter>
  );
}