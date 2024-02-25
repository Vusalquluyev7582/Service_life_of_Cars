//ANCHOR - Aşağıdakı (obyekt)in quruluşuna baxıb ən az 5 maşının məlumatını yazın.


//REVIEW - 

/*

Maşın məlumatları :

id : bmw116_1234,
model : F30,
il : 2015,
rəng : ağ,
servis qeydləri :

//*REVIEW - 1ci servis qeydi
id : bmw116_1234_1
tarix : 30.01.2016. km : 13000. toplam ödəniş : 900 manat

servis detalları :
id : 1 proses : yağ dəyişdirmə ödəniş : 300 manat
id : 2 proses : filtir dəyişdirmə ödəniş : 300 manat
id : 3 proses : əyləc yoxlanışı ödəniş : 300 manat


//*REVIEW - 2ci servis qeydi
id : bmw116_1234_2 
tarix : 10.01.2017. km : 28000. toplam ödəniş : 1800 manat

servis detalları :
id : 1 proses : yağ dəyişdirmə ödəniş : 350 manat
id : 2 proses : filtir dəyişdirmə ödəniş : 350 manat
id : 3 proses : əyləc yoxlanışı ödəniş : 300 manat
id : 4 proses : 2 təkərin dəyişdirilməsi : 800 manat


*/



let maşınMəlumatları =
    [
        {  //* 1ci maşın
            id: "bmw116a_123",
            model: "F07",
            il: 2015,
            rəng: "ağ",
            servisMəlumatları: [
                {
                    id: "bmw116a_123_1",
                    tarix: "20.01.2016",
                    km: 13000,
                    ödəniş: 900,
                    hesab:
                        //* 1ci servis qeydi
                        [
                            { id: "bmw116a_123_1_1", açığlama: "yağ dəyişdirmə", ödəniş: 300, },
                            { id: "bmw116a_123_1_2", açığlama: "filtir dəyişdirmə", ödəniş: 300, },
                            { id: "bmw116a_123_1_3", açığlama: "əyləc yoxlanışı", ödəniş: 300, }
                        ]
                },


                {
                    id: "bmw116a_123_2",
                    tarix: "10.01.2017",
                    km: 28000,
                    ödəniş: 1800,
                    hesab:
                        //* 2ci servis qeydi
                        [
                            { id: "bmw116a_123_2_1", açığlama: "yağ dəyişdirmə", ödəniş: 350, },
                            { id: "bmw116a_123_2_2", açığlama: "filtir dəyişdirmə", ödəniş: 350, },
                            { id: "bmw116a_123_2_3", açığlama: "əyləc yoxlanışı", ödəniş: 300, },
                            { id: "bmw116a_123_2_4", açığlama: "2 təkərin dəyişdirilməsi", ödəniş: 800, }
                        ]
                }
            ]
        },


        //* 2ci maşın
        {
            id: "bmw116b_123",
            model: "F10",
            il: 2016,
            rəng: "qara",
            servisMəlumatları:
                [
                    {
                        id: "bmw116b_123_1",
                        tarix: "20.01.2016",
                        km: 17000,
                        ödəniş: 1200,
                        hesab:
                            //* 1ci servis qeydi
                            [
                                { id: "bmw116b_123_1_1", açığlama: "yağ dəyişdirmə", ödəniş: 400, },
                                { id: "bmw116b_123_1_2", açığlama: "filtir dəyişdirmə", ödəniş: 400, },
                                { id: "bmw116b_123_1_3", açığlama: "əyləc yoxlanışı", ödəniş: 400, }
                            ]
                    },


                    {
                        id: "bmw116b_123_2",
                        tarix: "10.01.2017",
                        km: 24000,
                        ödəniş: 2000,
                        hesab:
                            //* 2ci servis qeydi
                            [
                                { id: "bmw116b_123_2_1", açığlama: "yağ dəyişdirmə", ödəniş: 350, },
                                { id: "bmw116b_123_2_2", açığlama: "filtir dəyişdirmə", ödəniş: 350, },
                                { id: "bmw116b_123_2_3", açığlama: "əyləc yoxlanışı", ödəniş: 500, },
                                { id: "bmw116b_123_2_4", açığlama: "2 təkərin dəyişdirilməsi", ödəniş: 800, }
                            ]
                    }
                ]
        },


        //* 3cü maşın
        {
            id: "bmw116c_123",
            model: "F13",
            il: 2015,
            rəng: "göy",
            servisMəlumatları:
                [
                    {
                        id: "bmw116c_123_1",
                        tarix: "20.01.2016",
                        km: 20000,
                        ödəniş: 1000,
                        hesab:
                            //* 1ci servis qeydi
                            [
                                { id: "bmw116c_123_1_1", açığlama: "yağ dəyişdirmə", ödəniş: 400, },
                                { id: "bmw116c_123_1_2", açığlama: "filtir dəyişdirmə", ödəniş: 300, },
                                { id: "bmw116c_123_1_3", açığlama: "əyləc yoxlanışı", ödəniş: 300, }
                            ]
                    },


                    {
                        id: "bmw116c_123_2",
                        tarix: "10.01.2017",
                        km: 27000,
                        ödəniş: 1400,
                        hesab:
                            //* 2ci servis qeydi
                            [
                                { id: "bmw116c_123_2_1", açığlama: "yağ dəyişdirmə", ödəniş: 150, },
                                { id: "bmw116c_123_2_2", açığlama: "filtir dəyişdirmə", ödəniş: 350, },
                                { id: "bmw116c_123_2_3", açığlama: "əyləc yoxlanışı", ödəniş: 350, },
                                { id: "bmw116c_123_2_4", açığlama: "2 təkərin dəyişdirilməsi", ödəniş: 550, }
                            ]
                    }
                ]
        },


        //* 4cü maşın
        {
            id: "bmw116d_123",
            model: "F20",
            il: 2018,
            rəng: "qırmızı",
            servisMəlumatları:
                [
                    {
                        id: "bmw116d_123_1",
                        tarix: "20.01.2016",
                        km: 19000,
                        ödəniş: 1500,
                        hesab:
                            //* 1ci servis qeydi
                            [
                                { id: "bmw116d_123_1_1", açığlama: "yağ dəyişdirmə", ödəniş: 500, },
                                { id: "bmw116d_123_1_2", açığlama: "filtir dəyişdirmə", ödəniş: 500, },
                                { id: "bmw116d_123_1_3", açığlama: "əyləc yoxlanışı", ödəniş: 500, }
                            ]
                    },


                    {
                        id: "bmw116d_123_2",
                        tarix: "10.01.2017",
                        km: 30000,
                        ödəniş: 2200,
                        hesab:
                            //* 2ci servis qeydi
                            [
                                { id: "bmw116d_123_2_1", açığlama: "yağ dəyişdirmə", ödəniş: 500, },
                                { id: "bmw116d_123_2_2", açığlama: "filtir dəyişdirmə", ödəniş: 450, },
                                { id: "bmw116d_123_2_3", açığlama: "əyləc yoxlanışı", ödəniş: 350, },
                                { id: "bmw116d_123_2_4", açığlama: "2 təkərin dəyişdirilməsi", ödəniş: 900, }
                            ]
                    }
                ]
        },


        //* 5ci maşın
        {
            id: "bmw116e_123",
            model: "F30",
            il: 2020,
            rəng: "yaşıl",
            servisMəlumatları:
                [
                    {
                        id: "bmw116e_123_1",
                        tarix: "20.01.2016",
                        km: 25000,
                        ödəniş: 1800,
                        hesab:
                            //* 1ci servis qeydi
                            [
                                { id: "bmw116e_123_1_1", açığlama: "yağ dəyişdirmə", ödəniş: 600, },
                                { id: "bmw116e_123_1_2", açığlama: "filtir dəyişdirmə", ödəniş: 600, },
                                { id: "bmw116e_123_1_3", açığlama: "əyləc yoxlanışı", ödəniş: 600, }
                            ]
                    },


                    {
                        id: "bmw116e_123_2",
                        tarix: "10.01.2017",
                        km: 38000,
                        ödəniş: 3800,
                        hesab:
                            //* 2ci servis qeydi
                            [
                                { id: "bmw116e_123_2_1", açığlama: "yağ dəyişdirmə", ödəniş: 800, },
                                { id: "bmw116e_123_2_2", açığlama: "filtir dəyişdirmə", ödəniş: 700, },
                                { id: "bmw116e_123_2_3", açığlama: "əyləc yoxlanışı", ödəniş: 500, },
                                { id: "bmw116e_123_2_4", açığlama: "2 təkərin dəyişdirilməsi", ödəniş: 1800, }
                            ]
                    }
                ]
        },
    ]



//NOTE - (1ci maşın)ın üstündən göstərək


//* 1) 1ci maşını (Komple) almağ üçün

console.log(maşınMəlumatları[0]);
/*
Yazdığda bizə

{id: 'bmw116a_123', model: 'F07', il: 2015, rəng: 'ağ', servisMəlumatları: Array(2)}

verəcək. Yəni (1ci maşın)ı (Komple) verəcək
*/









//* 2) (id)sin almağ üçün

console.log(maşınMəlumatları[0].id);
/*
Yazdığda bizə

bmw116a_123

verəcək. Yəni (1ci maşın)ın (id)sin verəcək
*/









//* 3) (model)in almağ üçün

console.log(maşınMəlumatları[0].model);
/*
Yazdığda bizə

F07

verəcək. Yəni (1ci maşın)ın (model)in verəcək
*/









//* 4) (il)in almağ üçün

console.log(maşınMəlumatları[0].il);
/*
Yazdığda bizə

2015

verəcək. Yəni (1ci maşın)ın (il)in verəcək
*/









//* 5) (rəng)ini almağ üçün

console.log(maşınMəlumatları[0].rəng);
/*
Yazdığda bizə

ağ

verəcək. Yəni (1ci maşın)ın (rəng)in verəcək
*/









//* 6) (servisMəlumatları)ın almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları);
/*
Yazdığda bizə

(2) [{…}, {…}]

verəcək. Yəni (1ci maşın)ın (servisMəlumatları)n verəcək. Onada (klik) edəndə (1ci servis qeydi) və (2ci servis qeydi)ni verəcək
*/









//ANCHOR -  (1ci servis qeydi)nin üstündən göstərək


//* 6.1) (1ci servis qeydi)ni almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0]);
/*
Yazdığda bizə

{id: 'bmw116a_123_1', tarix: '20.01.2016', km: 13000, ödəniş: 900, hesab: Array(3)}

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)ni verəcək. Onada (klik) edəndə (1ci servis qeydi)nin (hesab), (id), (km), (tarix), (ödəniş)i verəcək
*/




//ANCHOR -  (1ci servis qeydi)nin (hesab)ına, (id)sinə, (km)nə, (tarix)inə və (ödəniş)inə baxmağ


//ANCHOR - 1) (hesab)na baxmağ */


//* 6.1.1) (1ci servis qeydi)nin (1ci hesab)nı almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[0]);
/*
Yazdığda bizə

{id: 'bmw116a_123_1_1', açığlama: 'yağ dəyişdirmə', ödəniş: 300}

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (1ci hesab)ını verəcək
*/




//* 6.1.2) (1ci servis qeydi)nin (2ci hesab)nı almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[1]);
/*
Yazdığda bizə

{id: 'bmw116a_123_1_1', açığlama: 'filtir dəyişdirmə', ödəniş: 300}

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (2ci hesab)ını verəcək
*/




//* 6.1.3) (1ci servis qeydi)nin (3cü hesab)nı almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[2]);
/*
Yazdığda bizə

{id: 'bmw116a_123_1_3', açığlama: 'əyləc yoxlanışı', ödəniş: 300}

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (3cü hesab)ını verəcək
*/









//* 7) (1ci servis qeydi)nin (öz id)sini almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].id);
/*
Yazdığda bizə

bmw116a_123_1

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (öz id)sini verəcək
*/









//* 8) (1ci servis qeydi)nin (1ci hesab)ının (id)sini almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[0].id);
/*
Yazdığda bizə

bmw116a_123_1_1

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (1ci hesab)ının (id)sini verəcək
*/




//* 8.1) (1ci servis qeydi)nin (2ci hesab)ının (id)sini almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[1].id);
/*
Yazdığda bizə

bmw116a_123_1_2

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (2ci hesab)ının (id)sini verəcək
*/




//* 8.2) (1ci servis qeydi)nin (3cü hesab)ının (id)sini almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].hesab[2].id);
/*
Yazdığda bizə

bmw116a_123_1_3

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (3cü hesab)ının (id)sini verəcək
*/









//ANCHOR - 2) (tarix)nə baxmağ 


//* 9) (1ci servis qeydi)nin (tarix)ni almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].tarix);
/*
Yazdığda bizə

20.01.2016

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (tarix)ni verəcək
*/









//ANCHOR - 3) (km)nə baxmağ


//* 10) (1ci servis qeydi)nin (km)ni almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].km);
/*
Yazdığda bizə

13000

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (km)ni verəcək
*/









//ANCHOR - 4) (ödəniş)nə baxmağ 


//* 11) (1ci servis qeydi)nin (ödəniş)ini almağ üçün

console.log(maşınMəlumatları[0].servisMəlumatları[0].ödəniş);
/*
Yazdığda bizə

900

verəcək. Yəni (1ci maşın)ın (1ci servis qeydi)nin (ödəniş)ni verəcək
*/