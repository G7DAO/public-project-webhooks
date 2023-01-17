export function browserEnv(varEnv: string): string | undefined {
  return (
    process?.env[`REACT_APP_${varEnv}`] ||
    process?.env[`NEXT_PUBLIC_${varEnv}`] ||
    process?.env[`VITE_${varEnv}`]
  );
}
