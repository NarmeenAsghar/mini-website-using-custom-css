import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div id="about" className="about-main">
      <h1>About Us</h1>
      <p>
        Our website is dedicated to providing car enthusiasts with a
        comprehensive platform to stay informed about the latest car models,
        technologies, and industry trends. We offer in-depth information on all
        types of vehicles, from luxury cars and sports cars to family-friendly
        options, ensuring you can make the best choice based on your needs and
        preferences. Our team of experts continuously monitors vehicle
        performance, design innovations, and emerging technologies, so you
        always have access to the most up-to-date and reliable information.
        Whether you!re looking for guidance on buying a car, learning about
        sales and services, or simply exploring the world of automobiles, our
        website is your trusted source for everything related to cars, making
        your car buying and ownership experience enjoyable and hassle-free.
      </p>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            Technological Advancements in Car Manufacturing
          </AccordionTrigger>
          <AccordionContent>
            At DRIVE AURA, we`re committed to pushing the boundaries of
            automotive technology. Our latest models feature cutting-edge
            innovations like AI-powered driver assistance, advanced infotainment
            systems, and electric vehicle (EV) solutions. With every new
            release, we continue to redefine what`s possible, blending speed,
            safety, and sustainability into one flawless ride.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            Performance Engineering
          </AccordionTrigger>
          <AccordionContent>
            Performance meets precision at DRIVE AURA. Our engineers are
            constantly enhancing the engine efficiency, handling, and
            aerodynamics of each car, ensuring that every drive delivers
            exceptional performance, whether you`re cruising through city
            streets or pushing the limits on open highways. With a focus on
            turbocharged engines and track-ready suspension systems, we ensure
            that speed and control always come together.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            Achievements and Future Goals
          </AccordionTrigger>
          <AccordionContent>
            Over the years, we`ve made significant strides in reshaping the
            automotive landscape. From introducing our first fully-electric
            model to launching cutting-edge hybrid systems, the journey of
            progress has been incredible. Looking ahead, we are setting our
            sights on even bolder innovations with a strong focus on autonomous
            vehicles, sustainable manufacturing, and global expansion to bring
            our cars to a wider audience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            Customer-Centric Innovation
          </AccordionTrigger>
          <AccordionContent>
            At DRIVE AURA, innovation isn`t just about what`s under the hood,
            it`s about what matters to you. Our commitment to customer-centric
            design means that every feature we add, from intuitive interfaces to
            comfortable seating arrangements, is done with your needs in mind.
            We prioritize ease of use, comfort, and a truly immersive driving
            experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
