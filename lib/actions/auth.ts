"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import  connectDB  from "../mongodb";
import User from "../../models/User";



export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await connectDB();

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user
  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  redirect("/auth/login");
}

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Later you will add session / JWT / Clerk
  redirect("/dashboard/student");
}
