import { useState } from "react";

function PackageItem({ title, text, id }) {
  const [dateInput, setDateInput] = useState([
    { name: "day", checked: true },
    { name: "month", checked: false },
    { name: "week", checked: false },
  ]);
  return (
    <div>
      <div
        class="d-flex date-input flex-column justify-content-start
       align-items-start"
      >
        <input type="radio" id={id} name="radio-group" />
        <label for={id} className="date-title">
          {title}
        </label>
        <div class="date-price">{text}</div>
      </div>
    </div>
  );
}

export default PackageItem;
