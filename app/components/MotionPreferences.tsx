"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

interface MotionPreferencesProps {
  children: ReactNode;
}

export default function MotionPreferences({ children }: MotionPreferencesProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
