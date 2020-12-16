(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{494:function(t,a,v){t.exports=v.p+"assets/img/import1.8dae788f.png"},495:function(t,a,v){t.exports=v.p+"assets/img/import2.7efb3426.png"},496:function(t,a,v){t.exports=v.p+"assets/img/import3.44383d0d.png"},766:function(t,a,v){"use strict";v.r(a);var i=v(48),_=Object(i.a)({},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"データのインポート"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#データのインポート","aria-hidden":"true"}},[t._v("#")]),t._v(" データのインポート")]),t._v(" "),i("p",[t._v("GROWI v3.7.2 現在では、GROWI、 esa.io、Qiita:Team のデータをインポートする機能をサポートしています。")]),t._v(" "),i("h2",{attrs:{id:"growi-アーカイブデータインポート"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#growi-アーカイブデータインポート","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI アーカイブデータインポート")]),t._v(" "),i("p",[t._v("GROWI のアーカイブデータの zip ファイルからデータをインポートします。")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("GROWI アーカイブデータは同バージョンの GROWI のみインポート可能です。")])]),t._v(" "),i("li",[i("p",[t._v("新環境でのインポート操作を行う管理者ユーザーは、旧環境に存在しない username で作成してください。")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("インポート機能のデータはファイルシステムを利用するため、GROWI サーバーをロードバランスしている場合は正常動作しない可能性があります。詳細は"),i("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/loadbalance.html#インポート・エクスポート機能に関する注意点"}},[t._v("こちら")]),t._v("を確認してください。")],1)])]),t._v(" "),i("h3",{attrs:{id:"インポート対象"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート対象","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート対象")]),t._v(" "),i("p",[t._v("インポート可能なデータ一覧は"),i("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/export.html#アーカイブ可能なデータコレクション"}},[t._v("データのアーカイブ")]),t._v("を参照してください。一つの zip ファイルから必要なデータコレクションのみを選択しインポートすることが可能です。")],1),t._v(" "),i("h3",{attrs:{id:"モード"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#モード","aria-hidden":"true"}},[t._v("#")]),t._v(" モード")]),t._v(" "),i("p",[t._v("重複データのインポートに関するルールはコレクションごとに以下の3つから選択できます。")]),t._v(" "),i("ul",[i("li",[t._v("Insert\n"),i("ul",[i("li",[t._v("同名と判断できるデータが存在しない場合のみインポートし、存在する場合はスキップします。")])])]),t._v(" "),i("li",[t._v("Upsert\n"),i("ul",[i("li",[t._v("同名と判断できるデータが存在する場合、そのデータを上書き更新します。")])])]),t._v(" "),i("li",[t._v("Flash and Insert\n"),i("ul",[i("li",[t._v("同名と判断できるデータが存在する場合、既存のデータを完全に削除した後、インポートを行います。")]),t._v(" "),i("li",[t._v("User コレクションではこのモードは選択できません。")]),t._v(" "),i("li",[t._v("Config コレクションはこのモードのみ選択可能です。\n"),i("ul",[i("li",[t._v("Config コレクションをインポートした場合、サーバー再起動が必要です。")])])])])])]),t._v(" "),i("h3",{attrs:{id:"インポート方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート方法","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート方法")]),t._v(" "),i("ol",[i("li",[t._v("GROWI に管理者アカウントでログインし、[管理/データインポート] ("),i("code",[t._v("/admin/importer")]),t._v(") にアクセスします。この時、インポート操作を行う管理者ユーザーの "),i("code",[t._v("username")]),t._v(" は、旧環境には存在しないことを確認してください。")]),t._v(" "),i("li",[t._v("[GROWI アーカイブをインポート] にて、GROWI アーカイブファイルをアップロードします。")]),t._v(" "),i("li",[t._v("インポートしたいコレクションにチェックを入れ、モードを選択します。")]),t._v(" "),i("li",[t._v("インポートを実行すると、各コレクションに結果が表示されます。")])]),t._v(" "),i("ul",[i("li",[t._v("Inserted: インポートによって新たに追加されたデータ")]),t._v(" "),i("li",[t._v("Modified: インポートによって更新されたデータ")]),t._v(" "),i("li",[t._v("Failed: インポート失敗したデータ")])]),t._v(" "),i("p",[t._v("*Config コレクションをインポートした場合、サーバー再起動が必要です。")]),t._v(" "),i("h2",{attrs:{id:"esa-io-のデータインポート"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#esa-io-のデータインポート","aria-hidden":"true"}},[t._v("#")]),t._v(" esa.io のデータインポート")]),t._v(" "),i("p",[t._v("esa.io が公開している "),i("a",{attrs:{href:"https://docs.esa.io/posts/102",target:"_blank",rel:"noopener noreferrer"}},[t._v("API v1"),i("OutboundLink")],1),t._v(" を利用して esa.io のデータをインポートします。")]),t._v(" "),i("h3",{attrs:{id:"インポート対象-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート対象-2","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート対象")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("esa.io")]),t._v(" "),i("th"),t._v(" "),i("th",[t._v("GROWI")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("記事")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("ページ")])]),t._v(" "),i("tr",[i("td",[t._v("カテゴリー")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("ページパス")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("ユーザーデータはインポートされません。")]),t._v(" "),i("li",[t._v("同名ページがインポート先の GROWI にすでに存在している場合、そのページはスキップされます。")]),t._v(" "),i("li",[t._v("GROWI において作成不可能なページパスの場合、そのページはスキップされます。")]),t._v(" "),i("li",[t._v("esa.io のページにおける以下のメタデータはインポートされません。\n"),i("ul",[i("li",[t._v("ページ作成ユーザー、ページ最終更新ユーザー\n"),i("ul",[i("li",[t._v("GROWI 上ではインポートを実行したユーザーに上書きされます。")])])]),t._v(" "),i("li",[t._v("ページ作成日時、ページ最終更新日時\n"),i("ul",[i("li",[t._v("GROWI 上ではインポートを実行した日時に上書きされます。")])])]),t._v(" "),i("li",[t._v("star")]),t._v(" "),i("li",[t._v("watch")]),t._v(" "),i("li",[t._v("tag")]),t._v(" "),i("li",[t._v("comment")]),t._v(" "),i("li",[t._v("WIP/Ship it")]),t._v(" "),i("li",[t._v("revisions および change log")])])]),t._v(" "),i("li",[t._v("添付ファイルは esa.io が管理している添付ファイル用 URL にアクセスするという方法で表示されます。そのため esa.io 上でファイルが削除された場合ページはリンク切れになります。")])])]),t._v(" "),i("h3",{attrs:{id:"インポート方法-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート方法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート方法")]),t._v(" "),i("ol",[i("li",[t._v("esa.io に owner アカウントでログインし、左側のタブから [SETTINGS] → [ユーザー設定] の画面にアクセスします。")]),t._v(" "),i("li",[t._v("[Personal access tokens] の [Generate new token] ボタンをクリックし、GROWI から esa.io にアクセスするためのトークンを発行します。")]),t._v(" "),i("li",[t._v("トークン名を入力し、[Select scopes] の [Read] にチェックを入れ、[Save] します。")])]),t._v(" "),i("p",[i("img",{attrs:{src:v(494),alt:"import1"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("生成されたトークンを保存します。")])]),t._v(" "),i("p",[i("img",{attrs:{src:v(495),alt:"import2"}})]),t._v(" "),i("ol",{attrs:{start:"5"}},[i("li",[t._v("GROWI に管理者アカウントでログインし、[管理/データインポート] ("),i("code",[t._v("/admin/importer")]),t._v(") にアクセスします。")]),t._v(" "),i("li",[t._v("[esa.io からのインポート] において、esa.io のチーム名とアクセストークン（先ほど保存したトークン）を入力し、更新します。")]),t._v(" "),i("li",[t._v("[接続テスト] を実行し、"),i("code",[t._v("Test connection to esa success.")]),t._v(" のアラートが表示されたら接続成功です。")]),t._v(" "),i("li",[t._v("esa.io に接続可能な状態で [インポート] を実行するとページのインポートが開始されます。")])]),t._v(" "),i("h2",{attrs:{id:"qiita-team-のデータインポート"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qiita-team-のデータインポート","aria-hidden":"true"}},[t._v("#")]),t._v(" Qiita:Team のデータインポート")]),t._v(" "),i("p",[t._v("Qiita:Team が公開している "),i("a",{attrs:{href:"https://qiita.com/api/v2/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("API v2"),i("OutboundLink")],1),t._v(" を利用して Qiita:Team のデータをインポートします。")]),t._v(" "),i("h3",{attrs:{id:"インポート対象-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート対象-3","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート対象")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Qiita:Team")]),t._v(" "),i("th"),t._v(" "),i("th",[t._v("GROWI")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("記事")]),t._v(" "),i("td",[t._v("→")]),t._v(" "),i("td",[t._v("ページ")])])])]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("ul",[i("li",[t._v("ユーザーデータ、プロジェクトデータ、グループデータはインポートされません。")]),t._v(" "),i("li",[t._v("同名ページがインポート先の GROWI にすでに存在している場合、そのページはスキップされます。")]),t._v(" "),i("li",[t._v("GROWI において作成不可能なページパスの場合、そのページはスキップされます。")]),t._v(" "),i("li",[t._v("Qiita:Team のページにおける以下のメタデータはインポートされません。\n"),i("ul",[i("li",[t._v("ページ作成ユーザー、ページ最終更新ユーザー\n"),i("ul",[i("li",[t._v("GROWI 上ではインポートを実行したユーザーに上書きされます。")])])]),t._v(" "),i("li",[t._v("ページ作成日時、ページ最終更新日時\n"),i("ul",[i("li",[t._v("GROWI 上ではインポートを実行した日時に上書きされます。")])])]),t._v(" "),i("li",[t._v("ページに対するリアクション")]),t._v(" "),i("li",[t._v("公開範囲、共同編集モード")]),t._v(" "),i("li",[t._v("タグ")]),t._v(" "),i("li",[t._v("コメント")]),t._v(" "),i("li",[t._v("編集履歴")])])]),t._v(" "),i("li",[t._v("添付ファイルは Qiita:Team が管理している添付ファイル用 URL にアクセスするという方法で表示されます。そのため Qiita:Team 上でファイルが削除された場合ページはリンク切れになります。")])])]),t._v(" "),i("h3",{attrs:{id:"インポート方法-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#インポート方法-3","aria-hidden":"true"}},[t._v("#")]),t._v(" インポート方法")]),t._v(" "),i("ol",[i("li",[t._v("Qiita:Team に owner アカウントでログインし、右上のユーザーアイコンをクリックすると表示されるドロップダウンから [設定] の画面にアクセスします。")]),t._v(" "),i("li",[t._v("ユーザーアカウントの [アプリケーション] タブを開き、[個人用アクセストークン] にて [新しくトークンを発行する] をクリックします。")]),t._v(" "),i("li",[t._v("[アクセストークンの説明] を入力し、[スコープ] の [Read_qiita_team] にチェックを入れ、[発行する] をクリックします。")])]),t._v(" "),i("p",[i("img",{attrs:{src:v(496),alt:"import3"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("生成されたトークンを保存します。")]),t._v(" "),i("li",[t._v("GROWI に管理者アカウントでログインし、[管理/データインポート] ("),i("code",[t._v("/admin/importer")]),t._v(") にアクセスします。")]),t._v(" "),i("li",[t._v("[Qiita:Team からのインポート] において、Qiita:Team のチーム名とアクセストークン（先ほど保存したトークン）を入力し、更新します。")]),t._v(" "),i("li",[t._v("[接続テスト] を実行し、"),i("code",[t._v("Test connection to qiita:team success.")]),t._v(" のアラートが表示されたら接続成功です。")]),t._v(" "),i("li",[t._v("Qiita:Team に接続可能な状態で [インポート] を実行するとページのインポートが開始されます。")])])])},[],!1,null,null,null);a.default=_.exports}}]);