import { useTasks } from "@/stores/useTasks";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddTaskDialog = ({ open: isOpen, onClose }: AddTaskDialogProps) => {
  const [formValues, setFormValues] = useState({
    name: "",
    date: "",
    status: "todo",
  });
  const canAdd = useMemo(() => {
    if (formValues["name"].trim().length === 0) return false;
    if (!formValues["date"]) return false;
    return true;
  }, [formValues]);

  const handleFormChange = useCallback((e: any) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleAdd = useCallback(() => {
    useTasks.getState().add({
      name: formValues["name"],
      date: new Date(formValues["date"]).toString(),
      status: formValues["status"] as "todo" | "done",
    });
    onClose?.();
  }, [onClose, formValues]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent
        sx={{ py: 1, display: "flex", gap: 2, flexDirection: "column" }}
      >
        <TextField
          label={"Name"}
          name="name"
          value={formValues["name"]}
          onChange={handleFormChange}
          fullWidth
          sx={{ mt: 1 }}
        />

        <TextField
          label={"Date"}
          name="date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          value={formValues["date"]}
          onChange={handleFormChange}
          fullWidth
          sx={{ mt: 1 }}
          type="date"
        />

        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            sx={{ display: "flex", flexDirection: "row" }}
            name="status"
            value={formValues["status"]}
            onChange={handleFormChange}
          >
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel value="done" control={<Radio />} label="Done" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} fullWidth>
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          fullWidth
          disabled={!canAdd}
          variant="outlined"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskDialog;
