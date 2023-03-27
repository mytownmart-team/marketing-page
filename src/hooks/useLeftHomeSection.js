import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useLeftHomeSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({});
  const [errors, setErrors] = useState([]);

  // console.log(searchParams.get("modal"));

  const [accessModalIsOpen, setAccessModalIsOpen] = useState(
    searchParams.get("modal") === "open" || false
  );
  const [successModalISOpen, setSuccessModalISOpen] = useState(false);
  const handleOpenAccessModal = () => {
    setSearchParams({ modal: "open" });
    setAccessModalIsOpen(true);
  };

  const openSuccessModal = () => setSuccessModalISOpen(true);
  const closeSuccessModal = () => setSuccessModalISOpen(false);

  const handleCloseAccessModal = () => {
    setSearchParams();
    setAccessModalIsOpen(false);
  };
  const closeErrorMessage = () => setErrors([]);

  return {
    accessModalIsOpen,
    handleOpenAccessModal,
    handleCloseAccessModal,
    value,
    setValue,
    isLoading,
    setIsLoading,
    successModalISOpen,
    openSuccessModal,
    closeSuccessModal,
    errors,
    setErrors,
    closeErrorMessage,
  };
}
