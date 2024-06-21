import Image from "next/image";
import { H2, Title } from "./UI/sectionHeading";

export default function TeamSection() {
  return (
    <section className="py-24 relative w-full">
      <div className="container">
        <div className="flex flex-col items-center justify-center m-auto text-center max-w-[32rem]">
          <Title>Our Team Member</Title>
          <H2>Meet Our Most Creative Minds That's Are Professional</H2>
        </div>
      </div>

      {/* <!-- Team cards --> */}
      <div className="container team-cards grid gap-8 mt-16 grid-cols-3">
        <div className="single-team-card overflow-hidden w-full flex flex-col gap-12 items-center">
          <Image
            height={450}
            width={450}
            src="/images/team/1.png"
            alt="team"
            className="w-[inherit] aspect-square object-cover cursor-pointer p-4 border-4 border-dashed border-gray-500 rounded-full"
          />
          <div className="team-info text-center text-slate-800">
            <h3 className="text-2xl font-bold">Rahul Gupta</h3>
            <p className="text-base font-semibold text-primary uppercase">
              Web Developer
            </p>
          </div>
        </div>
        <div className="single-team-card overflow-hidden w-full flex flex-col gap-12 items-center">
          <Image
            height={450}
            width={450}
            src="/images/team/2.png"
            alt="team"
            className="w-[inherit] aspect-square object-cover cursor-pointer p-4 border-4 border-dashed border-gray-500 rounded-full"
          />
          <div className="team-info text-center text-slate-800">
            <h3 className="text-2xl font-bold">Sonali Rana</h3>
            <p className="text-base font-semibold text-primary uppercase">
              UI/UX Designer
            </p>
          </div>
        </div>
        <div className="single-team-card overflow-hidden w-full flex flex-col gap-12 items-center">
          <Image
            height={450}
            width={450}
            src="/images/team/3.png"
            alt="team"
            className="w-[inherit] aspect-square object-cover cursor-pointer p-4 border-4 border-dashed border-gray-500 rounded-full"
          />
          <div className="team-info text-center text-slate-800">
            <h3 className="text-2xl font-bold">Ashish Pandey</h3>
            <p className="text-base font-semibold text-primary uppercase">
              App Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
