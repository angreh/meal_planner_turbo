import { Plan } from "shared-types";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useList } from "@/services/plan/list";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

export const PlanListList = () => {
  const navigate = useNavigate();
  const { data, isError } = useList();

  if (isError) return <div>Error</div>;

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
