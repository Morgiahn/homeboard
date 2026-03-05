```shell
npm install react-router-dom
```
src
├── components
│     Menu.tsx
│
├── pages
│     Home.tsx
│     ApiData.tsx
│
├── App.tsx
├── main.tsx
└── index.css


```shell

# dist: 
npm run build


docker build -t homeboard-ui -f deploy/Dockerfile .

docker run -d --name homeboard-ui -p 8080:80 homeboard-ui


```