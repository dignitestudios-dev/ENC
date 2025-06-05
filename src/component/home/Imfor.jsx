import React from "react";
import Navber from "../global/Navber";
import { NavLink } from "react-router-dom";

const Imfor = () => {
  return (
    <div className="text-white py-32 mt-10">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-center lg:leading-[50px]">
          Learn More About Empowerment <br /> Network Circle
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-10 py-20 gap-y-12">
        <div className="w-full flex flex-col gap-4 border-b lg:border-r border-white lg:px-16 lg:border-b-0">
          <h4 className="text-[22px] font-semibold">
            Our Story,
            <br /> Empowerment Network Circle
          </h4>
          <p className="text-[14px]">
            ENC began in 2009, following Dr. Rose Handon’s retirement from the
            State of Ohio. Initially, ENC was established as a platform to help
            individuals envision and create their own businesses, offering
            career coaching and personal development to support professional
            growth. This commitment to empowerment soon expanded to encompass
            broader initiatives.
          </p>
          <p className="text-[14px]">
            Shortly after ENC’s inception, Dr. Rose served as a project team
            manager for a private adoption agency, working as a consultant for
            ten state adoption agencies to provide leadership, guidance, and
            strategic support. This role evolved into a leadership position with
            the Office of the Ohio Attorney General, where she managed a team of
            16 professionals dedicated to advancing public welfare.
          </p>
          <p className="text-[14px]">
            Dr. Rose's resilience and unwavering passion for service became the
            driving force behind ENC’s evolution. Today, ENC stands as a
            testament to the power of perseverance, compassion, and community.
            By offering a space for healing, growth, and opportunity, she
            continues to inspire others to rise above adversity and embrace
            their fullest potential.
          </p>
          {/* 
          <p className="text-[14px]">
            Amid these challenges, the founder’s resolve was unshaken. ENC was
            rebirthed with a renewed purpose and a more profound mission.
            Embracing a new identity as a disabled citizen, their personal
            journey became a powerful testament to resilience and
            transformation. Today, ENC represents not just an initiative, but a
            movement to inspire others to "Press, Persevere, and Always Move
            Forward."
          </p> */}
          <br />
        </div>
        <div className="w-full flex flex-col gap-4 border-b lg:border-r border-white lg:px-16 lg:border-b-0">
          <h4 className="text-[22px] font-semibold">
            Our Services <br />
            At Empowerment Network Circle
          </h4>
          <p className="text-[14px]">
            <span className="font-semibold">
              Career Coaching & Individual Development:
            </span>{" "}
            Personalized coaching for career advancement, personal growth, and
            professional development. We help individuals turn their dreams into
            actionable plans for success.
          </p>
          <p className="text-[14px]">
            <span className="font-semibold">
              Disability Advocacy & Support:
            </span>{" "}
            Specialized services for individuals navigating life after a stroke,
            spinal cord injury, or other life-altering events. We offer peer
            coaching, guidance, and advocacy to help clients regain confidence
            and independence.
          </p>
          <p className="text-[14px]">
            <span className="font-semibold">Workshops & Training:</span>{" "}
            Interactive workshops and training programs tailored to meet the
            unique needs of individuals, nonprofits, and community
            organizations.
          </p>

          <p className="text-[14px] ">
            <span className="font-semibold">
              Community Engagement & Advocacy:
            </span>{" "}
            We collaborate with local, national, and global partners to raise
            awareness, advocate for systemic change, and ensure the voices of
            marginalized communities are heard and valued.
          </p>
          <br />
        </div>
        <div className="w-full flex flex-col gap-4  lg:px-16 ">
          <h4 className="text-[22px] font-semibold">
            Who We Are, <br /> Empowerment Network Circle
          </h4>
          <p className="text-[14px]">
            ENC is a dynamic advocacy network dedicated to fostering growth,
            development, and empowerment for individuals with disabilities. Our
            approach addresses personal, professional, and social challenges
            through tailored support that uplifts and inspires.
          </p>
          <p className="text-[14px]">
            Our Mission is to empower individuals with disabilities and
            marginalized communities to achieve personal growth, career success,
            and a sense of purpose by providing them with the tools, support,
            and guidance they need to thrive. We believe that with the right
            network, resources, and mindset, every individual has the power to
            overcome adversity and achieve greatness.
          </p>
          <p className="text-[14px]">
            Our Vision is to create a world where individuals with disabilities
            and marginalized communities have equal access to opportunities,
            resources, and platforms for growth. ENC envisions a future where
            empowerment is not just a goal but a reality for every person we
            serve.
          </p>
        </div>
      </div>
      {/* <div className="w-full bg-slate-100 py-10   ">
        <div className="w-full lg:w-[180vh] mx-auto  flex lg:flex-row flex-col lg:items-center justify-between gap-8 p-4 bg-white  rounded-xl ">
          <div className="flex flex-col w-full lg:w-[50%] items-start justify-center gap-5 ">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Story Empowerment <br /> Network Circle (ENC){" "}
            </h2>
            <p className="text-[14px]">
              began in 2009, following the founder’s retirement from the State
              of Ohio. Initially, ENC was established as a platform to help
              individuals envision and create their own businesses, offering
              career coaching and personal development to support professional
              growth. This commitment to empowerment soon expanded to encompass
              broader initiatives...
            </p>

            <p className="text-[14px]">
              Shortly after ENC’s inception, the founder served as a project
              team manager for a private adoption agency, working as a
              consultant for ten state adoption agencies to provide leadership,
              guidance, and strategic support. This role evolved into a
              leadership position with the Office of the Ohio Attorney General,
              where they managed a team of 16 professionals dedicated to
              advancing public welfare.
            </p>
            <p className="text-[14px]">
              However, in 2020, life took a dramatic turn. The founder
              experienced two strokes and faced profound personal loss,
              including the passing of their father and only daughter, who
              tragically died as a seat-belted passenger in a car accident.
            </p>

            <p className="text-[14px]">
              Amid these challenges, the founder’s resolve was unshaken. ENC was
              rebirthed with a renewed purpose and a more profound mission.
              Embracing a new identity as a disabled citizen, their personal
              journey became a powerful testament to resilience and
              transformation. Today, ENC represents not just an initiative, but
              a movement to inspire others to "Press, Persevere, and Always Move
              Forward."
            </p>
          </div>
          <div>
            <img src="/care_with_comfort.webp" alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="w-full lg:w-[180vh] mx-auto  grid  grid-cols-1 lg:grid-cols-2 p-6 bg-white my-7 rounded-xl gap-8 ">
          <div>
            <img src="/care_with_comfort.webp" alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="w-full lg:w-[180vh] mx-auto  grid  grid-cols-1 lg:grid-cols-2 p-6 bg-white my-7 rounded-xl gap-8">
          <div className="flex flex-col  items-start justify-center gap-5 ">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Services At ENC
            </h2>
            <p className="text-[14px]">
              Career Coaching & Individual Development: Personalized coaching
              for career advancement, personal growth, and professional
              development. We help individuals turn their dreams into actionable
              plans for success...
            </p>
            <p>
              Disability Advocacy & Support: Specialized services for
              individuals navigating life after a stroke, spinal cord injury, or
              other life-altering events. We offer peer coaching, guidance, and
              advocacy to help clients regain confidence and independence.
            </p>

            <p className="text-[14px]">
              Workshops & Training: Interactive workshops and training programs
              tailored to meet the unique needs of individuals, nonprofits, and
              community organizations.
            </p>
            <p className="text-[14px]">
              Community Engagement & Advocacy: We collaborate with local,
              national, and global partners to raise awareness, advocate for
              systemic change, and ensure the voices of marginalized communities
              are heard and valued.
            </p>
          </div>
          <div>
            <img src="/care_with_comfort.webp" alt="" className="rounded-xl" />
          </div>
        </div>

        <div className="w-full lg:w-[180vh] mx-auto  grid  grid-cols-1 lg:grid-cols-2 p-6 bg-white my-7 rounded-xl gap-8 ">
          <div>
            <img src="/care_with_comfort.webp" alt="" className="rounded-xl" />
          </div>
          <div className="flex flex-col  items-start justify-center gap-5 ">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose ENC</h2>
            <p className="text-[14px]">
              Personalized Approach: We understand that every individual’s
              journey is unique. Our services are customized to meet each
              client’s specific needs, goals, and circumstances.
            </p>
            <p className="text-[14px]">
              Proven Impact: Our work has changed lives, careers, and
              communities. From guiding stroke survivors to advocating for
              public policy changes, our impact is both local and global.
            </p>
            <p className="text-[14px]">
              Trusted Network: Our extensive network of professionals,
              advocates, and community leaders ensures that our clients have
              access to the best resources and opportunities available.
            </p>
            <p>
              Join Our Circle Empowerment is not a destination—it's a journey.
              We invite you to join our circle and be a part of a community that
              champions growth, courage, and change. Whether you’re seeking
              career support, advocacy, or community engagement, ENC is here to
              walk with you every step of the way.
            </p>
            <p className="text-[14px]">
              Get in Touch Ready to take the next step in your journey toward
              empowerment? Contact us today and discover how ENC can support you
              in achieving your personal and professional goa
            </p>
            <div>
              <NavLink
                target="_blank"
                to={
                  "https://www.helpguide.org/wellness/health-conditions/living-well-with-a-disability"
                }
              >
                <button className="w-40 bg-[#fcd4b1]  font-semibold text-xl rounded-lg py-3">
                  learn More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Imfor;
