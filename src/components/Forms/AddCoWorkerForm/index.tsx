import InputField from "@/components/FormFields/inputField";
import Modal from "@/components/Modal";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddCoWorkerForm: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      role: "",
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCancel={true} size="lg">
      <form onSubmit={handleSubmit((data) => {})} className="my-5 mx-8">
        <h2 className=" my-5 text-center text-xl font-bold">
          Invite My Co-Worker On The Platform
        </h2>
        <InputField
          type="email"
          name="email"
          label="Email"
          placeholder="Enter email in here"
          error={errors.email?.message}
          register={register}
        />
        <InputField
          type="text"
          name="role"
          label="Role"
          placeholder="Choose the role"
          error={errors.role?.message}
          register={register}
        />
      </form>
    </Modal>
  );
};

export default AddCoWorkerForm;
