<script setup>

  import MacTerminal from './components/terminal.component.vue';
  import Slider from './components/slider.component.vue';
  import Skills from './components/skills.component.vue';

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
                Hi all, I am
              </span>
              <h1>Rayan<span class="cursor">_</span></h1>
              <h2>> Backend Developer</h2>
              <h2>> Devops Enthusiast</h2>
            </div>
            <div class="my-4">
              <Slider />
            </div>
            <a class="cta-button" @click="emailCopiedTypewriter">Contact Me</a>
          </div>
        </div>
        <div class="col-md-8">
          <MacTerminal />
        </div>
      </div>
      <div class="row my-5">
        <h1 class="text-center mb-5">{{ whatCanIdo }}</h1>
        <Skills />
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


  h1 {
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

  .cta-button {
    padding: 10px 20px;
    background-color: #007bff;
    text-decoration: none;
    font-size: 16px;
    border-radius: 7px;
    color: white;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #0056b3;
    cursor: pointer;
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
  }

  /* END MEDIA QUERIES */
</style>