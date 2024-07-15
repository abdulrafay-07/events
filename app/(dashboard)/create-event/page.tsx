import { CreateEventForm } from "../_components/create-event-form";

const CreateEvent = () => {
   return (
      <div className="flex items-center justify-center gap-4 max-w-[85%] mx-auto h-full">
         <CreateEventForm />
      </div>
   )
};

export default CreateEvent;