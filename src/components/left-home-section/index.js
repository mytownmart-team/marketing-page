import { Logo } from "../../assets/images/logo";
import { FaceBookIcon } from "../../assets/icons/facebook";
import { InstagramIcon } from "../../assets/icons/instagram";
// import { TwitterIcon } from "../../assets/icons/twitter";
import { useLeftHomeSection } from "../../hooks/useLeftHomeSection";
import { CloseIcon } from "../../assets/icons/close";
import Button from "../button";
import { Input } from "../input";
import { EmailIcon } from "../../assets/icons/email";
import { LocationIcon } from "../../assets/icons/location";
import { ProfileIcon } from "../../assets/icons/profile";
import { PhoneIcon } from "../../assets/icons/phone";
import { useForm } from "react-hook-form";
import axios from "axios";
import { baseURL } from "../../config/baseURL";
import { OpenedMailIcon } from "../../assets/icons/opened-mail";
import cn from "classnames";

const Icons = [
  // TwitterIcon,
  FaceBookIcon,
  InstagramIcon,
];
const links = [
  // "",
  "https://www.facebook.com/profile.php?id=100090882354110&mibextid=LQQJ4d",
  "https://instagram.com/bazaarmart_?igshid=YmMyMTA2M2Y=",
];

export const LeftHomeSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    handleOpenAccessModal,
    accessModalIsOpen,
    handleCloseAccessModal,
    value,
    setValue,
    isLoading,
    setIsLoading,
    successModalISOpen,
    openSuccessModal,
    closeSuccessModal,
    errors: BEError,
    setErrors,
    closeErrorMessage,
  } = useLeftHomeSection();

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      setErrors([]);
      const { data } = await axios.post(`${baseURL}/marketing`, values);
      console.log(data);
      handleCloseAccessModal();
      openSuccessModal();
      setValue({});
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data?.error?.message || [error.message]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {accessModalIsOpen && (
        <div
          onClick={handleCloseAccessModal}
          className=" fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.24)] z-50 flex justify-center items-center px-[10vw] ]"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-[588px] max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="px-6 py-8 bg-[#F6F6F6] flex justify-between items-center">
              <h2 className=" text-xl text-[#727272] font-medium">
                Gain access
              </h2>
              <div>
                <CloseIcon
                  className=" cursor-pointer"
                  onClick={handleCloseAccessModal}
                />
              </div>
            </header>
            {BEError.length !== 0 && (
              <div className=" text-center mt-2 text-xs text-red-500 p-4 bg-red-100 mx-5 relative">
                {BEError.map((error, idx) => (
                  <p key={idx}> {error}</p>
                ))}

                <div className="absolute h-full right-5 flex top-3 text-base hover:opacity-60 cursor-pointer">
                  <p onClick={closeErrorMessage}>X</p>
                </div>
              </div>
            )}

            <div className="px-6 py-10">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="md:flex gap-3 justify-between items-center pt-6 mb-4">
                  <Input
                    defaultValue={value.email}
                    icon={EmailIcon}
                    label={"Email address"}
                    placeholder="Enter email address"
                    type="email"
                    formExtra={{ ...register("email", { required: true }) }}
                    error={errors?.email ? "Email is required" : ""}
                  />
                  <div className="flex-1" />
                </div>
                <div>
                  <h2>Other details</h2>
                  <div className="md:flex gap-3 justify-between items-center pt-6">
                    <Input
                      icon={ProfileIcon}
                      label="Name"
                      placeholder="Enter your name"
                      formExtra={{ ...register("name", { required: true }) }}
                      error={errors?.name ? "Name is required" : ""}
                    />
                    <Input
                      icon={LocationIcon}
                      label="Location"
                      formExtra={{
                        ...register("location", { required: true }),
                      }}
                      error={errors?.location ? "Location is required" : ""}
                      placeholder="Enter your location"
                    />
                  </div>
                  <div className="md:flex gap-3 justify-between items-center">
                    <Input
                      icon={PhoneIcon}
                      label="Phone (optional)"
                      placeholder="080..."
                      formExtra={{ ...register("phone") }}
                    />
                    <div className="flex-1" />
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className={cn("md:px-16 md:py-5", {
                      "opacity-60": isLoading,
                    })}
                  >
                    <p className=" text-sm md:text-xl">
                      {isLoading ? "Adding to list" : "Gain Access"}
                    </p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {successModalISOpen && (
        <div
          onClick={closeSuccessModal}
          className=" fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.24)] z-50 flex justify-center items-center px-[10vw]"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-[588px]"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="px-6 py-8 flex justify-between items-center">
              <div />
              <div>
                <CloseIcon
                  className=" cursor-pointer"
                  onClick={closeSuccessModal}
                />
              </div>
            </header>

            <div className="px-6 py-10 flex flex-col justify-center items-center">
              <div className="mb-8">
                <OpenedMailIcon />
              </div>
              <div className="mb-4">
                <p className="text-[#727272] text-xl font-medium">Voila! 🎉</p>
              </div>
              <div className=" max-w-[270px] mb-24">
                <p className=" text-center">
                  You have been added to the list, you will get a confirmation
                  mail,
                </p>
              </div>
              <div>
                <p className="bg-[#D5501514] text-[#D55015] px-6 py-4 rounded-lg font-medium">
                  See you on our launch day! 😎
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="px-4 md:px-[15%] pt-14">
        <div className="items-center flex gap-2">
          <Logo className="" />
          {/* <LogoSmall className="md:hidden" /> */}

          <h1 className="text-primary font-bold">Bazaar</h1>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-8 mt-24">
            <div className="h-[5px] w-8 bg-[#D9D9D9]" />
            <p className="text-black font-semibold">Coming soon</p>
          </div>
          <h2 className=" text-4xl md:text-6xl font-bold text-primary mb-6">
            Bye Bye 👋🏼
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-secondary">
            To Market Wahala
          </h2>
          <div className=" mb-8 max-w-lg mt-10">
            <p className="text-foreground mb-1">
              Order your food items/Groceries from the comfort of your home
            </p>
            <p className="text-foreground">
              Be among the first 1000 persons to know when we launch and get 10%
              discount
            </p>
          </div>
          <div className="border border-[#5D6B6B38]  p-1 flex justify-between gap-2 mb-10 rounded-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 outline-none text-primary text-sm"
              value={value?.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <Button
              onClick={() => {
                reset({ email: value.email });
                handleOpenAccessModal();
              }}
            >
              <p>Gain access</p>
            </Button>
          </div>
          <div>
            <p className=" text-foreground">
              You do not have to worry about spamming, because we won’t 😉
            </p>
          </div>
          <div className="mt-10 rounded-full border-2 border-primary flex items-center px-12 py-5 gap-12 w-fit">
            {Icons.map((Icon, idx) => {
              return (
                <a key={idx} href={links[idx]} target="_blank" rel="noreferrer">
                  <Icon className="hover:opacity-80" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
