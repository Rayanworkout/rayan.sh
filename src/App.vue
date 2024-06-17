<script setup>

  import MacTerminal from './components/terminal.component.vue';

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
            <div>

            </div>
          </div>
        </div>
        <div class="col-md-8">
          <MacTerminal />
        </div>
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
    color: #E5E9F0;
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
    color: white;
    font-family: 'JetBrains Mono', 'monospace';
  }

  p,
  .hello span {
    color: #c8c8c8b9;
    font-family: 'JetBrains Mono', 'monospace';
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