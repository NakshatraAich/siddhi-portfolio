'use client';

import { Menu, X, Linkedin, Instagram, Facebook, MoveDown } from 'lucide-react';
import { useState } from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section className="bg-background font-inter px-24 flex flex-col gap-40">
      
      <section className="relative font-semibold text-text flex flex-col min-h-screen pt-[40px] pb-[28px] ">
        
        <div className='relative flex flex-row justify-between text-2xl items-center border-b-[3px] border-text py-4'>
          <div>
            SIDDHI BONTHU <span className="text-highlight">© 2025</span>
          </div>
          <div className='flex items-center justify-center cursor-pointer fixed top-15 right-23 z-50' onClick={toggleMenu}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </div>
        </div>

        <div className='text-8xl leading-[116px] py-8 border-b-[3px] border-text font-bold'>
          <span className='text-highlight'>PRODUCT DESIGNER</span><br/>PORTFOLIO // 2025
        </div>

        <div className='flex flex-grow flex-row gap-8 py-9 text-3xl'>
          <div>ABOUT</div>
          <div>EXPERIENCE</div>
          <div>PROJECTS</div>
          <div>GET IN TOUCH</div>
        </div>

        <div className='flex justify-end items-end h-full px-4 pb-4'>
          <div className='flex flex-row gap-4 self-end mx-4 mt-12'>
            <div className='bg-text rounded-full p-3 w-fit'>
              <Linkedin
                style={{ fill: '#121517' }} 
                stroke="#121517" 
                strokeWidth={1.5}
                size={20}
              />
            </div>
            <div className='bg-text rounded-full p-3 w-fit'>
              <Instagram
                style={{ fill: '#121517' }} 
                stroke="#FEFFEA" 
                strokeWidth={1.5}
                size={20}
              />
            </div>
            <div className='bg-text rounded-full p-3 w-fit'>
              <Facebook
                style={{ fill: '#121517' }} 
                stroke="#121517" 
                strokeWidth={1.5}
                size={20}
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 items-center text-lg text-highlight absolute bottom-1 left-1/2 -translate-x-1/2 px-6 py-4 cursor-pointer"
          onClick={() => {
            // Optional scroll
            const yOffset = 200; // change based on layout
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
          }}
        >
          <div className="">
            SCROLL DOWN
          </div>
          <MoveDown
            size={35}
            className="transition-all duration-200 ease-in-out hover:-translate-y-1"
          />
        </div>

      </section>

      <section>
        <div className='py-3 font-semibold text-text text-3xl border-b-[3px] border-text'>ABOUT</div>
        
        <div className='flex flex-row justify-between gap-36 pt-12 pb-24'>
          <div className='p-2 border-2 w-1/2 border-text border-dashed'></div>
          <div className='text-text w-1/2 text-xl'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.<br/><br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beata. Sit aspernatur aut odit aut fugit.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </div>
        </div>

        <div className='text-text flex flex-col gap-8'>
          <div className='text-base font-bold text-highlight'>What Do I Do?</div>
          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="item-1 border-0">
              <AccordionTrigger className='text-xl py-3 font-semibold border-0'>CAD Modeling & Drafting</AccordionTrigger>
              <AccordionContent className='text-base py-2'>
                Creating detailed 2D and 3D designs using software like SolidWorks or AutoCAD.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2 border-0">
              <AccordionTrigger className='text-xl py-3 font-semibold border-0'>Product Development</AccordionTrigger>
              <AccordionContent className='text-base py-2'>
                Transforming concepts into functional prototypes through iterative design, testing, and refinement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3 border-0">
              <AccordionTrigger className='text-xl py-3 font-semibold border-0'>Structural & Thermal Analysis</AccordionTrigger>
              <AccordionContent className='text-base py-2'>
                Evaluating product performance under stress and temperature using simulation tools like ANSYS or COMSOL.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </section>

      <section>
        <div className='py-3 font-semibold text-text text-3xl border-b-[3px] border-text'>EXPERIENCE</div>
        <div className='border-2 border-[#393939] text-text grid grid-cols-7 grid-rows-7 border-t-0 '>
          <div className='col-start-1 col-end-4 row-start-1 row-end-8 flex flex-col gap-8 border-r-2 border-[#393939] py-10 px-4'>
            <div>
              <div className='text-xl'>Product Designer Intern | Meine Electric</div>
              <div className='text-sm'>Chennai</div>
              <div className='text-sm'>06/2024 - 07/2024</div>
              <div className='text-base pt-6'>
                <ul className='list-disc pl-6'>
                  <li>Designed a swappable battery case for 2-wheeler EVs, considering material selection, ergonomics, and ease of swapping. </li>
                  <li>Improved the design through iterative rapid prototyping to enhance usability and durability.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className='text-xl'>Design Intern | Feynman Aerospace</div>
              <div className='text-sm'>Mumbai</div>
              <div className='text-sm'>04/2023 - 06/2023</div>
              <div className='text-base pt-6'>
                <ul className='list-disc pl-6'>
                  <li>Used OpenRocket to design model rockets with payloads and onboard computers. </li>
                  <li>Developed a module recovery system for payload retrieval and optimized trajectory.</li>
                  <li>Conducted simulations to refine stability, control, and aerodynamics for improved performance.</li>
                </ul>
              </div>
            </div>
        

          </div>

          <div className='border-b-2 border-[#393939] col-start-4 col-end-8 row-start-1 row-end-5 py-10 px-4'>
            <div className='text-highlight font-semibold'>Miscellaneous</div>
            <ul className='pl-6 pt-6 list-disc'>
              <li>Patent filed on Two Input Speed Balancing Mechanism (FER Stage), Application number- 414277-001</li>
              <li>NASA Human Exploration Rover Challenge 2023 - Top performing Indian team for year 2023.</li>
              <li>ChargePoint's Electrifying Transportation - 2 nd place finish at Indian Institute of Technology Bombay Techfest.</li>
              <li>Together 2022 - Top 100 teams at international startup bootcamp organized by Startup India and Schulich School of Business</li>
            </ul>
          </div>

          <div className='border-r-2 border-[#393939] col-start-4 col-end-6 row-start-5 row-end-8 py-10 px-4'>
            <div className='text-highlight font-semibold'>Hard Skills</div>
            <ul className='pl-6 pt-6 list-disc'>
              <li>Computer Aided Design</li>
              <li>Solidworks</li>
              <li>Rapid Prototyping</li>
              <li>Product Design</li>
            </ul>
          </div>

          <div className='col-start-6 col-end-8 row-start-5 row-end-8 py-10 px-4'>
            <div className='text-highlight font-semibold'>Soft Skills</div>
            <ul className='pl-6 pt-6 list-disc'>
              <li>Leadership</li>
              <li>Public Speaking</li>
              <li>Team work</li>
              <li>Adaptability</li>
            </ul>
          </div>

        </div>
      </section>

      <section>
        <div className='py-3 font-semibold text-text text-3xl border-b-[3px] border-text'>PROJECTS</div>
        <div className='flex flex-col justify-between gap-8 pt-12'>
          <div className='flex flex-row gap-8'>
            <div className='flex flex-col text-text w-1/3 gap-2'>
              <div className='font-semibold text-4xl'>Exhibit 1</div>
              <div className='font-'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </div>
            </div>
            <div className='p-2 flex-grow border-2 border-text border-dashed w-2/3 aspect-video'></div>
          </div>

          <div className='flex flex-row-reverse gap-8'>
            <div className='flex flex-col text-text w-1/3 gap-2'>
              <div className='font-semibold text-4xl'>Exhibit 2</div>
              <div className='font-'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </div>
            </div>
            <div className='p-2 flex-grow border-2 border-text border-dashed w-2/3 aspect-video'></div>
          </div>

          <div className='flex flex-row gap-8'>
            <div className='flex flex-col text-text w-1/3 gap-2'>
              <div className='font-semibold text-4xl'>Exhibit 3</div>
              <div className='font-'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </div>
            </div>
            <div className='p-2 flex-grow border-2 border-text border-dashed w-2/3 aspect-video'></div>
          </div>
        </div>
      </section>

      <section className='border-2 border-[#393939] rounded-2xl flex flex-col pt-22 pb-24 px-14 text-text gap-4 mb-16'>
        <div className='text-lg'>If you're <span className='text-highlight font-bold'>interested</span> in my work or want to <span className='text-highlight font-bold'>commission</span> me - write to me at,</div>
        <div className='text-6xl font-semibold underline underline-offset-10'>siddhi.bonthu@gmail.com</div>
      </section>

    </section>
  );
}
