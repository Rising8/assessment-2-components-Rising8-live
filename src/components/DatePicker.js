// DatePicker.js
// uses bootstrap datepicker jquery plugin to display a calendar like the static html
// it is reusable react datepicker input field
// use effect to initialize bootstrap datepicker plugin
// use ref to get reference to the input DOM element
import React, { useEffect, useRef } from "react";
import $ from "jquery";
// Import bootstrap datepicker CSS and JS from npm package - node_modules
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js";

const DatePicker = ({ placeholder }) => {
  const inputRef = useRef();

  useEffect(() => {
    // Initialize the datepicker on this input
    $(inputRef.current).datepicker({
      format: "dd/mm/yyyy",
      autoclose: true, // close after picking date
    });
  }, []);

  return (
    <div className="input-group date" ref={inputRef}>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder || "Select date"}
      />
      <span className="input-group-addon">
        <span className="glyphicon glyphicon-calendar"></span>
      </span>
    </div>
  );
};

export default DatePicker;
