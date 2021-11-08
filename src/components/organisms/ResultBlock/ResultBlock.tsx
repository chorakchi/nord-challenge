import { TypographyProps } from "./ResultBlock.interface";
import { Table } from "components";
export const ResultBlock: React.FC<TypographyProps> = ({
  header,
  items = [],
  onClickHeader,
  ...props
}: TypographyProps) => {
  return items.length ? (
    <div
      {...props}
      className="shadow-lg h-2/3 w-3/4 overflow-auto border-b border-gray-200 sm:rounded-lg"
    >
      <Table header={header} items={items} onClickHeader={onClickHeader} />
    </div>
  ) : (
    <></>
  );
};
