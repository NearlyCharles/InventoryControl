import React from "react";
import "./Checkout.scss";
//import { useAutocomplete } from '@mui/base/useAutocomplete';  hook for a autocomplete customer name bar, would be dope.

function CheckoutView() {
  return (
    <div>
      <div>CheckoutView</div>
      <div className="info-box">
        <div className="Namebar"></div>
      </div>
    </div>
  );
}
export default CheckoutView;

//<Label {...getInputLabelProps()}>Customer</Label>                     *code to pull the props for auto complete bar. goes in the Namebar div *
//<Root {...getRootProps()} className={focused ? "Mui-focused" : ""}>
// <Input {...getInputProps()} />
//</Root>
//{groupedOptions.length > 0 && (
//<Listbox {...getListboxProps()}>
//{(groupedOptions as typeof CustomerNames).map((option, index) => (
//<Option {...getOptionProps({ option, index })}>
//  {option.label}
//</Option>
// ))}
// </Listbox>
//)}
