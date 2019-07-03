module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        // React rules
		"react/jsx-indent": 0,
		"react/no-typos": 0,
		"react/jsx-indent-props": 0,
        "react/jsx-filename-extension": 0,
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        // Jest rules
        "jest/no-identical-title": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        // Other rules
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
          "error",
          { "code": 80 }
        ]
    },
    "settings": {
        "react": {
            "version": "16.8"
        }
    }
};
