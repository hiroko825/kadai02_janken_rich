document.getElementById("button").addEventListener('click',
  function(){
    //対象の配列
    const subjectArray = [
      "山手線","中央線","京浜東北線","丸いもの","冷たいもの","楽器の名前","漫画タイトル","俳優の名前",
      "ジブリ映画タイトル","ディズニーアトラクション","ユニバアトラクション","お寿司のネタ","スタバメニュー",
      "国民の祝日","四字熟語","Youtuberの名前","世界遺産","動物の名前","小説のタイトル","サッカー選手の名前"
    ];
    const subject = subjectArray[Math.floor(Math.random() * subjectArray.length)];
    document.getElementById("subject").innerText = subject;
  }
);