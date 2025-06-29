<template>
    <div class="modal__container">
      <div class="modal">
        <button @click="close()" class="modal__close-btn">&#10006;</button>
      <h3 class="modal__title">Редактирование курса </h3>
      <form class="form" action="">

        <label  for="form__name">
         <span class="input-title" >Название курса:</span>
          <input  id="form__name" class="form__name" type="text">
        </label>

        <label for="form__description">
          <span class="input-title">Описание курса:</span>
          <input id="form__description" class="form__description" type="text">
        </label>
        
        <div class="form__btn-group">
          <button class="form__btn-save" type="submit">Cохранить</button>
          <button class="form__btn-cancel">Отмена</button>
        </div>

        </form>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({card:Object,index:Number})
function close() {
  alert('a');
}

</script>
<style scoped>
  .modal__title{
  text-align: center;
  margin-bottom: 26px;
  font-weight: 900;
}
 .modal__container{
  background-color:var(--modal-bg);
  position: fixed;
  margin:0 auto ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .modal{
  background-color:var(--white);
  width:365px;
  height: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 42px;
  position: relative;
 }
 .form{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  height: 100%;
 }
 .input-title{
  display: block;
  font-size: 15px;
  
 }
 .form__name,.form__description,.form__btn-save,.form__btn-cancel{
  height: 15px;
 }
 .form__btn-group{
  margin-top: 26px;
  display: flex;
  gap: 10px;
 }
 .form__btn-save,.form__btn-cancel{
  width: 145px;
  font-size: 10px;
 }
 .form__btn-save{
  background-color:var(--done);
 }
 .modal__close-btn{
  position: absolute;
  position: absolute;
    right: 18px;
    top: 18px;
    border:none;
    background:none;
    
 }

</style>
