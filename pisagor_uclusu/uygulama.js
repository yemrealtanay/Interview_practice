//Soru: Bir sayı listesi verildiğinde, listenin Pisagor Üçlüsü içerip içermediğini döndürün.

//Bu alıştırmada bize bir array verilecek ve bu array içerisinde 3 adet sayı olacak. 
//Ancak soruyu anlamak değerlendirmek ve çözmek hususunda takip etmemiz gereken adımlar ve düşünme yöntemleri var.
//Kısaca bu yöntemlere bakalım...


//1: Soruya yaklaşım:

//Soruyu anlamak... İlk adımımız soruyu anlamak ve bizden ne istendiğine dair net bir fikire sahip olmaya çalışmak. Sorunun  cevabını içeren
//kodları yazmadan önce soruyu anlamak çok önemli. Bu yüzden önce pisagor üçlüsü neyi ifade ediyor ona bakmamız lazım. 
//Bir üçgenin en uzun kenarının karesi, diğer iki kenar uzunluğunun karesine eşitse bu üçgen doğru üçgendir.
//Bu işleme pisagor üçlüsü denir. Dolayısıyla bize verilen 3 rakamın birer kenarı temsil ettiğini düşünelim. Bunlardan en büyük olan rakam en uzun kenarın
//uzunluğu olacaktır. Tüm rakamların karesini aldığımızda en küçük iki rakamın toplamı en büyük rakama eşitse bu üç rakamın pisagor üçlüsü 
//olduğunu söyleyebiliriz. 

//Örnek: [3,4,5] rakamlarımız olsun. 
//Hepsinin karesini alalım: [9,16,25] rakamlarına ulaşırız. 
//en küçük iki rakam 9 ve 16 toplandığında 25 eder yani en büyük rakama eşit olur. 
//O zaman bu array pisagor üçlüsüdür ve "true" döndürmelidir. 

//2: Detayları inceleme ve uç durumları bulma:

//Artık soruyu anladık. Şimdi soruyu görselleştirerek bizden istenen sonucun ne olduğunu tam olarak anlamaya çalışacağız. 
//Çıktı ne olacak? Metotun çıktısının True ya da False olması yeterli mi?
//örneğin 
    //[3,4,5] = true; çıktısı beklenen çıktı mı?
    //peki [-3,4,5] gibi bir dizinin çıktısı true olursa bu normal midir? yoksa böyle bir dizi false çıktısı vermeli mi?
    // [5,6] gibi içeriğinde üç rakam olmayan bir dizi verilecek mi? dolayısıyla bu zaman da false çıktısını üretmemiz gerekecek. 
    //[3,4,5,6] gibi bir dizi de false yanıtı üretecek mi? ya da içeriğinden bir pisagor üçlüsü çıkarsa true'mu döndürecek?
    //[3,4,5,6,7,8] burada dizinin içinde iki farklı pisagor üçlüsü mü var diye kontrol mü edeceğiz yoksa direk false mı döndüreceğiz?

//Detayları incelemiş sorulması gerekenleri sormuş ve uç durumları bulmuş oluyoruz... 
//Artık bizden beklenen cevabı biliyoruz. 
//Bu süreç sayesinde sorulan soruyu daha detaylı ve net hale getiriyoruz. 

// bir dizinin içindeki sayıların pisagor üçlüsü olup olmadığını kontrol edeceğiz, üçten az rakam false döndürür, 3'ten fazla rakam varsa o rakamların içinde sırayla pisagor üçlüsü olup olmadığına bakmalıyız. 
// bulduğumuz ilk pisagor üçlüsü true sonuç dönmesini sağlar,  - yönde rakamlar false döndürür. 
//Sorumuzun yeni hali bu...

//3: Cevabın Hatlarını Oluşturma:

//Peki bu soruyu nasıl çözeceğiz? 
//kod yazmaya başlamadan önce bu soruyu çözmek adına nasıl hareket edeceğimizi bilmemiz ve anlatmamız gerekiyor.

//öncelikle dizi içindeki değerlere tek tek bakıp işlem yapacağımız için bir for döngüsü kullanacağımız kesin. 
//döngüyle her bir elemana bakacak eğer dizide 3 elemandan daha az varsa direk döngüden çıkıp false döndüreceğiz bu kontrolü yapacak bir if kontrolüne
//ihtiyacımız var. 
//eğer üç rakama ulaşırsak bunların karelerini alıp en düşük ikiyi toplayıp en yükseklerine eşit olup olmadıklarına bakacağız. 
//Eğer pisagor üçlüsü sonucunu alırsak direk döngüden çıkıp true döndüreceğiz. 
//eğer sonucu alamazsak kontrole devam edeceğiz listedeki diğer elemanları gezeceğiz. 
//diğer elemanlardan pisagor üçlüsü çkarsa yine true çıkmazsa false return edeceğiz ve metotumuz bitecek. 

//Bu şekilde cevabın hatlarını oluşturmuş olduk. 

//4: Cevabı Kodlama

//Tüm bu adımlardan sonra artık cevabı içeren kodları yazabiliriz. 

//öncelikle içine array kabul eden bir function yazıyoruz. 

function pisagor(array){

    //sonuçta döndüreceğimiz değeri oluşturalım default olarak false göstersin.

    var sonuc = false;

    //şimdi for döngüsüyle dizi içindeki elemanlarımızı geziyoruz.

    for (let i = 0; i < array.length; i++) {
        //console.log(array[i])
        if(array[i] === null || array[i]<0){ //eğer dizideki eleman null ya da negatif ise direk false döndürüyoruz.
            return sonuc; //sonuc zaten false...
            break;
            //eğer array'ın ikinci elemanı nullsa direk false döndürür.
        }
        let a = array[i];
        //a değerine listedeki ilk sayıyı atadık. şimdi listedeki ikinci değer ulaşmamız gerekiyor. 
        for (let y = i + 1; y < array.length; y++){
            //console.log(array[y])
            if(array[y] === null || array[i]<0){
                return sonuc; //sonuc zaten false...
                break;
                //eğer array'ın ikinci elemanı nullsa direk false döndürür.
            }
            let b = array[y];
            //b değeri listedeki ikinci elemanını alıyoruz.

            for (let r = y + 1; r < array.length; r++) {
                //console.log(array[r])
                if(array[r] === null || array[i]<0){
                return sonuc; //sonuc zaten false...
                break;
                //eğer array'ın ikinci elemanı nullsa direk false döndürür.
                }
                let c = array[r];
                //elimizde a,b ve c rakamları var. 
                //şimdi a, b ve c rakamlarının karelerini alıp en düşük ikiyi toplayıp en yükseklerine eşit olup olmadıklarına bakalım.
                a *= a;
                b *= b;
                c *= c;
                //tüm rakamların karelerini aldık kendilerine atadık.
                if(a>b && a>c){ //eğer en büyük rakam a ise;
                    if(b+c === a){
                        sonuc = true;
                        return sonuc;
                        break;
                    }
                }else if(b>a && b>c){ //eğer en büyük rakam b ise;
                    if(a+c === b){
                        sonuc = true;
                        return sonuc;
                        break;
                    }
                }else if(b+a === c){
                    sonuc = true;
                    return sonuc;
                    break;
                }
                }
                }
                
            }
            return sonuc;
        } 

//metotumuzu yazdık. 
//Artık sonraki aşamaya geçebiliriz. 

//5: Test etme:

//metotu yazdıktan sonra çalışıp çalışmadığını test etmemiz gerekiyor. Hatalar yapmış olabiliriz ancak testler sonucu çıkan hatalarla kodumuzu iyileştireceğiz. 

//önce birkaç array'a ihtiyacımız var. 

const listeBir = [3,4,5]; //bu listenin true sonuç üreteceğini biliyoruz. 
const listeIki = [-3,4,5]; //bu listenin false sonuç üreteceğini biliyoruz.
const listeUc = [3,4,5,6]; //bu liste de true sonuç verecektir.
const listeDort = [12, 5, 43, 22, 11, 14, 3, 4, 5] //bu listenin içinde true döndürecek bir üçlü olduğunu biliyoruz. 
const listeBes = [56, 21, 75, 3, 6, 8, 21, 69, 12, 89, 5, 6, 47]; //bu listeden çıkacak sonucu biz de bilmiyoruz. 
const listeAlti = [5]; // bu listede üç rakamdan az var dolayısıyla false döndürecek.

//şimdi listelerimizi metotumuza verelim ve sonucu ekrana yazdıralım. 

console.log(pisagor(listeBir)); //true
console.log(pisagor(listeIki)); //false
console.log(pisagor(listeUc)); //true
console.log(pisagor(listeDort)); //true
console.log(pisagor(listeBes)); //false
console.log(pisagor(listeAlti)); //false

//elimizdeki verilere göre metodumuz çalışıyor. Şimdi sıradaki aşamaya geçebiliriz. 

//6: Optimizasyon:

// bu aşamada kodumuzu daha kısa daha optimize hale getirebilmek için neler yapabiliriz onu konuşacağız. 
//kodun commentlerden sıyrılmış hali şu şekilde;

function pisagor(array){

    var sonuc = false;

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] === null || array[i]<0){ 
            return sonuc; 
            break;
        }
        let a = array[i];
        
            for (let y = i + 1; y < array.length; y++){
            
                if(array[y] === null || array[i]<0){
                    return sonuc; 
                    break;
                
                }
            let b = array[y];
 
                for (let r = y + 1; r < array.length; r++) {
               
                    if(array[r] === null || array[i]<0){
                    return sonuc; 
                    break;
                    }
                let c = array[r];
               
                a *= a;
                b *= b;
                c *= c;
                
                if(a>b && a>c){ 
                    if(b+c === a){
                        sonuc = true;
                        return sonuc;
                        break;
                    }
                }else if(b>a && b>c){ 
                    if(a+c === b){
                        sonuc = true;
                        return sonuc;
                        break;
                    }
                }else if(b+a === c){
                    sonuc = true;
                    return sonuc;
                    break;
                }
                }
                }
                
            }
            return sonuc;
        } 

//kodun içinde kısaltabileceğimiz daha hızlı yoldan çözebileceğimiz durumlar var mı? örneğin daha az ifle çözebilir miyiz?
//tek satırda halledebileceğimiz durumlar var mı?
//bu seriyi kendimi de eğitmek için hazırlıyorum dolayısıyla destek vermek ve daha kısa yollar hakkında konuşmak eklemek isterseniz çekinmeyin...
//eğer bu kod içinde bir hata veya açık yakaladıysanız muhakkak bana yazın düzeltelim...


        




