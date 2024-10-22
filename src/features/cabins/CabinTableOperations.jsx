import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No-discountAll" },
          { value: "with-discount", label: "With-discount" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
