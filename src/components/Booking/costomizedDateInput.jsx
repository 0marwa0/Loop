import { useState } from "react";
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
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slots={{
            openPickerIcon: DateIcon,
          }}
          format="DD MMMM YYYY"
          views={["month", "year", "day"]}
          slotProps={{
            textField: {
              InputProps: {
                size: "medium",
                readOnly: true,
                color: " #131825",
                sx: { fontSize: 20, maxWidth: 225 },
                disableUnderline: true,
              },
              variant: "standard",
            },
          }}
        />
      </LocalizationProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default DateInput;
