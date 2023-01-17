import { TodoItem } from "src/types";
import { parseDate } from "src/utils/dateUtils";
import { ItemCard } from "../";

type Props = {
  todoItem: TodoItem;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleToogleCheckItem: (id: number, isChecked: boolean) => void;
};

export default function TaskItem({
  todoItem: { deadline, text, name, id, isChecked },
  handleDelete,
  handleEdit,
  handleToogleCheckItem,
}: Props) {
  const handleDeleteButtonClick = () => handleDelete(id);
  const handleEditButtonClick = () => handleEdit(id);
  const handleCheckboxChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => handleToogleCheckItem(id, checked);

  return (
    <ItemCard
      title={name}
      onDeleteButtonClick={handleDeleteButtonClick}
      onEditButtonClick={handleEditButtonClick}
      onCheckboxChange={handleCheckboxChange}
      isCheckboxChecked={isChecked}
    >
      <div className="h-1/2">
        <p className="break-words h-4/5 overflow-hidden">{text}</p>
        <p className="flex-none h-1/5">
          Deadline: {parseDate(new Date(deadline))}
        </p>
      </div>
    </ItemCard>
  );
}
