import { useItemsStore } from "../stores/itemStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToinitial = useItemsStore((state) => state.resetToinitial);
  const removeItem = useItemsStore((state) => state.removeItem);
  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as completed
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incompleted
      </Button>
      <Button onClick={resetToinitial} buttonType="secondary">
        Reset to initials
      </Button>
      <Button onClick={removeItem} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
