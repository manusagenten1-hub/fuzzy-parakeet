import { useState, useEffect } from 'react';

export function useCountdown(initialDays: number = 3) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const STORAGE_KEY = 'fathers_day_offer_end_time';
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
      // Set end time to 3 days from now
      const newEndTime = new Date().getTime() + initialDays * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      endTime = newEndTime.toString();
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = parseInt(endTime!) - now;
      return difference > 0 ? difference : 0;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [initialDays]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (!mounted) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
}
