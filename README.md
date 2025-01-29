# PANALOBET PH

![image](https://github.com/user-attachments/assets/8b581cb4-a3ae-45bb-8796-49ff4d227d06)


## Local Development 

Clone the repo or download the zip file to your machine. (Make sure you have installed [Nodejs](https://nodejs.org/en), [pnpm](https://pnpm.io/), and [Git](https://git-scm.com/))
```
 git clone https://github.com/jovpbcfd/megaparibd.git
```

After you clone the repo, navigate to that file, by running this command
```
  cd megaparibd
```

Then run this command to install the package 
```
  pnpm install 
```
Navigate to `pb-official` directory
```
 cd pb-official
```
Then run this command to install sanity packages 
```
pnpm install
```
For sanity you can register a free account [Sanity](https://www.sanity.io/)

Make a `.env` file on the root of your directory as well as inside `pb-official` directory,
then copy value inside the `.env.dev.example` file and paste it to your created `.env`.

The file tree directory would look like this: 

```bash
├── app
├── components
├── lib 
├── data 
├── .env
├── pnpm-lock.json 
├── package.json 
├── ...other-configuration-file 
├── pb-official 
│       ├── .env 
│       ├── ...other-configuration-file 
│       ├── pnpm-lock.json
│       └── package.json
```

 



