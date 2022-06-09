<template>
  <div class="options-board">
    <div class="calender">
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
      <div class="date-weekday">
        <div class="day">06</div>
        <div class="weekday">周一</div>
      </div>
    </div>
    <div class="meal">
      <div class="meal-period">早餐</div>
      <div class="meal-period">午餐</div>
      <div class="meal-period">晚餐</div>
    </div>
    <div class="shops">
      <div class="shop">全部商家1</div>
      <div class="shop">商家1</div>
      <div class="shop">商家1</div>
      <div class="shop">商家1</div>
      <div class="shop">商家1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsBoard'
}
</script>

<style lang="scss" scoped>
.options-board {
  margin-left: 20rem;
  border: 1px solid blue;

  .calender,
  .meal,
  .shops {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 2rem;
    margin: 1rem 0;
  }

  .calender {
    .date-weekday {
      border: 1px solid red;
      font-size: 2rem;
    }
  }

  .meal-period {
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    border: 1px solid blue;
    min-width: 4rem;
  }

  .shop {
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    border: 1px solid green;
  }
}
</style>
