import EventForm from "@/components/shared/EventForm";
import {auth, clerkClient} from '@clerk/nextjs'
const UpdateEvent = () => {
    const { sessionClaims } = auth()
    const userId = sessionClaims?.sub as string;
    const responseAwait =  async () => {
        const response = await clerkClient.users.getUser(userId);
        console.log(response, 'response in page update')
    }
    responseAwait()

    console.log(userId, 'id in the update page in id')

    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
                <h3 className="wrapper h2-bold text-center sm:text-left">Create Event</h3>
            </section>
            <div className="wrapper my-8">
                <EventForm userId={userId} type="Update"/>
            </div>
        </>
    )
}


export default UpdateEvent