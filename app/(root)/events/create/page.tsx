import EventForm from "@/components/shared/EventForm";
import {auth, clerkClient} from '@clerk/nextjs'
const CreateEvent = () => {
    const { sessionClaims } = auth()
    const userId = sessionClaims?.sub as string;

    const responseAwait =  async () => {
        const response = await clerkClient.users.getUser(userId);
        console.log(response, 'response in page create')
    }
    responseAwait()
    console.log(userId, "user id create")
    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h2-bold text-center sm:text-left">Create Event</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId={userId} type="Create"/>
            </div>
        </>
    )
}


export default CreateEvent