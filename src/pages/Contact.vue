<template>
  <Layout>
    <h1 class="leading-loose font-normal">Contact</h1>

    <div class="flex">
      <div class="max-w-xs leading-normal">
        <p>
          Ken Wilson continues to perform throughout Britain and beyond.
          If you would like Ken to appear at one of your events please use the contact details below.
        </p>

        <p class="mt-6 font-bold">
          Facebook
        </p>
  
        <p class="ml-4">
          <a href="https://www.facebook.com/profile.php?id=100014788714532" class="text-darker no-underline hover:underline" target="_blank">Ken Wilson</a>
        </p>

        <p class="mt-6 font-bold">
          Telephone
        </p>

        <p class="ml-4">
          <a href="tel:+447905466907" class="text-darker no-underline hover:underline">07905 466 907</a>
        </p>

        <p class="mt-6 font-bold">
          Email
        </p>

        <p class="ml-4">
          <a href="mailto:info@kenwilsonalbums.com" class="text-darker no-underline hover:underline">info@kenwilsonalbums.com</a>
        </p>
      </div>

      <div class="ml-24 w-1/3">
        <p class="mb-2">
          You can use the contact form below to send a message directly to Ken.
        </p>

        <div id="MainContent_UpdatePanel1">
          <label for="MainContent_tbName" id="MainContent_Label10" class="block mb-1 cursor-pointer">Name</label>
          <input name="ctl00$MainContent$tbName" type="text" id="MainContent_tbName" class="border border-dark py-2 px-3 rounded w-full">

          <span data-val-controltovalidate="MainContent_tbName" data-val-display="Dynamic" id="MainContent_rfvName" data-val="true" data-val-evaluationfunction="RequiredFieldValidatorEvaluateIsValid" data-val-initialvalue="" style="display:none;"><label for="MainContent_tbName" id="MainContent_Label1" class="text-xs cursor-pointer text-dark">Please include your Name</label></span>

          <label for="MainContent_tbEmail" id="MainContent_Label9" class="mt-4 block mb-1 cursor-pointer">Email</label>
          <input name="ctl00$MainContent$tbEmail" type="text" id="MainContent_tbEmail" class="border border-dark py-2 px-3 rounded w-full">

          <span data-val-controltovalidate="MainContent_tbEmail" data-val-display="Dynamic" id="MainContent_rfvEmail" data-val="true" data-val-evaluationfunction="RequiredFieldValidatorEvaluateIsValid" data-val-initialvalue="" style="display:none;"><label for="MainContent_tbEmail" id="MainContent_Label2" class="text-xs cursor-pointer text-dark">Please include your Email address</label></span>

          <span data-val-controltovalidate="MainContent_tbEmail" data-val-display="Dynamic" id="MainContent_revEmail" data-val="true" data-val-evaluationfunction="RegularExpressionValidatorEvaluateIsValid" data-val-validationexpression="^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$" style="display:none;"><label for="MainContent_tbEmail" id="MainContent_Label3" class="block text-sm text-dark">This email isn't valid</label></span>


          <label for="MainContent_tbTel" id="MainContent_Label6" class="mt-4 flex mb-1 cursor-pointer justify-between">
            Telephone <small class="text-dark">optional</small>
          </label>

          <input name="ctl00$MainContent$tbTel" type="text" id="MainContent_tbTel" class="border border-dark py-2 px-3 rounded w-full">


          <label for="MainContent_tbSubject" id="MainContent_Label7" class="mt-4 flex mb-1 cursor-pointer justify-between">
            Subject <small class="text-dark">optional</small>
          </label>
          <input name="ctl00$MainContent$tbSubject" type="text" id="MainContent_tbSubject" class="border border-dark py-2 px-3 rounded w-full">

          <label for="MainContent_tbMessage" id="MainContent_Label8" class="mt-4 block mb-1 cursor-pointer">Message</label>
          <textarea name="ctl00$MainContent$tbMessage" rows="2" cols="20" id="MainContent_tbMessage" class="border border-dark py-2 px-3 rounded w-full h-24"></textarea>
    
          <span data-val-controltovalidate="MainContent_tbMessage" data-val-errormessage="*required" data-val-display="Dynamic" id="MainContent_rfvMessage" data-val="true" data-val-evaluationfunction="RequiredFieldValidatorEvaluateIsValid" data-val-initialvalue="" style="display:none;"><label for="MainContent_tbMessage" id="MainContent_Label4" class="block cursor-pointer text-xs text-dark">Please include a Message</label></span>



          <a id="MainContent_BtnSend" class="mt-4 text-darker no-underline border border-darker rounded-full py-2 px-6 uppercase text-md inline-block hover:bg-darker hover:text-lighter" href='javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("ctl00$MainContent$BtnSend", "", true, "", "", false, true))'>
            <span>Send Message</span>
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Ken Wilson'
  }
}
</script>
