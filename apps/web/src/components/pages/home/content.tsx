import { useNavigate } from "react-router-dom";

import { ActionHolder } from "@/components/ui/actionHolder";
import { Button } from "@/components/ui/button";

export const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <ActionHolder>
      <Button onClick={() => navigate("/plans")}>Plans</Button>
      <Button onClick={() => navigate("/meals")}>Meals</Button>
    </ActionHolder>
  );
};
