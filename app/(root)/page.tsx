import Image from "next/image";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import {auth} from "@clerk/nextjs";
import { clerkClient } from '@clerk/nextjs'

export default function Home () {
    const { sessionClaims } = auth()

    const userId = sessionClaims?.sub as string;
    const responseAwait =  async () => {
        const response = await clerkClient.users.getUser(userId);
        console.log(response, 'response in page.tsx')
    }
    responseAwait()

    console.log(sessionClaims, 'sessionclaims')

    console.log(userId, 'user d in page')

    //make query in mongo db for user existence
  return (
    <>
      <section className="bg-indigo-100 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
                <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
                <p className="text-lg md:text-24">Book and learn helpful tips from 3,168+ mentors in the world-class companies with our global community.</p>
                <Button size="lg" asChild className="button w-full sm:w-fit">
                    <Link href="#events">Explore Now</Link>
                </Button>
            </div>
            <Image src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"/>
        </div>
      </section>
        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
            <h2 className="h2-bold">
                Trusted by <br/> Thousands of Events
            </h2>
            <div className="flex w-full flex-col gap-5 md:flex-row">
                Search
                Category
            </div>
        </section>
    </>
  );
}
