import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { useItemsStore } from "../stores/itemStore";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, deleteItem, toggleItem } = useItemsStore((state) => ({
    items: state.items,
    deleteItem: state.deleteItem,
    toggleItem: state.toggleItem,
  }));
  const sortedItems = useMemo(() => {
    if (sortBy === "packed") {
      return items.sort((a, b) => a.packed - b.packed);
    }
    if (sortBy === "unpacked") {
      return items.sort((a, b) => b.packed - a.packed);
    }
    return items;
  }, [items, sortBy]);
  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => {
            onToggleItem(item.id);
          }}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
