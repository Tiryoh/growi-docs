(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{372:function(e,t,a){e.exports=a.p+"assets/img/appsettings18.26d5dfee.png"},373:function(e,t,a){e.exports=a.p+"assets/img/appsettings19.db47e3eb.png"},374:function(e,t,a){e.exports=a.p+"assets/img/appsettings20.5d1ea9ba.png"},665:function(e,t,a){"use strict";a.r(t);var o=a(48),s=Object(o.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"appsettings-tbd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appsettings-tbd","aria-hidden":"true"}},[e._v("#")]),e._v(" AppSettings (TBD)")]),e._v(" "),o("h2",{attrs:{id:"site-url-settings-tbd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#site-url-settings-tbd","aria-hidden":"true"}},[e._v("#")]),e._v(" Site URL Settings (TBD)")]),e._v(" "),o("h2",{attrs:{id:"app-settings-tbd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#app-settings-tbd","aria-hidden":"true"}},[e._v("#")]),e._v(" App Settings (TBD)")]),e._v(" "),o("h2",{attrs:{id:"email-settings-tbd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#email-settings-tbd","aria-hidden":"true"}},[e._v("#")]),e._v(" Email Settings (TBD)")]),e._v(" "),o("h2",{attrs:{id:"file-upload-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" File Upload Settings")]),e._v(" "),o("p",[e._v("Make settings for uploaded attachments to the GROWI pages.")]),e._v(" "),o("h3",{attrs:{id:"available-file-upload-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#available-file-upload-method","aria-hidden":"true"}},[e._v("#")]),e._v(" Available file upload method")]),e._v(" "),o("p",[e._v("Please use the following upload systems to save attached files.")]),e._v(" "),o("ul",[o("li",[e._v("Amazon S3")]),e._v(" "),o("li",[e._v("Google Cloud Storage")]),e._v(" "),o("li",[e._v("MongoDB")]),e._v(" "),o("li",[e._v("Local File System")])]),e._v(" "),o("h4",{attrs:{id:"upload-to-amazon-s3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-amazon-s3","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload to Amazon S3")]),e._v(" "),o("p",[e._v("Save files to Bucket of Amazon S3.")]),e._v(" "),o("p",[e._v("Please refer to "),o("RouterLink",{attrs:{to:"/en/admin-guide/management-cookbook/app-settings.html#get-aws-account-infomation"}},[e._v("here")]),e._v(" to set up Amazon S3.")],1),e._v(" "),o("h4",{attrs:{id:"upload-to-google-cloud-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-google-cloud-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload to Google Cloud Storage")]),e._v(" "),o("p",[e._v("Save files Bucket to Google Cloud Storage.")]),e._v(" "),o("p",[e._v("Please refer to "),o("RouterLink",{attrs:{to:"/en/admin-guide/management-cookbook/app-settings.html#set-up-google-cloud-storage"}},[e._v("here")]),e._v(" to set up Google Cloud Storage.")],1),e._v(" "),o("h4",{attrs:{id:"upload-to-mongodb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-mongodb","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload to MongoDB")]),e._v(" "),o("p",[e._v("Save files to MongoDB specified as the file upload system of GROWI data with\n"),o("a",{attrs:{href:"https://docs.mongodb.com/manual/core/gridfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GridFS"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"upload-to-file-systems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-file-systems","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload to File Systems")]),e._v(" "),o("p",[e._v("Save files to the local file system of the GROWI server.")]),e._v(" "),o("h3",{attrs:{id:"change-file-upload-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#change-file-upload-method","aria-hidden":"true"}},[e._v("#")]),e._v(" Change file upload method")]),e._v(" "),o("p",[e._v("The file upload method can be changed in the file upload settings of the application settings.")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Please note that by changing the file upload method in the middle,\nthe uploaded files so far will not be able to access.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(372),alt:"appsettings18"}})]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("If the file upload method is fixed by the environment variable\n"),o("code",[e._v("FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE")]),e._v(", the file upload method cannot be changed here.\nSee "),o("a",{attrs:{href:"../admin-cookbook/attachment"}},[e._v("here")]),e._v(" for more information.")])]),e._v(" "),o("p",[e._v("Settings are required when using Amazon S3 and Google Cloud Storage.\nPlease refer to the following to complete it.")]),e._v(" "),o("h3",{attrs:{id:"set-up-amazon-s3-bucket"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-amazon-s3-bucket","aria-hidden":"true"}},[e._v("#")]),e._v(" Set up Amazon S3 Bucket")]),e._v(" "),o("p",[e._v("Here are the steps to set up a connection to Amazon S3 (Amazon Simple Storage Service).")]),e._v(" "),o("h4",{attrs:{id:"get-aws-account-infomation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-aws-account-infomation","aria-hidden":"true"}},[e._v("#")]),e._v(" Get AWS account infomation")]),e._v(" "),o("ol",[o("li",[e._v("Sign in to "),o("a",{attrs:{href:"https://aws.amazon.com/console/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Management Console"),o("OutboundLink")],1),e._v(" and\nselect "),o("a",{attrs:{href:"https://console.aws.amazon.com/iam/home?#/security_credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("My Security Credentials"),o("OutboundLink")],1),e._v("\nfrom the dropdown that appears when clicking on the account name in the upper right corner of the navigation bar.")]),e._v(" "),o("li",[e._v('Expand "Access Key (Access Key ID and Secret Access Key)",\ncreate and store the Access Key ID and Secret Access Key for the AWS account.')]),e._v(" "),o("li",[e._v('Expand "Account ID" to comfirm the valid user ID.')])]),e._v(" "),o("h4",{attrs:{id:"get-or-change-permitions-of-amazon-s3-bucket"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-or-change-permitions-of-amazon-s3-bucket","aria-hidden":"true"}},[e._v("#")]),e._v(" Get or change permitions of Amazon S3 Bucket")]),e._v(" "),o("ol",[o("li",[e._v("Access to Amazon S3 "),o("a",{attrs:{href:"https://s3.console.aws.amazon.com/s3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dashboard"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Check the region and bucket name of the S3 Bucket to register.")]),e._v(" "),o("li",[e._v('Select the S3 Bucket to register and open "Access Rights".')]),e._v(" "),o("li",[e._v('Click the edit button of "Block Public Access".\nonly uncheck "Block public access" through the New Access Control List (ACL) and save the changes.')]),e._v(" "),o("li",[e._v('If the valid ID of the AWS account that has been added to the "Bucket Owner Permissions" and the "Access Control List" doesn\'t match step 3 of the procedure "Getting AWS Account Information,\nadd the account with the verified canonical ID to "Access Other AWS Accounts".\nIn this case, please check all types of authority.')])]),e._v(" "),o("h4",{attrs:{id:"resistor-bucket-to-growi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resistor-bucket-to-growi","aria-hidden":"true"}},[e._v("#")]),e._v(" Resistor Bucket to GROWI")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Please select AWS (S3) in the file upload settings of GROWI's app settings,\nand set the information confirmed in the above process.")])]),e._v(" "),o("li",[o("p",[e._v("In case of using other object storage services that have an S3-compatible API, such as MinIO,\nPlease enter the URL of the endpoint into the custom endpoint.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(373),alt:"appsettings19"}})]),e._v(" "),o("h3",{attrs:{id:"set-up-google-cloud-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-google-cloud-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Set up Google Cloud Storage")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Please refer to "),o("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v("\nfor more GCS information.")])]),e._v(" "),o("li",[o("p",[e._v("Select GCS in the file upload settings of GROWI app settings and set the information confirmed in the above process.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(374),alt:"appsettings20"}})]),e._v(" "),o("ul",[o("li",[e._v("Api Key Json Path: [The path to the JSON file for the GCP service account key (as seen from the GROWI root directory)]")]),e._v(" "),o("li",[e._v("Bucket Name: [Bucket Name of GCS]")]),e._v(" "),o("li",[e._v("Name Space: [Directory name for uploading files created in the bucket]")])]),e._v(" "),o("h2",{attrs:{id:"plugin-settings-tbd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plugin-settings-tbd","aria-hidden":"true"}},[e._v("#")]),e._v(" Plugin Settings (TBD)")])])},[],!1,null,null,null);t.default=s.exports}}]);