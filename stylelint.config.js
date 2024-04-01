{
    "extends": "stylelint-config-standard",
    "ignoreFiles": [],
    "overrides": [
      {
        "files": ["**/*.js"],
        "rules": {
          "selector-type-no-unknown": null // Disable rule specific to CSS selectors in JS
        }
      }
    ]
  }