import { useState } from "react";
import { Button } from "../../ui/Button";

import Modal from "../../ui/Modal";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default AddCabin;
