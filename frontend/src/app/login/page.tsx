import AuthScreen from "@/components/AuthScreen";
import { safeReturnPath } from "@/lib/routes";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <AuthScreen key="login" mode="login" nextPath={safeReturnPath(next)} />
  );
}
