const quizData = [
    {
        bab: 1,
        judul: "Aku Cinta Al-Qur'an",
        pertanyaan: [
            {
                tipe: 'pilihan_ganda',
                soal: 'Al-Qur\'an adalah kitab suci umat?',
                pilihan: ['Kristen', 'Islam', 'Buddha'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Jumlah huruf hijaiah ada 28.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Harakat fathah dilambangkan dengan tanda:',
                pilihan: ['Garis di atas', 'Garis di bawah', 'Garis di depan'],
                jawaban: 0
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Al-Fatihah artinya:',
                pilihan: ['Penutup', 'Pembukaan', 'Pertengahan'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Surah Al-Fatihah terdiri dari ... ayat.',
                pilihan: ['5', '6', '7'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Membaca Al-Qur\'an mendapat pahala.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Harakat kasrah dilambangkan dengan tanda:',
                pilihan: ['Garis di atas', 'Garis di bawah', 'Garis di depan'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Huruf ba berharakat fathah dibaca:',
                pilihan: ['bi', 'bu', 'ba'],
                jawaban: 2
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Al-Qur\'an ditulis dengan huruf:',
                pilihan: ['Latin', 'Hijaiyah', 'Kanji'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Surah Al-Fatihah wajib dibaca ketika salat.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Harakat dhammah dilambangkan dengan tanda:',
                pilihan: ['Garis di atas', 'Garis di bawah', 'Garis di depan'],
                jawaban: 2
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Huruf ta berharakat kasrah dibaca:',
                pilihan: ['ta', 'ti', 'tu'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Harakat berfungsi untuk membunyikan huruf hijaiah.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Maliki yaumiddin adalah surah Al-Fatihah ayat ke:',
                pilihan: ['2', '3', '4'],
                jawaban: 2
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Huruf sin berharakat dhammah dibaca:',
                pilihan: ['sa', 'si', 'su'],
                jawaban: 2
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Jumlah harakat yang dipelajari dalam bab ini adalah:',
                pilihan: ['2', '3', '4'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus gemar membaca Al-Qur\'an.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan terhadap Al-Qur\'an?',
                pilihan: ['Mengabaikannya', 'Gemar membacanya', 'Menyimpannya saja'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Membaca Al-Qur\'an boleh sambil bermain.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Berapa jumlah huruf hijaiah?',
                pilihan: ['26', '28', '30'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa arti dari Al-Fatihah?',
                pilihan: ['Penutup', 'Pembukaan', 'Pertengahan'],
                jawaban: 1
            }
        ]
    },
    {
        bab: 2,
        judul: "Mengenal Rukun Iman",
        pertanyaan: [
            {
                tipe: 'pilihan_ganda',
                soal: 'Berapa jumlah rukun iman?',
                pilihan: ['4', '5', '6'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Allah Swt. adalah pencipta alam semesta.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Nabi Muhammad saw. adalah:',
                pilihan: ['Pencipta alam semesta', 'Utusan Allah Swt.', 'Malaikat'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Iman artinya:',
                pilihan: ['Melihat', 'Percaya', 'Mendengar'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Bukti cinta kepada Allah Swt. adalah:',
                pilihan: ['Merusak ciptaan-Nya', 'Merawat ciptaan-Nya', 'Mengabaikan ciptaan-Nya'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Hewan bukan ciptaan Allah.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Rukun iman yang pertama adalah:',
                pilihan: ['Iman kepada malaikat', 'Iman kepada Allah', 'Iman kepada Rasul'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Rasulullah artinya:',
                pilihan: ['Utusan manusia', 'Utusan Allah', 'Utusan malaikat'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Nabi Muhammad saw. adalah panutan:',
                pilihan: ['Orang Arab saja', 'Umat Islam saja', 'Seluruh umat manusia'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus mencintai Allah Swt. dan Rasul-Nya.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Rukun iman yang keempat adalah:',
                pilihan: ['Iman kepada malaikat', 'Iman kepada kitab-kitab', 'Iman kepada Rasul'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Bersedekah adalah salah satu ajaran yang dicontohkan oleh Nabi Muhammad saw.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Manusia mempunyai anggota badan sempurna adalah pemberian:',
                pilihan: ['Orang tua', 'Allah Swt.', 'Alam'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Mencintai rasul dengan mencontoh perilakunya.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Rukun iman yang terakhir adalah:',
                pilihan: ['Iman kepada hari kiamat', 'Iman kepada qada dan qadar', 'Iman kepada kitab-kitab'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Ibu Nabi Muhammad saw. bernama:',
                pilihan: ['Khadijah', 'Aminah', 'Aisyah'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Nabi Muhammad saw. lahir di kota:',
                pilihan: ['Madinah', 'Makkah', 'Taif'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Nabi Muhammad saw. lahir pada hari Senin.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Ayah Nabi Muhammad saw. bernama:',
                pilihan: ['Abu Thalib', 'Abdullah', 'Abu Lahab'],
                jawaban: 1
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Nabi Muhammad saw. lahir pada bulan:',
                pilihan: ['Ramadhan', 'Syawal', 'Rabiul Awal'],
                jawaban: 2
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan untuk mencintai Rasul?',
                pilihan: ['Mengabaikan ajarannya', 'Mencontoh perilakunya', 'Hanya menghafalkan namanya'],
                jawaban: 1
            }
        ]
    }
];
