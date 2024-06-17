<script setup>

    const skills = [
        {
            title: "Backend Development",
            description: ["Design, build and test robust backend applications using Python and Node.js.",
                "Develop RESTful APIs to facilitate seamless communication between frontend and backend systems.",
                "Implement authentication and authorization mechanisms to ensure secure access to applications.",
                "Integrate with third-party services and APIs to extend application functionality.",
                "Ensure code quality and maintainability through unit testing, integration testing, and code reviews.",
                "Write documentation to help other developers understand the codebase."
            ]
        },
        {
            title: 'DevOps',
            description: ["Build, deploy and maintain efficient CI/CD pipelines using tools like Github actions, Ansible or manually with Bash scripts.",
                "Facilitate seamless communication between development and operations teams.",
                "Containerize applications with Docker and manage them using Docker Compose.",
                "Deploy applications to the cloud using AWS or Google Cloud.",
                "Administer and secure Linux server instances."
            ]
        },
        {
            title: 'Frontend Development',
            description: ["Integrate designs into responsive web applications using HTML, CSS, and JavaScript.",
                "Develop interactive web applications with Vue.js or React.js, optimized for performance and SEO."
            ]
        }
    ]

</script>

<template>

    <h1 class="text-center mb-5">How can I help you ?</h1>

    <div v-for="skill in skills">
        <h3 class="my-2">- {{ skill.title }}</h3>
        <div v-for="line in skill.description">
            <p>{{ line }}</p>
        </div>
    </div>

</template>

<style scoped>
    @media (max-width: 768px) {

        h1 {
            font-size: 35px;
        }

        h3 {
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }

    }
</style>