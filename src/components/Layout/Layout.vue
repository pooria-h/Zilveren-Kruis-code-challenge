<template>
  <div class="Layout">
    <slot name="header"></slot>
    <div class="container my-3">
      <div class="row">
        <div class="col-md-8 col-12">
          <slot name="main"></slot>
        </div>
        <div class="col-md-4 col-12">
          <slot name="side"></slot>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
