<!-- login page  -->

<template>
<div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button >Login</button>
          {error && <span>{error}</span>}
          <Link to="/">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <!-- <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div> -->
    </div>
</template>

<script>
</script>

<style scoped>
.login {
  /* height: 100%; */
  display: flex;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  /* margin-top: 30%; */
  

  .formContainer {
    flex: 3;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input{
        padding: 20px;
        border: 1px solid gray;
        border-radius: 5px;
      }

      button{
        padding: 20px;
        border-radius: 5px;
        border: none;
        background-color: teal;
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:disabled{
          background-color: #BED9D8;
          cursor: not-allowed;
        }
      }

      span{
        color: rgba(255, 0, 0, 0.591);
      }

      a{
        font-size: 14px;
        color: gray;
        border-bottom: 1px solid gray;
        width: max-content;
      }
    }
  }

  /* .imgContainer {
    flex: 2;
    background-color: #fcf5f3;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  } */
}

</style>