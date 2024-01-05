
// The function that will catch
// all requests that are not caught by other routes
export default defineEventHandler((event) => {
    return { success: false, message: 'route not found' }
  });