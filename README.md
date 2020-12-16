# ResumeTemplateSSG
Resume with Gatsby and docker

#TO view the Resume first you should have the docker desktop 
#then just create the docker image with this command in the directory of this dockerfile
#docker build --tag imagecv . 

#and then create a directory in the c: which is called "data"

#and finally to launch the container run this command 

#docker run --name containercv  --mount type=bind,source=C:\data\gatsby-config.js,target=/app/my-resume/gatsby-config.js  -p 8000:8000 imagecv
#Go to localhost:8000

#and once you want your information to be displayed just change the gatsby-config.js file to the data file (c:/data/gatsby-config.js)
