module.exports = {
  env : {
    browser : true,
    node : true,
    jest : true,
    'cypress/globals':true
  },
  plugins: [
    'cypress'
  ],
  extends : [
    //vue
    //'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    //'plugin:vue/vue3-recommened',
    //javascript
    'eslint:recommended'
  ],
  parserOptions: {
    parser : '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules : {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline" : "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void":"always",
        "normal": "never",
        "component": "always"
      },
      "svg" : "always",
      "math": "always"
    }]
  }

}