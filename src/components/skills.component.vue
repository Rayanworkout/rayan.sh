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

    <div v-for="skill in skills" class="skill-section">
        <h3 class="skill-title my-2">{{ skill.title }}</h3>
        <ul class="skill-list mb-4">
            <li v-for="line in skill.description" class="skill-item">{{ line }}</li>
        </ul>
    </div>

</template>

<style scoped>
    .skill-section {
        margin-bottom: 20px;
    }

    .skill-title {
        font-size: 1.4em;
        font-weight: bold;
    }

    .skill-list {
        list-style-type: disc;
        margin-left: 20px;
    }

    .skill-item {
        margin-bottom: 10px;
        font-size: 1.1em;
        line-height: 1.5;
    }


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