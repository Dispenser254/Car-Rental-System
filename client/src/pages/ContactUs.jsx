import { Label, Textarea, TextInput } from "flowbite-react";
import FooterPage from "../components/FooterPage";
import HeaderPage from "../components/HeaderPage";

const ContactUs = () => {
  return (
    <div>
      <HeaderPage />
      <div className="h-[50vh] bg-white flex justify-center items-center gap-x-[10vh]">
        <div className="flex flex-col items-start justify-center">
          <h1>JFK Airport, New York</h1>
          <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
          <p>
            Phone: +1 212-698-1245
            <br /> FAX: +1 212-698-1246
          </p>
          <p>
            <span>
              Mon – Fri: 09:00AM – 09:00PM
              <br /> Saturday: 09:00AM – 07:00PM
              <br /> Sunday: Closed
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1>West Los Angeles</h1>
          <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
          <p>
            Phone: +1 212-698-1245
            <br /> FAX: +1 212-698-1246
          </p>
          <p>
            <span>
              Mon – Fri: 09:00AM – 09:00PM
              <br /> Saturday: 09:00AM – 07:00PM
              <br /> Sunday: Closed
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1>Golden Plasa, Las Vegas</h1>
          <p>1230 E Springs Rd, Los Angeles, CA, USA</p>
          <p>
            Phone: +1 212-698-1245
            <br /> FAX: +1 212-698-1246
          </p>
          <p>
            <span>
              Mon – Fri: 09:00AM – 09:00PM
              <br /> Saturday: 09:00AM – 07:00PM
              <br /> Sunday: Closed
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white h-[80vh]">
        <div className="max-w-5xl mx-auto flex flex-col justify-center h-full">
          <h1 className="text-[#273f44] font-bold text-3xl uppercase">
            Contact Us
          </h1>
          <div className="flex items-start justify-start w-full gap-x-10 mt-8">
            <div className="w-1/2">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="message"
                    value="Your Message"
                    className="uppercase text-[#273f44] font-bold"
                  />
                </div>
                <Textarea
                  id="message"
                  type="text"
                  rows={8}
                  placeholder="Enter your message"
                  required
                  shadow
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="firstName"
                    value="First Name"
                    className="uppercase text-[#273f44] font-bold"
                  />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Email"
                    className="uppercase text-[#273f44] font-bold"
                  />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="email@domain.com"
                  required
                  shadow
                />
              </div>

              <button className="bg-[#273f44] hover:bg-[#f0c540] px-10 py-4 text-white uppercase font-bold text-sm mt-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ContactUs;
