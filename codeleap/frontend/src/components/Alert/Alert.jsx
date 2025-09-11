import styles from "@/components/Alert/alert.module.css";
import InputCard from "@/components/InputCard/InputCard";
import Button from "@/components/Button/Button";

function Alert({ open, title, onCancel, onDelete, inputs, editAlert, onSave }) {
  if (!open) return null;

  const cancelButtonStyles = {
    color: "black",
    border: "1px solid #aaa",
    backgroundColor: "white",
    fontSize: window.innerWidth <= 540 ? "1em" : "1.3em",
  };

  const deleteButtonStyles = {
    backgroundColor: "#ff5151",
    fontSize: window.innerWidth <= 540 ? "1em" : "1.3em",
  };

  const saveButtonStyles = {
    backgroundColor: "#47b960",
    fontSize: window.innerWidth <= 540 ? "1em" : "1.3em",
  };

  return (
    <div className={styles["overlay"]}>
      <InputCard
        alertClass={true}
        width={"550px"}
        title={title}
        button={
          <>
            <Button
              gridArea={"-2 / 2 / span 1 / span 1"}
              additionalStyles={cancelButtonStyles}
              handleClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              gridArea={"-2 / 3 / span 1 / span 1"}
              additionalStyles={
                editAlert ? saveButtonStyles : deleteButtonStyles
              }
              handleClick={onDelete || onSave}
            >
              {editAlert ? "Save" : "Delete"}
            </Button>
          </>
        }
      >
        {inputs}
      </InputCard>
    </div>
  );
}

export default Alert;
