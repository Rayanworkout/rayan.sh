
<script setup lang="ts">


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
            "icon": "ri:python-fill"

        }, {
            "name": "NodeJS",
            "icon": "ri:nodejs-fill"
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
            "icon": "ri:python-fill"

        }, {
            "name": "NodeJS",
            "icon": "ri:nodejs-fill"
        }]
    }
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

const checkedTechs = ref([]);


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
                <div class="col-md-8 d-flex justify-content-center">col-8</div>
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
</style>