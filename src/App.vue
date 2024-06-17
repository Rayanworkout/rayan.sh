<script setup>

  import MacTerminal from './components/terminal.component.vue';
  import Slider from './components/slider.component.vue';
  import Skills from './components/skills.component.vue';
  import About from './components/about.component.vue';

  import { copyToClipboard } from "./utils/copyToClipboard";

  import { ref, onMounted } from 'vue';

  const whatCanIdo = ref('');

  let index = 0;
  const emailCopiedTypewriter = () => {
    const sentence = "Email copied to clipboard, see you soon !";

    if (index === 0) {
      whatCanIdo.value = "";
      copyToClipboard();
    }

    if (index < sentence.length) {
      whatCanIdo.value += sentence.charAt(index);
      index++;
      setTimeout(emailCopiedTypewriter, 100);
    } else {

      setTimeout(() => {
        whatCanIdo.value = "What can I do for you ?";
      }, 4000);
    }

  }

  onMounted(() => {
    whatCanIdo.value = "What can I do for you ?"
  });

</script>


<template>
  <div class="container py-5">
    <div class="my-5">
      <div class="row">
        <div class="col-md-4">
          <div class="head">
            <div class="hello"><span style="font-size: 18px;">
                Hello, I am
              </span>
              <h1 class="name">Rayan<span class="cursor">_</span></h1>
              <h2>> Backend Developer</h2>
              <h2>> Devops Engineer</h2>
            </div>
            <div class="my-4">
              <Slider />
            </div>
            <a class="cta" @click="emailCopiedTypewriter">Contact Me</a>
            <a class="cta mailto" href="mailto:rayan13170@protonmail.com">Contact Me</a>
            <a href="https://github.com/Rayanworkout" class="my-5 github-logo" target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg" width="45" height="50" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg></a>
          </div>
        </div>
        <div class="col-md-8 terminal">
          <MacTerminal />
        </div>
      </div>
      <div class="skills-title">
        <h1 class="text-center mb-3">{{ whatCanIdo }}</h1>
        <Skills />
      </div>
      <div class="about">
        <About />
      </div>
    </div>
  </div>
</template>


<style scoped>
  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .name {
    font-size: 45px;
    line-height: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .head span,
  .head a {
    font-size: 17px;
    line-height: 1;
  }

  .head h2 {
    font-size: 30px;
    line-height: 1;
    font-family: 'JetBrains Mono', 'monospace';
  }

  p,
  .hello span {
    font-family: 'JetBrains Mono', 'monospace';
  }

  .cta {
    padding: 10px 20px;
    background-color: #007bff;
    text-decoration: none;
    font-size: 16px;
    border-radius: 7px;
    color: white;
    transition: background-color 0.3s ease;
  }

  .cta:hover {
    background-color: #0056b3;
    cursor: pointer;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  .skills-title {
    margin-top: 150px;
  }

  /* MEDIA QUERIES */

  @media (max-width: 768px) {

    .head h2 {
      font-size: 23px;
    }

    h1 {
      font-size: 35px;
    }

    .github span,
    .github a,
    .blog span,
    .blog a {
      font-size: 18px;
    }

    .terminal,
    .cta {
      display: none;
    }

    .mailto {
      display: block;
    }

    .skills-title {
    margin-top: 15px;
  }
  }

  @media (min-width: 768px) {

    .mailto,
    .github-logo {
      display: none;
    }

  }

  /* END MEDIA QUERIES */
</style>