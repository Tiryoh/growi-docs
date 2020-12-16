(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{648:function(e,t,i){"use strict";i.r(t);var a=i(48),o=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"file-upload-settings"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" File Upload Settings")]),e._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),i("li",[i("a",{attrs:{href:"#file-upload-method-settings-for-attached-files"}},[e._v("File upload method settings for attached files")])]),i("li",[i("a",{attrs:{href:"#attached-file-size-limitation"}},[e._v("Attached File Size Limitation")])])])]),i("p"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("This chapter introduces how to change the destination to upload attachment files.")]),e._v(" "),i("h2",{attrs:{id:"file-upload-method-settings-for-attached-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-method-settings-for-attached-files","aria-hidden":"true"}},[e._v("#")]),e._v(" File upload method settings for attached files")]),e._v(" "),i("p",[e._v("The following can be used to save the attachment file of the GROWI page. See "),i("RouterLink",{attrs:{to:"/en/admin-guide/management-cookbook/app-settings.html#file-upload-settings"}},[e._v("here")]),e._v(" for details.")],1),e._v(" "),i("ul",[i("li",[e._v("Amazon S3")]),e._v(" "),i("li",[e._v("Google Cloud Storage")]),e._v(" "),i("li",[e._v("MongoDB")]),e._v(" "),i("li",[e._v("Local File System")])]),e._v(" "),i("h3",{attrs:{id:"fixing-file-upload-method-for-attached-files-with-environment-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixing-file-upload-method-for-attached-files-with-environment-variables","aria-hidden":"true"}},[e._v("#")]),e._v(" Fixing file upload method for attached files with environment variables")]),e._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Warning: Changing the file upload destination will lose access to the previously uploaded files.")])]),e._v(" "),i("p",[e._v("When you want to fix the file upload method of the attached files with the environment variable, set the environment variable "),i("code",[e._v("FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE")]),e._v(" to "),i("code",[e._v("true")]),e._v(".")]),e._v(" "),i("p",[e._v("Also, set the value of the environment variable "),i("code",[e._v("FILE_UPLOAD")]),e._v(" referring to the table below.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("File Upload Method")]),e._v(" "),i("th",[i("code",[e._v("FILE_UPLOAD")])])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Amazon S3")]),e._v(" "),i("td",[i("code",[e._v("aws")])])]),e._v(" "),i("tr",[i("td",[e._v("Google Cloud Storage")]),e._v(" "),i("td",[i("code",[e._v("gcs")])])]),e._v(" "),i("tr",[i("td",[e._v("MongoDB")]),e._v(" "),i("td",[i("code",[e._v("mongodb")])])]),e._v(" "),i("tr",[i("td",[e._v("Local File System")]),e._v(" "),i("td",[i("code",[e._v("local")])])])])]),e._v(" "),i("p",[e._v("If the file upload method is fixed by the environment variable "),i("code",[e._v("FILE_UPLOAD_USES_ONLY_ENV_VAR_FOR_FILE_UPLOAD_TYPE")]),e._v(",\nthe function of selecting file upload method on the management page is disabled.")]),e._v(" "),i("h3",{attrs:{id:"google-cloud-storage-settings-with-environment-variable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-storage-settings-with-environment-variable","aria-hidden":"true"}},[e._v("#")]),e._v(" Google Cloud Storage Settings with environment variable")]),e._v(" "),i("p",[e._v("If you don't set a value in the GCS Settings form in the File Upload Settings,\nuse the default value below.")]),e._v(" "),i("ul",[i("li",[e._v("Api Key Json Path: "),i("code",[e._v("GCS_API_KEY_JSON_PATH")])]),e._v(" "),i("li",[e._v("Bucket Name: "),i("code",[e._v("GCS_BUCKET")])]),e._v(" "),i("li",[e._v("Name Space: "),i("code",[e._v("GCS_UPLOAD_NAMESPACE")])])]),e._v(" "),i("h3",{attrs:{id:"fixing-gcs-settings-with-environment-variable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixing-gcs-settings-with-environment-variable","aria-hidden":"true"}},[e._v("#")]),e._v(" Fixing GCS Settings with environment variable")]),e._v(" "),i("p",[e._v("If you want to fix the GCS settings with environment variables, set the environment variable "),i("code",[e._v("GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")]),e._v(" to "),i("code",[e._v("true")]),e._v(" and put a value in the above environment variable."),i("br"),e._v("\nIf it is not set, null will be entered.")]),e._v(" "),i("p",[e._v("If pinning the GCS settings with the environment variable "),i("code",[e._v("GCS_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")]),e._v(" is enabled, the form values of the GCS settings in the file upload settings are disabled and cannot be changed.")]),e._v(" "),i("h2",{attrs:{id:"attached-file-size-limitation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#attached-file-size-limitation","aria-hidden":"true"}},[e._v("#")]),e._v(" Attached File Size Limitation")]),e._v(" "),i("p",[e._v("The following environment variables allow you to set the maximum size of files that can be uploaded at one time and the cumulative size of attached files to all pages.")]),e._v(" "),i("p",[e._v("In both cases, the unit is "),i("code",[e._v("bytes")]),e._v(". By default, both values are "),i("code",[e._v("Infinity")]),e._v(" and the file size is not limited.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("MAX_FILE_SIZE")]),e._v(" : [The upper limit of uploadable file size (bytes)]")]),e._v(" "),i("li",[i("code",[e._v("FILE_UPLOAD_TOTAL_LIMIT")]),e._v(" : [The upper limit of the total size of attached files in DB (bytes)]")])])])},[],!1,null,null,null);t.default=o.exports}}]);