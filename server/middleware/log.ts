
export default defineEventHandler((event) => {
    const currentTime = new Date();
    const timeString = currentTime.toTimeString().split(' ')[0];

    const log = `${timeString} ${event.method} ${getRequestURL(event)}`;
    console.log(log);
});
