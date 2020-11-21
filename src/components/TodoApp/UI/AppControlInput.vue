<template>
  <div>
    <div class="form-group" v-if="controlType === 'other'">
      <label
        class="form-label"
        for="first"
        :class="{ active: isActive}"
        ><slot />
        <!-- <span class="hideFromScreen">
          <span class="error-hide"> EROARE: Nume de utilizator și/sau parolă incorect(ă) </span>
          <span class="error-hide">EROARE: Introduceți numele de utilizator și parola</span>
        </span> -->
      </label>
      <input
        name="first"
        class="form-input"
        v-bind="$attrs"
        :value="value"
        @focus="isActive = true"
        @blur="handleBlur"
        @input="$emit('input', $event.target.value)">
    </div>
    <div class="form-group" v-if="controlType === 'list'">
      <label 
        class="form-label"
        for="status"
        :class="{ active: isActive}"
        ><slot /></label>
      <input
        list="statuses"
        name="status"
        class="form-input"
        @focus="isActive = true"
        @blur="handleBlur"
        @input="$emit('input', $event.target.value)">
        
      <datalist id="statuses">
        <option value="pending" selected>Not Finished</option>
        <option value="completed">Finished</option>
      </datalist>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleBlur(e) {
      if(!e.target.value) {
        this.isActive = false;
      }
    },
  },
  props: {
    controlType: {
      type: String,
      default: 'other'
    },
    value: {
      type: String,
      default: ''
    }
  }
}

</script>

<style lang="scss">

  .form-group {
    position: relative;
    border-bottom: 2px solid #CBC5BF;
    padding: 2.4rem 0 rem 0;
    height: 3rem;
    margin: 0 10px 1rem 10px;
  }

  .form-label {
    display: block;
    color: #70665E;
    width: 100%;
    position: absolute;
    font-size: 16px;
    bottom: 22%;
    transition: font-size 0.2s
    cubic-bezier(0.4, 0, 0.2, 1), bottom 0.2s
    cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s
    cubic-bezier(0.4, 0, 0.2, 1);
  }

  .active {
    bottom: 70% !important;
    opacity: 1 !important;
    font-size: 14px;
  }

/*   hideFromScreen {
    position: absolute;
    left: -9999px;
    text-indent: -9999px;
  }

  .error-show{
    display: block;
  }

  .error-hide {
    display: none;
  } */

  .form-input {
    font-weight: 500;
    background: none;
    color: #3F3A36;
    width: 96%;
    border: none;
    height: 1.8em;
    position: absolute;
    left: 0%;
    outline: 0;
    top: 36%;
    z-index: 3;
    font-size: size(18);
  }

  @media (max-width: 500px), (max-height: 620px) {
    .form-group {
      flex: 100%
    }
  }

  /* .form-input.filled {
    box-shadow: 0 2px 0 0 lightgreen;
    &:before {
      content: "i";
      color: #fff;
      font-size: size(21);
      font-weight: 500;
      line-height: 1;
      display: inline-block;
      width: 100%;
      text-align: center;
      position: relative;
      top: 3px;
    }
  } */
</style>
