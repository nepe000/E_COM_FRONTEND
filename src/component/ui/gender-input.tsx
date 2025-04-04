/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller } from "react-hook-form";

import Select from "react-select";

interface IProps {
  control: any;
}

const GenderInput: React.FC<IProps> = ({ control }) => {
  const options = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "others", value: "others" },
  ];

  return (
    <>
      <Controller
        name="gender"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, ...others } }) => {
          return (
            <section>
              <h1>Gender</h1>
              <Select {...others} options={options} />
            </section>
          );
        }}
      />
    </>
  );
};

export default GenderInput;
