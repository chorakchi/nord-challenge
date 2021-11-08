import { TypographyProps } from "./Table.interface";
export const Table: React.FC<TypographyProps> = ({
  children,
  header,
  onClickHeader,
  items,
  ...props
}: TypographyProps) => {
  return (
    <table {...props} className="relative min-w-full divide-y divide-gray-200">
      <thead className="sticky">
        <tr>
          {header.map((item) => (
            <th
              onClick={() => {
                onClickHeader(item.key);
              }}
              key={'th'+item.key}
              scope="col"
              className="sticky bg-white top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hover:bg-purple-50 cursor-pointer"
            >
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map((country, i) => (
          <tr key={'tr'+i}>
            {header.map((item, j) => (
              <td key={'tdf'+j} className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{country[item.key]}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
