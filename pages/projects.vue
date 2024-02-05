
<script setup lang="ts">
import { splitProjects } from "~/utils/frontend/splitElements";

interface Tech {
    name: string;
    icon: string;
}

// Monitoring checked techs
const checkedTechs = ref<string[]>([]);

// Ref to hold all techs
const techsNames = ref<Tech[]>([]);

// And all projects
const projects = ref<any[]>([]);

// Fetching projects
const { data: projectsList, error: projectError } = await useFetch('/api/projects/all');
// And all techs
const { data: techs, error: techsError } = await useFetch('/api/projects/techs/all');

if (!techsError.value) {
    techsNames.value = techs.value.map((tech: any) => {
        // Making each tech as { name: React, icon: reactIconName }
        return { name: tech.name, icon: tech.iconName };
    });
}

if (!projectError.value) {
    projects.value = projectsList.value;
}

// Filtering the project based on checked techs
// line 1: if no tech is checked, return all projects
const filteredProjects = computed(() => {
    if (checkedTechs.value.length === 0) {
        return projects.value;
    }
    return projects.value.filter(project => {
        // Return projects where at least one tech is checked
        return project.techs.some((tech: { name: string, iconName: string }) => checkedTechs.value.includes(tech.name));
    });
});

// Creating groups of 4 projects to display them inline
// Using computed() to update the value when filteredProjects changes
const splittedProjects = computed(() => splitProjects(filteredProjects.value as unknown as any[]));


import { useMouseFollower } from '@/composables/useMouseFollower';

const { circleStyle } = useMouseFollower();

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
                    <div v-for="tech in techsNames" key="tech" style="padding-left: 30px;">
                        <input class="m-2" type="checkbox" :id="tech.name" v-model="checkedTechs" :value="tech.name" />
                        <label :for="tech.name">
                            <Icon :name="tech.icon" /> {{ tech.name }}
                        </label>
                    </div>
                </div>
                <div class="col-md-8">
                    <div :style="circleStyle" class="mouse-follower"></div>
                    <div v-for="list, index in splittedProjects" :key="index">
                        <div class="row">
                            <div v-for="project in list" :key="project.name" class="card m-2" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title text-center text-white">{{ project.name }}</h5>
                                    <div class="icon-container">
                                        <NuxtLink v-show="project.url !== null" :to="project.url" target="_blank"
                                            class="icon.icon-container">
                                            <i class="bi bi-box-arrow-up-right"></i>
                                        </NuxtLink>
                                        <NuxtLink v-show="project.githubUrl !== null" :to="project.githubUrl"
                                            target="_blank"><i class="bi bi-github px-2"></i>
                                        </NuxtLink>
                                    </div>


                                    <p class="card-text mt-4">/* {{ project.description }} */</p>
                                </div>
                                <div class="d-flex justify-content-around mb-2">
                                    <div v-for="tech in project.techs" :key="tech.name" class="m-1">
                                        <Icon :name="tech.iconName" size="1.5rem" />
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
                                <h5 class="card-title text-center text-white">{{ project.name }}</h5>
                                <div class="icon-container my-3">
                                    <NuxtLink v-show="project.url !== null" :to="project.url" target="_blank"
                                        class="icon.icon-container">
                                        <i class="bi bi-box-arrow-up-right"></i>
                                    </NuxtLink>
                                    <NuxtLink v-show="project.githubUrl !== null" :to="project.githubUrl" target="_blank"><i
                                            class="bi bi-github px-2"></i>
                                    </NuxtLink>
                                </div>
                                <p class="card-text">/* {{ project.description }} */</p>
                            </div>
                            <div class="d-flex justify-content-around mb-3 techs">
                                <div v-for="tech in project.techs" :key="tech.name" class="m-1">
                                    <Icon :name="tech.iconName" size="1.5rem" />
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

.icon-container i {
    color: var(--text);
    cursor: pointer;
    font-size: larger;
}

.icon-container i:hover {
    color: white;
}

.icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

label {
    cursor: pointer;
}

.follower {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
}

.card {
    background-color: var(--new-background);
    color: white;
    border: 2px solid var(--text);
    cursor: default;
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

    .icon-container i {
        font-size: large;
    }

}
</style>