
<script setup lang="ts">
import { splitProjects } from "~/utils/frontend/splitElements";


const projects = [
    {
        "name": "Project 1",
        "description": "This is a project description",
        "techs": [{
            "name": "React",
            "icon": "ri:reactjs-fill"
        }, {
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }]

    },
    {
        "name": "Project 2",
        "description": "This is a project description",
        "techs": [{
            "name": "React",
            "icon": "ri:reactjs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },
    {
        "name": "Project 3",
        "description": "This is a project description",
        "techs": [{
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },
    {
        "name": "Project 4",
        "description": "This is a project description",
        "techs": [{
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },
    {
        "name": "Project 4",
        "description": "This is a project description",
        "techs": [{
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },
    {
        "name": "Project 4",
        "description": "This is a project description",
        "techs": [{
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },
    {
        "name": "Project 4",
        "description": "This is a project description",
        "techs": [{
            "name": "VueJS",
            "icon": "ri:vuejs-fill"
        }, {
            "name": "Python",
            "icon": "carbon:logo-python"

        }, {
            "name": "NodeJS",
            "icon": "teenyicons:nodejs-outline"
        }]
    },

]

const techs: string[] = [];

// Getting tech lists from projects
projects.forEach(project => {
    project.techs.forEach(tech => {
        if (!techs.includes(tech.name)) {
            techs.push(tech.name);
        }
    });
});

// Monitoring checked techs
const checkedTechs = ref([]);

// Creating groups of 4 projects to display them inline
const splittedProjects = splitProjects(projects);

</script>


<template>
    <div class="bg-container px-1">
        <Navbar />
        <h1 class="text-center mt-5 pb-4">ls projects/<span class="cursor">__</span></h1>
        <div class="main-frame py-2 mx-2">
            <div class="my-border-bottom text-center py-1">
                <div v-if="checkedTechs.length > 0" class="d-flex justify-content-center gap-4">
                    <div v-for="tech in checkedTechs" :key="tech" class="mb-2 border-right">{{ tech }};</div>
                </div>
                <div v-else class="mb-2">
                    all;
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-4">
                    <div v-for="tech in techs" key="tech" style="padding-left: 30px;">
                        <input class="m-2" type="checkbox" :id="tech" v-model="checkedTechs" :value="tech" />
                        <label :for="tech">
                            <Icon name="ri:reactjs-fill" /> {{ tech }}
                        </label>
                    </div>
                </div>
                <div class="col-md-8">
                    <div v-for="list, index in splittedProjects" :key="index">
                        <div class="row">
                            <div v-for="project in list" :key="project.name" class="card m-2" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title text-center">{{ project.name }}
                                        <Icon name="ph:arrow-square-out" />
                                    </h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <div class="d-flex justify-content-center">
                                        <div v-for="tech in project.techs" :key="tech.name" class="m-1">
                                            <Icon :name="tech.icon" size="1.5rem" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container sm-content">
            <div class="col-md-8 text-center">
                <div v-for="list, index in splittedProjects" :key="index">
                    <div class="row">
                        <div v-for="project in list" :key="project.name" class="card m-2 mx-auto">
                            <div class="card-body">
                                <h5 class="card-title text-center">{{ project.name }}
                                    <Icon name="ph:arrow-square-out" />
                                </h5>
                                <p class="card-text">{{ project.description }}</p>
                                <div class="d-flex justify-content-center">
                                    <div v-for="tech in project.techs" :key="tech.name" class="m-1">
                                        <Icon :name="tech.icon" size="1.5rem" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-container {
    background-color: var(--new-background);
    width: 100%;
    min-height: 1000px;
}

h1 {
    color: white;
}


.main-frame {
    border: 2px solid var(--text);
}

.my-border-bottom {
    border-bottom: 2px solid var(--text);
}

input[type="checkbox"] {
    width: 18px;
    height: 15px;
    cursor: pointer;
}


label {
    cursor: pointer;
}


.card {
    background-color: var(--new-background);
    color: white;
    border: 2px solid var(--text);
    cursor: pointer;
}

.card:hover {
    border: 2px solid white;
    color: white;
}

.sm-content {
    display: none;
}

@media (max-width: 768px) {
    .col-md-4 {
        display: none;
    }

    .sm-content {
        display: block;
    }

    .col-md-8 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .main-frame {
        display: none;
    }

    .card {
        width: 80%;
    }

    .card h5 {
        font-size: 1rem;
    }

    .card-text {
        font-size: 0.8rem;
    }

}
</style>