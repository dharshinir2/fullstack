// const S3Uploader=()=>{
//     // eslint-disable-next-line no-unused-vars
//     const config= {
//         bucketName: import.meta.env.AWS_BUCKET_NAME,
//         dirName:"user_profile",
//         region:import.meta.env.AWS_BUCKET_REGION,
//         accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey:import.meta.env.AWS_SECRET_ACCESS_KEY_ID
//     }
//     const handleFileUpload=(event)=>{
//         console.log(event.target.file[0]);
//         AWS.config.update({
//             accessKeyId: config.accessKeyId,
//             secretAccessKey: config.secretAccessKey,
//             region: config.region
//         })

//         // Creating new instance
//         const S3 = new AWS.S3();
//     }
        
        
    
//     return(
//         <div>
//             <input type="file" onChange={handleFileUpload}></input>
//         </div>
//     )
// }
// export default S3Uploader