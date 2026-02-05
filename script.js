 const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const overlay = document.getElementById('overlay');
        const toggleCertificates = document.getElementById('toggleCertificates');
        const certificatesContainer = document.getElementById('certificatesContainer');
        const certificateModal = document.getElementById('certificateModal');
        const closeModal = document.getElementById('closeModal');
        const modalImage = document.getElementById('modalImage');
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const quizOption = document.getElementById('quizOption');
        const gameOption = document.getElementById('gameOption');
        const quizContainer = document.getElementById('quizContainer');
        const gameContainer = document.getElementById('gameContainer');
        const contactForm = document.getElementById('contactForm');
        
        let currentQuestion = 0;
        let score = 0;
        const quizQuestions = [
            {
                question: "Apa kepanjangan dari HTML?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Hyper Transfer Markup Language",
                    "Home Tool Markup Language"
                ],
                correct: 0
            },
            {
                question: "Bahasa pemrograman mana yang digunakan untuk styling website?",
                options: [
                    "JavaScript",
                    "Python",
                    "CSS",
                    "HTML"
                ],
                correct: 2
            },
            {
                question: "Apa fungsi utama dari JavaScript dalam pengembangan web?",
                options: [
                    "Membuat struktur halaman web",
                    "Menentukan gaya dan tata letak",
                    "Menambahkan interaktivitas dan logika",
                    "Mengelola database"
                ],
                correct: 2
            },
            {
                question: "Framework JavaScript mana yang dikembangkan oleh Facebook?",
                options: [
                    "Angular",
                    "Vue.js",
                    "React",
                    "jQuery"
                ],
                correct: 2
            },
            {
                question: "Apa yang dimaksud dengan responsif dalam desain web?",
                options: [
                    "Website yang cepat dimuat",
                    "Website yang dapat beradaptasi dengan ukuran layar",
                    "Website dengan banyak animasi",
                    "Website dengan backend yang kuat"
                ],
                correct: 1
            }
        ];
        
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            const icon = themeToggle.querySelector('i');
            const iconMobile = themeToggleMobile.querySelector('i');
            if (isDarkMode) {
                icon.className = 'fas fa-sun';
                iconMobile.className = 'fas fa-sun';
                themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
            } else {
                icon.className = 'fas fa-moon';
                iconMobile.className = 'fas fa-moon';
                themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i> Mode Gelap';
            }
        }
        
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            const iconMobile = themeToggleMobile.querySelector('i');
            icon.className = 'fas fa-sun';
            iconMobile.className = 'fas fa-sun';
            themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i> Mode Terang';
        }
   
        function openMobileMenu() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        function checkScroll() {
            const homeSecondVisual = document.querySelector('.home-second-visual');
            const homeSecondText = document.querySelector('.home-second-text');
            
            if (homeSecondVisual && homeSecondText) {
                const elementTop = homeSecondVisual.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        homeSecondVisual.classList.add('show');
                    }, 300);
                    
                    setTimeout(() => {
                        homeSecondText.classList.add('show');
                    }, 600);
                }
            }
            
            const aboutImage = document.querySelector('.about-image');
            const aboutText = document.querySelector('.about-text');
            
            if (aboutImage && aboutText) {
                const elementTop = aboutImage.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        aboutImage.classList.add('show');
                    }, 300);
                    
                    setTimeout(() => {
                        aboutText.classList.add('show');
                    }, 600);
                }
            }
            
            const techItems = document.querySelectorAll('.tech-item');
            techItems.forEach((item, index) => {
                const elementTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 200); 
                }
            });
            
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                const elementTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 2000); 
                }
            });
            
            const optionCards = document.querySelectorAll('.option-card');
            optionCards.forEach((card, index) => {
                const elementTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 300);
                }
            });

            const contactFormEl = document.querySelector('.contact-form');
            const contactInfo = document.querySelector('.contact-info');
            
            if (contactFormEl && contactInfo) {
                const elementTop = contactFormEl.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        contactFormEl.classList.add('show');
                    }, 300);
                    
                    setTimeout(() => {
                        contactInfo.classList.add('show');
                    }, 600);
                }
            }

            const footer = document.querySelector('footer');
            if (footer) {
                const elementTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    setTimeout(() => {
                        footer.classList.add('show');
                    }, 300);
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            checkScroll();
            loadQuizQuestion();
        });
        
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
            if (tabId === 'quiz-game') {
            quizContainer.classList.remove('active');
            gameContainer.classList.remove('active');
        }
        
        if (tabId === 'other-projects') {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.classList.remove('show');
            });
            setTimeout(() => {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                    }, index * 600); 
                });
            }, 50); 
        } 
        else if (tabId === 'tech-stack') {
            const techItems = document.querySelectorAll('.tech-item');
            techItems.forEach(item => {
                item.classList.remove('show');
            });
            
            setTimeout(() => {
                techItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 200); 
                });
            }, 50);
        }

        setTimeout(() => {
            checkScroll();
        }, 100);
    });
});
        
        toggleCertificates.addEventListener('click', () => {
            if (certificatesContainer.style.display === 'flex') {
                certificatesContainer.style.display = 'none';
                toggleCertificates.textContent = 'Lihat Sertifikat Saya';
            } else {
                certificatesContainer.style.display = 'flex';
                toggleCertificates.textContent = 'Sembunyikan Sertifikat';
            }
        });
        
        document.querySelectorAll('.certificate-img').forEach(img => {
            img.addEventListener('click', () => {
                const fullSizeImage = img.getAttribute('data-full') || img.src;
                modalImage.src = fullSizeImage;
                certificateModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            certificateModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        certificateModal.addEventListener('click', (e) => {
            if (e.target === certificateModal) {
                certificateModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        quizOption.addEventListener('click', () => {
            quizContainer.classList.add('active');
            gameContainer.classList.remove('active');

            loadQuizQuestion();
        });
        
        gameOption.addEventListener('click', () => {
            gameContainer.classList.add('active');
            quizContainer.classList.remove('active');
        });
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const whatsappMessage = `Halo Agus, saya ${name} (${email}).\n\n${message}\n\nPesan ini dikirim dari portfolio website Anda.`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const phoneNumber = '6281234567890'; 
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            contactForm.reset();
            alert('Mengarahkan ke WhatsApp...');
        });
        
        function loadQuizQuestion() {
            const question = quizQuestions[currentQuestion];
            const quizQuestionElement = document.getElementById('quizQuestion');
            const quizOptionsElement = document.getElementById('quizOptions');
            const quizProgressElement = document.getElementById('quizProgress');
            
            quizQuestionElement.textContent = question.question;
            quizProgressElement.textContent = `Pertanyaan ${currentQuestion + 1} dari ${quizQuestions.length}`;
            quizOptionsElement.innerHTML = '';
 
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.textContent = option;
                optionElement.setAttribute('data-index', index);
                optionElement.addEventListener('click', () => selectAnswer(index));
                quizOptionsElement.appendChild(optionElement);
            });
            document.getElementById('prevQuestion').style.display = currentQuestion === 0 ? 'none' : 'inline-block';
            document.getElementById('nextQuestion').textContent = currentQuestion === quizQuestions.length - 1 ? 'Selesai' : 'Selanjutnya';

            document.getElementById('quizResult').innerHTML = '';

            document.querySelectorAll('.quiz-option').forEach(option => {
                option.style.pointerEvents = 'auto';
            });
        }
        
        function selectAnswer(selectedIndex) {
            const question = quizQuestions[currentQuestion];
            const options = document.querySelectorAll('.quiz-option');
            
            options.forEach(option => {
                option.classList.remove('correct', 'incorrect');
            });

            if (selectedIndex === question.correct) {
                options[selectedIndex].classList.add('correct');
                score++;
            } else {
                options[selectedIndex].classList.add('incorrect');
                options[question.correct].classList.add('correct');
            }

            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });
        }
        
        function nextQuestion() {
            if (currentQuestion < quizQuestions.length - 1) {
                currentQuestion++;
                loadQuizQuestion();
            } else {
                showQuizResults();
            }
        }
        
        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuizQuestion();
            }
        }
        
        function showQuizResults() {
            const quizResultElement = document.getElementById('quizResult');
            const percentage = (score / quizQuestions.length) * 100;
            
            let message = '';
            if (percentage >= 80) {
                message = `Luar biasa! Skor Anda: ${score}/${quizQuestions.length} (${percentage}%)`;
            } else if (percentage >= 60) {
                message = `Bagus! Skor Anda: ${score}/${quizQuestions.length} (${percentage}%)`;
            } else {
                message = `Skor Anda: ${score}/${quizQuestions.length} (${percentage}%). Terus belajar!`;
            }
            
            quizResultElement.innerHTML = `
                <h3>Hasil Kuis</h3>
                <p>${message}</p>
                <button class="btn btn-primary" id="restartQuiz">Ulangi Kuis</button>
            `;
            
            quizContainer.querySelector('.quiz-nav').style.display = 'none';
            document.getElementById('quizQuestion').style.display = 'none';
            document.getElementById('quizOptions').style.display = 'none';
            
            setTimeout(() => {
                document.getElementById('restartQuiz').addEventListener('click', restartQuiz);
            }, 100);
        }
        
        function restartQuiz() {
            currentQuestion = 0;
            score = 0;

            document.getElementById('quizQuestion').style.display = 'block';
            document.getElementById('quizOptions').style.display = 'grid';
            quizContainer.querySelector('.quiz-nav').style.display = 'flex';
            document.getElementById('quizResult').innerHTML = '';
            
            loadQuizQuestion();
        }

        document.getElementById('emailContact').addEventListener('click', () => {
            window.location.href = 'mailto:agus.saleh@example.com';
        });
        
        document.getElementById('locationContact').addEventListener('click', () => {
            window.open('https://www.google.com/maps/place/Jakarta,+Indonesia', '_blank');
        });
        
        document.getElementById('phoneContact').addEventListener('click', () => {
            window.location.href = 'tel:+6281234567890';
        });
        
        function typeWriter() {
            const typingText = document.querySelector('.typing-text');
            const texts = [
                "Selamat Datang <span>Di Portfolio Saya</span>",
                "AGUS SALEH <span>RUMBOUW</span>",
                "Saya seorang <span>Mahasiswa</span>",
                "Dari <span>Teknik Informatika</span>"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.innerHTML = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {

                    typingText.innerHTML = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1000; 
                } 
                else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500; 
                }
                
                setTimeout(type, typingSpeed);
            }
            
            setTimeout(type, 1000);
        }
        
        themeToggle.addEventListener('click', toggleDarkMode);
        themeToggleMobile.addEventListener('click', toggleDarkMode);
        hamburger.addEventListener('click', openMobileMenu);
        closeMenu.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
        
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        document.getElementById('nextQuestion').addEventListener('click', nextQuestion);
        document.getElementById('prevQuestion').addEventListener('click', prevQuestion);
        
        window.addEventListener('scroll', checkScroll);
        typeWriter();
        
        window.addEventListener('load', () => {
            checkScroll();
        });