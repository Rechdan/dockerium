import { useCallback, useState } from "react";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

const AddContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const onExit = useCallback(() => {}, []);

  return (
    <>
      <Button variant="contained" size="small" onClick={open}>
        Add Container
      </Button>

      <Dialog open={isOpen} onClose={close} onTransitionExited={onExit} fullWidth maxWidth="sm">
        <DialogTitle>Add Container</DialogTitle>

        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
};

export default AddContainer;
