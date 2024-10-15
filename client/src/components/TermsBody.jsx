import Terms from "../assets/title-default-bg.jpg";

const TermsBody = () => {
  return (
    <>
      <div
        className="h-[35vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${Terms})`,
        }}
      >
        <h1 className="text-white font-bold text-4xl uppercase">Terms</h1>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col gap-y-8 py-[10vh]">
        <h1 className="text-[#273f44] font-bold text-5xl uppercase">
          Terms and conditions
        </h1>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            1. Introduction
          </h1>
          <p>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of this website. These Terms will be applied
            fully and affect to your use of this Website. By using this Website,
            you agreed to accept all terms and conditions written in here. You
            must not use this Website if you disagree with any of these Website
            Standard Terms and Conditions.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            2. Intellectual Property Rights
          </h1>
          <p>
            Other than the content you own, under these Terms, Motors and/or its
            licensors own all the intellectual property rights and materials
            contained in this Website. You are granted limited license only for
            purposes of viewing the material contained on this Website.
          </p>
        </div>
        <div className="">
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            3. Restrictions
          </h1>
          <p>You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6">
            <li>Publishing any Website material in any other media</li>
            <li>
              Selling, sublicensing, and/or otherwise commercializing any
              Website material
            </li>
            <li>Publicly performing and/or showing any Website material</li>
            <li>
              Using this Website in any way that is or may be damaging to this
              Website
            </li>
            <li>
              Using this Website in any way that impacts user access to this
              Website
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            4. Your content
          </h1>
          <p>
            In these Website Standard Terms and Conditions, “Your Content” shall
            mean any audio, video text, images or other material you choose to
            display on this Website. By displaying Your Content, you grant
            Motors a non-exclusive, worldwide irrevocable, sub licensable
            license to use, reproduce, adapt, publish, translate and distribute
            it in any and all media. Your Content must be your own and must not
            be invading any third-party’s rights. Motors reserves the right to
            remove any of Your Content from this Website at any time without
            notice.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            5. No warranties
          </h1>
          <p>
            This Website is provided “as is,” with all faults, and Motors
            express no representations or warranties, of any kind related to
            this Website or the materials contained on this Website. Also,
            nothing contained on this Website shall be interpreted as advising
            you.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            6. Limitation of liability
          </h1>
          <p>
            In no event shall Motors, nor any of its officers, directors and
            employees, shall be held liable for anything arising out of or in
            any way connected with your use of this Website whether such
            liability is under contract. Motors, including its officers,
            directors and employees shall not be held liable for any indirect,
            consequential or special liability arising out of or in any way
            related to your use of this Website.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            7. Indemnification
          </h1>
          <p>
            You hereby indemnify to the fullest extent Motors from and against
            any and/or all liabilities, costs, demands, causes of action,
            damages and expenses arising in any way related to your breach of
            any of the provisions of these Terms.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            8. Severability
          </h1>
          <p>
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            9. Variation of Terms
          </h1>
          <p>
            Motors is permitted to revise these Terms at any time as it sees
            fit, and by using this Website you are expected to review these
            Terms on a regular basis.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            10. Assignment
          </h1>
          <p>
            The Motors is allowed to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any
            notification. However, you are not allowed to assign, transfer, or
            subcontract any of your rights and/or obligations under these Terms.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            11. Entire Agreement
          </h1>
          <p>
            These Terms constitute the entire agreement between Motors and you
            in relation to your use of this Website, and supersede all prior
            agreements and understandings.
          </p>
        </div>
        <div>
          <h1 className="text-[#273f44] font-semibold text-lg mb-2">
            12. Governing Law & Jurisdiction
          </h1>
          <p>
            These Terms will be governed by and interpreted in accordance with
            the laws of the State of New York, and you submit to the
            non-exclusive jurisdiction of the state and federal courts located
            in New York for the resolution of any disputes.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsBody;
