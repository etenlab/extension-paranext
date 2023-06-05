import { Button } from "@eten-lab/ui-kit"
import { useAppContext } from "../hooks/useAppContext";

type props = {
  setValue(newValue:string): void;
}

export function ButtonWithContext({ setValue }: props) {
  const {actions:{alertFeedback}} = useAppContext()  
  return (
    <Button // import from ui-kit
      onClick={() => {alertFeedback('info','test alertFeedback')}}
    >
      test button
    </Button>
  )
}