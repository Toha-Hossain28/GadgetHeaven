function Footer() {
  return (
    <footer className="mx-auto px-[160px] py-[100px]">
      <div className="text-center">
        <h2 className="font-bold text-3xl mb-3">Gadget Heaven</h2>
        <p className="text-[#09080F99] font-medium text-base mb-8">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr className="border-t-2 mb-8" />
      <div className="grid grid-cols-3 gap-10 text-center w-3/6 mx-auto">
        <div>
          <p className="font-bold text-lg mb-4">Service</p>
          <div className="font-normal text-base text-[#09080F99] space-y-2">
            <p>Product Support</p>
            <p>Online Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg mb-4">Company</p>
          <div className="font-normal text-base text-[#09080F99] space-y-2">
            <p>About Us</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg mb-4">Legal</p>
          <div className="font-normal text-base text-[#09080F99] space-y-2">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
