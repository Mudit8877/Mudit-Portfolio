import Image from 'next/image';

export default function Contact() {
  return (
    <section className="relative min-h-screen py-10 px-12 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white text-black">
      {/* Achievements Section */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-5xl xl:text-6xl mb-8 text-center">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/static/images/a1.jpeg"
                alt="Achievement 1"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">Winner at Tekathon 3.0</h3>
            <p className="text-lg text-center mt-2">
              Led #FarmTechTitans to victory among 650+ teams at Chandigarh
              University.
            </p>
          </div>
          {/* Achievement 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/static/images/z4.jpeg"
                alt="Achievement 2"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">Hackaccino Runner-Up</h3>
            <p className="text-lg text-center mt-2">
              Secured 2nd Runner-Up position at Hackaccino, organized by
              Bennett University.
            </p>
          </div>
          {/* Achievement 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/static/images/a4.jpeg"
                alt="Achievement 3"
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4">
              Finalist at Hackmol 5.0
            </h3>
            <p className="text-lg text-center mt-2">
              Selected as a finalist among 400+ teams in Hackmol 5.0,
              organized by Google Student Developer Clubs at NIT Jalandhar.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="text-xl text-center mt-8 font-semibold italic">
        &quot;Innovation and perseverance drive progress—every challenge is an opportunity to build something greater.&quot;
      </p>
    </section>
  );
}
