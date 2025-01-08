"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";
import { footerDetails } from "@/data/footer";
import { FaViber, FaWhatsapp } from "react-icons/fa6";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              Frequently Asked Questions
            </h2>
          </SectionTitle>
          <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
            Ask us anything!
          </p>
          <a
            href="mailto:office@scufflr.com"
            target="_blank" rel="noopener"
            className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
          >
            office@scufflr.com
          </a>
          <a
            href="tel:+359988700631"
            target="_blank" rel="noopener"
            className="mt-3 block text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left"
          >
            +359 988 700 631
          </a>
          <div className="mt-3 flex justify-center hover:underline gap-8">
            <a href={footerDetails.viber} target="_blank" rel="noopener">
              <FaViber size={24} color="purple" />
            </a>
            <a href={footerDetails.whatsapp} target="_blank" rel="noopener">
              <FaWhatsapp  size={24} color="green" />
            </a>
          </div>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-secondary" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-secondary" />
                      )}
                    </DisclosureButton>
                    <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
