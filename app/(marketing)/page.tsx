
import { Button } from "@/components/ui/button";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { useEffect } from "react";
import { addDays, startOfTomorrow, differenceInMilliseconds } from 'date-fns';



const MarketingPage: React.FC = () => {
  useEffect(() => {
    const showNotification = () => {
      if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('Yaznbook Tasks days', {
          icon: '/channels4_profile.jpg',
          tag: 'yaznbook',
          body: 'Hi, Make Doucments or Notes to make good day on tasks'
        });
      }
    };

    const scheduleNotification = () => {
      const now = new Date();
      const tomorrow = startOfTomorrow();
      const timeUntilTomorrow = differenceInMilliseconds(tomorrow, now);

      setTimeout(() => {
        showNotification();
        scheduleNotification();
      }, timeUntilTomorrow);
    };

    if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          scheduleNotification();
        }
      });
    }
  }, []);
  
  return (
    <div className="min-h-full flex flex-col" >
       <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
<Heading />
<Heroes />

     </div>
     <Footer />
    </div>
  )
}


export default MarketingPage;