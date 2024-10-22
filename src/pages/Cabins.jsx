import { useEffect } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/Addcabin";

import { getCabins } from "../services/apiCabins";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  useEffect(function () {
    getCabins()
      ?.then(() => console.log("Cabins data loaded successfully"))
      .catch((error) => console.error("Error Loading cabins data: ", error));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <AddCabin />
    </>
  );
}

export default Cabins;
