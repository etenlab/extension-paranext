import { Button } from "@eten-lab/ui-kit"
import { useAppContext } from "../hooks/useAppContext";

type props = {
  setValue(newValue:string): void;
}

export function ButtonWithContext({ setValue }: props) {
  const {someKey} = useAppContext()  
  return (
    <Button // import from ui-kit
      onClick={() => {setValue(someKey)}}
    >
      test button
    </Button>
  )
}