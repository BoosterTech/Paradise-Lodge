import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); // loging out will remove user from local storage but will stay inside cache. Removing all?
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}