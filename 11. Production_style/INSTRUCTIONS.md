Genrate tsconfig.json file using the following command

```bash
tsc --init
```


To keep running the typescript compiler in watch mode, use the following command

```bash
tsc -w
```

In the tsconfig.json file, change the outDir to "dist" and rootDir to "src" to keep the compiled files in the dist folder.

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```


