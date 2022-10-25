export default function(context) {

    context.$axios.setBaseURL(context.env.baseUrl)
    context.$axios.onResponse(res => {
      return res
    })
   context.$axios.onError(error => {
      const code = parseInt(error.response && error.response.status);
      if (code === 400) {
        context.redirect("/400");
      }
    });
  }