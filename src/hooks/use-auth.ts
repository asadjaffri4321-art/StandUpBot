import { useQuery, useQueryClient } from "@tanstack/react-query";
import { auth, type User } from "@/lib/api";

export function useAuth() {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery<User | null>({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      try {
        return await auth.getMe();
      } catch (err: any) {
        if (err.status === 401) {
          return null;
        }
        throw err;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const logout = async () => {
    try {
      await auth.logout();
      queryClient.setQueryData(["auth", "me"], null);
      queryClient.clear(); // Clear all cached data
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const login = () => {
    window.location.href = auth.loginUrl();
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    logout,
    login,
  };
}
