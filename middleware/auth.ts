

export default defineNuxtRouteMiddleware(() => {
    // Middleware to enforce authentication on some pages.
    // On the template, use as follow:
    // definePageMeta({
    //     title: 'Page Title',
    //     description: 'Page description',
    //     middleware: 'auth', or ['auth', 'other-middleware']
    // });
    const user = useSupabaseUser();

    if (!user.value) {
        return navigateTo('/login');
    }

});