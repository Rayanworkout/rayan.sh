

// Middleware to redirect to dashboard if user is already authenticated
export default defineNuxtRouteMiddleware((to, from) => {


    const { status } = useAuth();
    if (status.value === 'authenticated') {

        // Redirect to dashboard
        return navigateTo('/dashboard');
    }

});