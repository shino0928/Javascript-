


var requestURL = 'JSON.html';
//取得したい JSON がある URL を変数へ代入します。次のコードを JavaScript の最後の行へ追加してください。


var request = new XMLHttpRequest();
//HTTP リクエストを作成するのに、new を使って XMLHttpRequest から新しいリクエストオブジェクトをつくる必要があります。先ほどのコードの下に、次のコードを追加してください。


request.open('GET', requestURL);
//新しいリクエストを開始するのには open() メソッドを使います。 次のコードを追加してください。


request.responseType = 'json';
request.send();

var til_db_json = request.response;

document.write(json.name);

//test2
