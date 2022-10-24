<template>
  <div>
    <section class="user-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="user-form-content ml-15">
              <h3>Register</h3>
              <form class="user-form">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        Name
                        <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
                        id="name"
                        type="text"
                        name="name"
                        ref="CustomerName"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        CompanyName
                        <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
                        id="cName"
                        type="text"
                        name="cName"
                        ref="CompanyName"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        Email
                        <span class="required">*</span>
                      </label>
                      <input class="form-control" id="email" type="email" name="email" ref="Email" />
                      <span class="text"></span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        PhoneNumber
                        <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
                        id="phone"
                        type="text"
                        name="phone"
                        ref="PhoneNumber"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        Password
                        <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
                        id="password"
                        type="password"
                        name="password"
                        ref="Password"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>
                        Country
                        <span class="required">*</span>
                      </label>
                      <input
                        class="form-control"
                        id="country"
                        type="text"
                        name="country"
                        ref="Country"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <button
                      class="default-btn register"
                      type="button"
                      @click="register"
                    >Register now</button>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label>Skype</label>
                      <input
                        class="form-control"
                        id="skypeId"
                        type="password"
                        name="skypeId"
                        ref="Skype"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: []
    };
  },
  methods: {
    register() {
      if (
        this.$refs.CustomerName.value !== "" &&
        this.$refs.Email.value !== "" &&
        this.$refs.Password.value !== "" &&
        this.$refs.PhoneNumber.value !== "" &&
        this.$refs.CompanyName.value !== "" &&
        this.$refs.Country.value !== "" &&
        this.$refs.Skype.value !== "" &&
        this.$refs.Email.value.indexOf("@") !== -1
      ) {
        var list = {
          CustomerName: this.$refs.CustomerName.value,
          Email: this.$refs.Email.value,
          Password: this.$refs.Password.value,
          PhoneNumber: this.$refs.PhoneNumber.value,
          CompanyName: this.$refs.CompanyName.value,
          Country: this.$refs.Country.value,
          Skype: this.$refs.Skype.value,
          From: 2
        };
        let formDate = new FormData();
        const values = Object.values(list);
        Object.keys(list).forEach((v, i) => {
          formDate.append(v, values[i]);
        });
        console.log(list);
        let reg = this.$axios({
          url: "api/CustomerHandle/CustomerRegister",
          method: "post",
          data: formDate,
          headers: { "Content-type": "application/x-www-form-urlencoded" }
        }).then(d => {
          console.log(d.data);
          if (d.data !== 1) {
            alert("the email address is already in use");
          } else {
            this.$router.push({
              path: `/login`
            });
          }
        });
      }else{
        alert("failed")
      }
    }
  }
};
</script>
<style lang="less" scoped>
.required {
  color: red;
}

.text {
  color: red;
  display: none;
}
</style>