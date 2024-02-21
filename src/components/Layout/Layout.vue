<template>
  <div class="Layout">
    <slot name="header"></slot>
    <div class="container my-3">
      <div class="row">
        <div class="col-8">
          <slot name="main"></slot>
        </div>
        <div class="col-4">
          <slot name="side"></slot>
        </div>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
