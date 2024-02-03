
<script setup lang="ts">

const techs = ["React", "VueJS", "Python", "NodeJS"]


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



</script>


<template>
    <div class="bg-container px-1">
        <Navbar />
        <h1 class="text-center mt-5 pb-4">ls projects/<span class="cursor">__</span></h1>
        <div class="main-frame py-2 mx-2">
            <div class="row my-5">
                <div class="col-md-4">
                    <div v-for="tech in techs" key="tech" style="padding-left: 30px;">
                        <input class="m-2" type="checkbox" :id="tech" />
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
    padding: 20px;
    /* Padding inside the frame */
}

.frame-column {
    border-right: 1px solid var(--text);
    padding-right: 15px;
    height: 100%;
}
</style>