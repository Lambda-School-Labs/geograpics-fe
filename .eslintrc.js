module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: 'airbnb',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions" : "off",
    },
    overrides: [
        {
            files: ["*.spec.js"],
            rules: {
                "react/jsx-filename-extension": "off"
            }
        }
    ]
};
  
  //add :      "cypress/globals": true, :        after line 6
  //add cypress on line 22