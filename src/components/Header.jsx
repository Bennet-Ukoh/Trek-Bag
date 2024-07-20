import { useItemsStore } from "../stores/itemStore";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const items = useItemsStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
