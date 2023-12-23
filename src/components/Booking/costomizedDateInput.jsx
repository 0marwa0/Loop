import { useState, useRef, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateIcon from "../../assets/icons/datePicker-icon";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// const theme = createTheme({
//   components: {
//     MuiInputBase: {
//       styleOverrides: {
//         input: {
//           "&::placeholder": {
//             color: "gray",
//           },
//         },
//       },
//     },
//   },
// });
function DateInput() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    const handleDomNodeInserted = (event) => {
      if (event.target.className === "mtp") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        event.target.appendChild(checkbox);
      }
    };

    window.addEventListener("DOMNodeInserted", handleDomNodeInserted);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("DOMNodeInserted", handleDomNodeInserted);
    };
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <ThemeProvider theme={theme}> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slots={{
            openPickerButton: () => "",
          }}
          open={open}
          PopperProps={{
            className: "mtp",
          }}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          format="DD MMMM YYYY"
          views={["month", "year", "day"]}
          PopperPlacementType="bottom-start"
          slotProps={{
            textField: {
              InputProps: {
                size: "large",
                readOnly: true,

                color: "#131825 ",
                onClick: () => {
                  setOpen(true);
                },

                sx: {
                  fontSize: 20,
                  fontWeight: "300",
                  maxWidth: 200,
                  margin: 0,
                  color: "#131825",
                },
                disableUnderline: true,
              },
              variant: "standard",
            },
          }}
        />
        <DateIcon onClick={() => setOpen(true)} />
      </LocalizationProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default DateInput;
