import { useState, useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateIcon from "../../assets/icons/datePicker-icon";

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
          // ref={datePickerRef}
          slots={{
            openPickerButton: () => "",
          }}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          format="DD MMMM YYYY"
          views={["month", "year", "day"]}
          slotProps={{
            textField: {
              InputProps: {
                size: "large",
                readOnly: true,
                color: "#131825",
                onClick: () => {
                  setOpen(true);
                },

                sx: { fontSize: 20, maxWidth: 200, margin: 0 },
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
