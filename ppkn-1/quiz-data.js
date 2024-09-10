const quizData = [
    {
        bab: 1,
        judul: "Aku dan Teman-Temanku",
        pertanyaan: [
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan saat bertemu dengan teman baru di sekolah?',
                pilihan: ['Mengabaikannya', 'Mengajak berkenalan', 'Menjauhinya'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menghormati teman yang berbeda agama.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan setelah selesai bermain?',
                pilihan: ['Tidur', 'Merapikan mainan', 'Makan'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh bermain curang saat bermain dengan teman.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan jika melihat teman terjatuh?',
                pilihan: ['Menertawakan', 'Membantu', 'Mengabaikan'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menerima kekalahan saat bermain.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan saat guru sedang menjelaskan?',
                pilihan: ['Mengobrol', 'Mendengarkan', 'Tidur'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh mengejek teman yang berbeda.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan jika meminjam barang teman?',
                pilihan: ['Tidak mengembalikan', 'Mengembalikan dengan rusak', 'Mengembalikan dengan baik'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus membantu teman yang kesulitan.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan sebelum masuk kelas?',
                pilihan: ['Berlari', 'Berbaris', 'Berteriak'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh berbicara kasar kepada teman.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan saat upacara bendera?',
                pilihan: ['Mengobrol', 'Berdiri tegap', 'Bermain'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menjaga kebersihan diri.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan jika terlambat masuk kelas?',
                pilihan: ['Langsung masuk', 'Meminta izin', 'Pulang'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh mengambil barang teman tanpa izin.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan saat belajar kelompok?',
                pilihan: ['Bekerja sendiri', 'Bekerja sama', 'Tidur'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menghargai perbedaan suku dan asal daerah teman.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus kita lakukan saat teman sedang berbicara?',
                pilihan: ['Mendengarkan', 'Memotong pembicaraan', 'Mengabaikan'],
                jawaban: 0
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh memaksakan kehendak kepada teman.',
                jawaban: false
            }
        ]
    },
    {
        bab: 2,
        judul: "Aku patuh pada aturan",
        pertanyaan: [
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan sebelum makan?',
                pilihan: ['Tidur', 'Mencuci tangan', 'Bermain'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita boleh membuang sampah sembarangan.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Kapan sebaiknya kita tidur?',
                pilihan: ['Pagi hari', 'Siang hari', 'Malam hari'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus merapikan tempat tidur setelah bangun.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan sebelum belajar?',
                pilihan: ['Bermain', 'Berdoa', 'Makan'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh makan sambil berjalan.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Siapa yang harus menjaga kebersihan rumah?',
                pilihan: ['Hanya ayah', 'Hanya ibu', 'Seluruh anggota keluarga'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus membantu orang tua di rumah.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan setelah makan?',
                pilihan: ['Tidur', 'Bermain', 'Mencuci piring'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh bermain di jalan raya.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Kapan sebaiknya kita belajar?',
                pilihan: ['Pagi hari', 'Sore hari', 'Tengah malam'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menghormati orang yang lebih tua.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan saat melihat sampah di halaman?',
                pilihan: ['Membiarkannya', 'Membuangnya ke tempat sampah', 'Menendangnya'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh bermain dengan api.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Siapa yang harus menyiram tanaman di rumah?',
                pilihan: ['Hanya ibu', 'Hanya ayah', 'Siapa saja yang bisa'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus hemat dalam menggunakan air.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang harus dilakukan sebelum tidur?',
                pilihan: ['Makan', 'Bermain', 'Menggosok gigi'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Boleh tidur larut malam.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Siapa yang harus membersihkan kamar tidur?',
                pilihan: ['Pembantu', 'Ibu', 'Kita sendiri'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus mematikan lampu dan TV saat tidak digunakan.',
                jawaban: true
            }
        ]
    },
    {
        bab: 3,
        judul: "Indonesia",
        pertanyaan: [
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa warna bendera negara Indonesia?',
                pilihan: ['Merah dan Putih', 'Biru dan Putih', 'Hijau dan Kuning'],
                jawaban: 0
            },
            {
                tipe: 'benar_salah',
                soal: 'Lagu kebangsaan Indonesia berjudul Indonesia Raya.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Siapa pencipta lagu Indonesia Raya?',
                pilihan: ['Ismail Marzuki', 'WR Supratman', 'Ibu Sud'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Garuda Pancasila adalah lambang negara Indonesia.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Berapa jumlah sila dalam Pancasila?',
                pilihan: ['3', '4', '5'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Bendera merah putih boleh dikibarkan terbalik.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa simbol sila pertama Pancasila?',
                pilihan: ['Padi dan Kapas', 'Bintang', 'Rantai'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Indonesia terdiri dari banyak pulau.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa arti warna merah pada bendera Indonesia?',
                pilihan: ['Kesucian', 'Keberanian', 'Kemakmuran'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus hormat saat bendera dikibarkan.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Siapa yang menjahit bendera merah putih pertama kali?',
                pilihan: ['Ibu Fatmawati', 'Ibu Kartini', 'Ibu Megawati'],
                jawaban: 0
            },
            {
                tipe: 'benar_salah',
                soal: 'Indonesia memiliki banyak suku dan bahasa daerah.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa simbol sila kelima Pancasila?',
                pilihan: ['Banteng', 'Pohon Beringin', 'Padi dan Kapas'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita boleh mengubah lirik lagu Indonesia Raya.',
                jawaban: false
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa yang tertulis pada pita yang dicengkeram Garuda Pancasila?',
                pilihan: ['Indonesia Raya', 'Pancasila', 'Bhinneka Tunggal Ika'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menghafal Pancasila.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Kapan biasanya lagu Indonesia Raya dinyanyikan di sekolah?',
                pilihan: ['Saat istirahat', 'Saat upacara bendera', 'Saat pulang sekolah'],
                jawaban: 1
            },
            {
                tipe: 'benar_salah',
                soal: 'Indonesia adalah negara kepulauan.',
                jawaban: true
            },
            {
                tipe: 'pilihan_ganda',
                soal: 'Apa warna dasar Garuda Pancasila?',
                pilihan: ['Merah', 'Putih', 'Kuning Emas'],
                jawaban: 2
            },
            {
                tipe: 'benar_salah',
                soal: 'Kita harus menghormati bendera negara lain.',
                jawaban: true
            }
        ]
    },
];
