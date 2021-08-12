//Soru: {2,…,n} arasındaki rakamlardan asal sayıları bulmak için Erotosthenes'in Eleği algoritmasını kullanın.

//Bu alıştırmada 2 ve verilen rakam arasındaki (örn. 100) asal sayıları bulacağız. 
//Tabi ki bunu yaparken önceki alıştırmada uyguladığımız (bkz. pisagor üçlüsü) yöntemleri uygulayacağız. 

//1: Soruya yaklaşım: 
//Yine soruyu anlamaya çalışalım. Birincisi Asal sayı nedir?
//Asal sayılar kendilerinden veya 1'den başka hiçbir sayıya bölünemeyen sayılardır. En küçük asal sayı 2'dir. 
//2 kendisine ve 1'e bölünür başka bir sayıya bölünemez. 
//Asal sayının ne olduğunu anladık peki Erotosthenes'in Eleği ya da diğer adıyla Kalburu algoritması nedir? 
//Algoritma kısaca şöyle: 1,2,3... dizisi yazılıp 2'den başlayarak her sayı için sırası ile katları silinir, 
//silinmeden kalanlar (herhangi bir doğal sayının tam katı olmayanlar) kalır ve bunlar asal sayı olarak adlandırılır.
//Dolayısıyla bize verilen dizideki asal sayıları bulacağız ve sonucunda sadece asal sayıları ekrana döndüreceğiz. 

//2: Detayları inceleme ve uç durumları bulma:
//Hiçbir negatif sayı Asal sayı olamaz. Öyleyse verilen listede sadece pozitif sayılar olmalı. Bunu kontrol etmemiz gerekiyor mu?
//2 ve sonsuz rakama ulaşacak bir fonksiyon yazacaksak işlem süresi ve kaynak kullanımı ne olacak?
//Yoksa sadece 100'e ya da 1000'e kısacası 4 ya da 5 haneli rakamlara göre mi tarama yapacağız?

//Mülakatı yapan kişiye soracağımız bu gibi sorular sayesinde sorunun yeni halini oluşturuyoruz. 

//Sorumuzun yeni hali örneğin;
//2 ile 100 arasındaki asal sayıları bulmak için Erotosthenes'in Eleği algoritmasını kullanırken kullandığımız yöntemleri uygulayalım.

//3: Cevabın Hatlarını Oluşturma:

//Bu soruya nasıl cevap vereceğiz?
//Öncelikle yine bir döngüyle tüm listeyi taramamız gerekiyor. 
//Döngüye 2 ile başlayacağımıza göre ikinin katları olan tüm rakamları listeden atabiliriz. 
//Ardından sonraki rakam 3'e gelir ve 3'ün tüm katlarını listeden atabiliriz. Çünkü o sayılar kendilerine, 1'e ve 3'e bölünüyor olacaklar yani 
//Asal değiller. 
//Sonraki rakama geçeceğiz ve yine listedeki tüm katlarını sileceğiz. 
//Sonuç itibariyle elimizde sadece Asal sayılar kalacaktır. 
//Güncel array'imizi ekrana yazdırabiliriz. 
//önce bir array yaratalım.

/* const sieveOfEratosthenes = (limit) => {

    const output = new Array(limit + 1).fill(true); //içine true doldurduğumuz bir array yaratıyoruz. 

    output[0] = false; //ancak bizim sayılarımız 0'dan başlayıp n kadar gittiğinden 0 ve 1 rakamlarının Asal olup olmadığına bakmamıza gerek yok.
    output[1] = false; // bu yüzden output adlı array'imizin 0 ve 1 keylerine false geri kalanına true değerini atadık.

    //şimdi döngümüzün içine girelim;

    for(let i = 2; i <= limit; i++) { //i değişkeni 2'den başlayacak.
        if(output[i] === true){ //eğer output[i] değeri true ise içeri girdik;
            for(let j = i * 2; j <= limit; j += i) { //j değişkeni mevcut i'nin 2 katı olarak başladık. Döngünün içindeki işlem her yapıldığında j'ye i'yi ekliyoruz.
                output[j] = false; //i'nin iki katı olan tüm j'ler false olacak. 
            }
        }
    }

    console.log(output);
}

sieveOfEratosthenes(100) // sonucu ekrana yazdırıp doğru çalışıp çalışmadığına bakabiliriz.  */

//Cevabın hatlarını ve yapmamız gerekeni anladık. 
//Şu an elimizdeki metot sadece true ya da false döndürüyor ama karşılığına gelen rakamların asal olup olmadığına karar verebiliyor. 
//Artık soruyu çözmeye hazırız. 

//4: Cevabı Kodlamak;

//Yukarıda bize her Asal sayı için true döndüren bir metodumuz var. 
//Peki bu true'ların hangi rakamları temsil ettiğini nasıl yazdırırız?
//metodu tekrar alalım...

const sieveOfEratosthenes = (limit) => {

    const output = new Array(limit + 1).fill(true); 

    output[0] = false; 
    output[1] = false; 

    for(let i = 2; i <= limit; i++) { 
        if(output[i] === true){ 
            for(let j = i * 2; j <= limit; j += i) { 
                output[j] = false; 
            }
        }
    }

    
    let result = new Array(output.length); //sonuç adında yeni bir dizi yarattık ve uzunluğunu output dizisinin uzunluğuna eşitledik. 

    for(let i = 0; i < result.length; i++) { //şimdi result içini gezeceğiz. 
        if(output[i] === true) { //i 0'dan başladığına göre eğer output dizisinin i değeri true ise result'un i değerini i yapacak. 
            result[i] = i;
        }else{
            result.slice(i); //eğer true değilse result'un i değerini silecek. 
        }
    }

    //şimdi elimizde asal sayıları işaretlenmiş bir deste var ancak diğer değerler boş. Boşlar ama hala oradalar. 
    //dizimizi temizleyelim:

    cleanResults = result.filter(function(){return true});

    return cleanResults; //artık temiz ve sadece asal sayıların barınabildiği bir dizimiz var. 
    
}

//5: Test etme:

//aşağıdaki gibi metotun içine belli limit rakamlar vererek çalışıp çalışmadığını doğrulayabiliriz. 

console.log(sieveOfEratosthenes(1000));

//6: Optimizasyon:

//diğer örnekte olduğu gibi muhakkak bu örnekte de daha basit ve daha optimize çözümler üretebiliriz. 
//Fikirlerinizi lütfen iletiniz efenim... :)