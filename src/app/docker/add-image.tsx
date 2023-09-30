import { useCallback, useState } from "react";

import { Button, Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";

import HubImagePicker from "_/components/hub-image-picker";

const AddImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const onExit = useCallback(() => {}, []);

  return (
    <>
      <Button variant="contained" size="small" onClick={open}>
        Add Image
      </Button>

      <Dialog open={isOpen} onClose={close} onTransitionExited={onExit} fullWidth maxWidth="sm">
        <DialogTitle>Add Image</DialogTitle>

        <DialogContent>
          <Stack useFlexGap gap={3}>
            <HubImagePicker isOpen={isOpen} />
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddImage;
