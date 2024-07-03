import { useNavigate } from "react-router-dom";

import { ActionHolder } from "@/components/ui/actionHolder";
import { Button } from "@/components/ui/button";

export const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button className="mb-4 w-full" onClick={() => navigate("/plans")}>
        Plans
      </Button>

      <ActionHolder>
        <Button onClick={() => navigate("/meals")} variant="outline">
          Meals
        </Button>
        <Button onClick={() => navigate("/ingredients")} variant="outline">
          Ingredients
        </Button>
      </ActionHolder>
    </>
  );
};
