import { ActionHolder } from "@/components/ui/actionHolder";
import { Button } from "@/components/ui/button";

type DefaultActionsProps = {
  saveFn: () => void;
  saveTitle: string;
  backFn: () => void;
};
export const DefaultActions = ({
  saveFn,
  backFn,
  saveTitle,
}: DefaultActionsProps) => {
  return (
    <ActionHolder>
      <Button onClick={backFn} variant="outline">
        Back
      </Button>
      <Button onClick={saveFn}>{saveTitle}</Button>
    </ActionHolder>
  );
};
