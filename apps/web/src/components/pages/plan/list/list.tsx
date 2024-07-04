import { Plan } from "shared-types";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { useList } from "@/services/plan/list";
import { usePlanStore } from "@/stores/plan";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PlanListList = () => {
  const navigate = useNavigate();
  const { isLoading, isError } = useList();
  const { plans: data } = usePlanStore();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Plans</CardTitle>
      </CardHeader>

      <CardContent>
        {data && (
          <ul className="space-y-2">
            {data.map((plan: Plan) => (
              <li key={plan.id}>
                <Button
                  onClick={() => navigate(`/plan/${plan.id}`)}
                  className="w-full justify-start"
                  variant="secondary">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(plan.dateStart, "LLL dd, y")} -{" "}
                  {format(plan.dateEnd, "LLL dd, y")}
                </Button>
              </li>
            ))}
          </ul>
        )}
        {(!data || !data.length) && <div>No plans</div>}
      </CardContent>
    </Card>
  );
};
