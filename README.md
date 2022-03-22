# Project title

### Image Processing API

---

# Table of contents


- [Project Title](#project-title)
- [Table of contents](#table-of-contents)
- [Description](#description)
- [Requirements](#requirements)
- [Technologies used](#technologies-used)
- [Basic scripts](#basic-scripts)
- [Linters and formatters scripts](#linters-and-formatters-scripts)
- [Endpoints](#endpoints)

---

# Description
[(Back to top)](#table-of-contents)

This is an api for image processing using sharp to resize any pic to any size and also works as a placeholder for images with different sizes and caching for fast response 

---

# Requirements
[(Back to top)](#table-of-contents)

## Dependencies
    
1. "express": "^4.17.3",
2. "node-cache": "^5.1.2",
3. "sharp": "^0.30.3"
---
## DevDependencies
1. "@types/eslint": "^8.4.1",
2. "@types/eslint-config-prettier": "^6.11.0",
3. "@types/eslint-plugin-prettier": "^3.1.0",
4.  "@types/express": "^4.17.13",
5.  "@types/jasmine": "^3.10.3",
6.  "@types/node": "^17.0.21",
7.  "@types/node-cache": "^4.2.5",
8.  "@types/prettier": "^2.4.4",
9.  "@types/sharp": "^0.30.0",
10.  "@types/supertest": "^2.0.11",
11. "@typescript-eslint/eslint-plugin": "^5.15.0",
12. "@typescript-eslint/parser": "^5.15.0",
13. "eslint": "^8.11.0",
14. "eslint-config-prettier": "^8.5.0",
15. "eslint-plugin-prettier": "^4.0.0",
16. "jasmine": "^4.0.2",
17. "jasmine-spec-reporter": "^7.0.0",
18. "nodemon": "^2.0.15",
19. "prettier": "^2.5.1",
20. "supertest": "^6.2.2",
21. "ts-node": "^10.7.0",
22. "typescript": "^4.6.2"
---

# Technologies used
[(Back to top)](#table-of-contents)

1. JavaScript
2. Node.js
3. Express.js
4. TypeScript
5. Jasmine
6. Prettier
7. Es-lint

---

# Basic scripts
[(Back to top)](#basic-scripts)

1. Test script: 'npm run test'
2. Build script: 'npm run build'
3. Start script: 'npm run start'

---

# Linters and formatters scripts
[(Back to top)](#linters-and-formatters-scripts)

1. Es-lint script: 'npm run lint'
2. Es-lint with try to fix script: 'npm run fix:lint'
3. Prettier script: 'npm run prettier'

---

# Endpoints
[(Back to top)](#endpoints)

1. Base endpoint (no image selected): /api/image
2. Image endpoint without size: /api/image?name={image-name}
3. Image endpoint with width and height: /api/image?name={image-name}&width={width}&height={height}
4. Image endpoint with width only and preserving aspect ratio: /api/image?name={image-name}&width={width}
5. Image endpoint with height only and preserving aspect ratio: /api/image?name={image-name}&height={height}