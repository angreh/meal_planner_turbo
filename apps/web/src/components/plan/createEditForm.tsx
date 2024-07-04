import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { usePlanStore } from "@/stores/plan";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { MealList } from "./mealList";

export const CreateEditForm = () => {
  const navigate = useNavigate();
  const { setPlanProperty, plan } = usePlanStore();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(plan.dateStart || "2022-01-01"),
    to: addDays(new Date(plan.dateEnd || "2022-01-01"), 6),
  });

  const multiSetDate = (date: DateRange | undefined) => {
    if (date) {
      setDate(date);

      setPlanProperty("dateStart", date.from!);
      setPlanProperty("dateEnd", date.to!);
    } else {
      setDate(undefined);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
        </CardHeader>

        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-[300px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                // initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={multiSetDate}
                numberOfMonths={1}
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      <MealList />

      <Button
        onClick={() => navigate(`/plan/${plan.id}/groceries`)}
        variant="outline"
        className="w-full">
        See Groceries List
      </Button>
    </>
  );
};
