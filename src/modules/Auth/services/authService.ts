export const login = async (email: string, password: string) => {
  // fake API
  if (email === "demo@smartbiz.com" && password === "demo123") {
    return { success: true };
  }

  return { success: false, error: "Invalid credentials" };
};