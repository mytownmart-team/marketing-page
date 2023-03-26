export const RightHomeSection = () => {
  return (
    <section className="relative mt-5 md:mt-0">
      <div className="absolute top-0">
        <img src={"/images/ellipse-1.png"} alt="Ellipse 1" />
      </div>
      <div className="absolute top-0">
        <img src={"/images/ellipse-2.png"} alt="Ellipse 2" />
      </div>
      <div className="absolute right-0 top-0">
        <img src={"/images/image-1.png"} alt="Image 1" />
      </div>
      <div className="absolute top-[210px] right-0">
        <img src={"/images/image-2.png"} alt="Image 2" />
      </div>
    </section>
  );
};
