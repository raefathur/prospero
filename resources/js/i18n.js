import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    id: {
        translation: {

            // ==========================================
            // NAVBAR
            // ==========================================
            navbar: {
                home: 'Beranda',
                about: 'Tentang Kami',
                services: 'Layanan',
                blog: 'Blog',
                contact: 'Hubungi Kami',

                // Tentang Kami
                aboutProspero: 'Tentang Prospero Management',
                ourTeams: 'Tim Kami',
                director: 'Direktur',
                prosperoTeams: 'Tim Prospero Management',
                aboutDescription:
                    'Kenali lebih jauh tentang Prospero Management, visi, nilai, dan komitmen kami dalam membantu organisasi dan individu mencapai potensi terbaiknya.',
                learnMore: 'Pelajari lebih lanjut',
                teamsDescription:
                    'Kenali para profesional di balik Prospero Management yang menghadirkan pengalaman dan keahlian dalam setiap layanan kami.',

                // Kategori Layanan
                strategic: 'Strategic & Performance Management',
                hr: 'Human Resource Management',
                leadership: 'Leadership Development Program',
                managerial: 'Managerial & Business Skill',
                tms: 'Training Management System',
                personal: 'Personal Effectiveness',
                retirement: 'Purnabakti',

                // Strategic & Performance Management
                strategicPlan: 'Strategic Plan',
                diagnosing:
                    'Diagnosing Employee Performance Management Effectiveness',
                strategyMap:
                    'Penyusunan Strategy Map & KPI Berbasis BSC',

                // Human Resource Management
                competencyHrm: 'Competency-Based HRM',
                hrNonHr: 'HR for Non HR',
                hrEssentials: 'Human Resource Management Essentials',
                talent: 'Talent Management',
                sop: 'Developing Standard Operation Procedure',
                orgDev: 'Organizational Development',
                coaching: 'Coaching & Counseling',

                // Leadership Development Program
                effectiveLeadership: 'Effective Leadership',
                supervisory: 'Supervisory Development Program',
                customerTeams: 'Developing Customer-Focused Teams',
                execution: 'Developing Execution Skills',

                // Managerial & Business Skill
                fiveS: '5S Workplace',
                presentation: 'High Impact Presentation Skill',
                communication: 'Communication Skill',
                businessResearch: 'Business Management Research',
                projectManagement: 'Improving Project Management Skill',
                marketing: 'Fundamental of Marketing',
                problemSolving: 'Problem Solving & Decision Making',
                negotiation: 'Negotiation Skill for Business',
                feasibility: 'Feasibility Study',
                businessPlan: 'Business Plan',
                finance: 'Finance for Non Finance',

                // Training Management System
                trainingModule: 'Developing Training Module',
                designTraining: 'Designing Training Program',
                trainingPlan: 'Training Plan Development',
                trainingImpact: 'Training Impact Evaluation',
                trainingSystem: 'Training Management System',
                trainers: 'Training for the Trainers',

                // Personal Effectiveness
                timeStress: 'Time & Stress Management',
                personalDevelopment: 'Personal Development',
                workLife: 'Work Life Balance',
                followership: 'Effective Followership',

                // Purnabakti
                retire1: 'Persiapan pensiun (1 Day)',
                retire2: 'Persiapan pensiun (2 Day)',
                retire3: 'Persiapan pensiun (3 Day)',

                // Deskripsi kategori layanan
                strategicDesc:
                    'Membantu organisasi menetapkan arah strategis, menyelaraskan kinerja, dan menerjemahkan tujuan bisnis menjadi hasil yang terukur.',
                hrDesc:
                    'Mengembangkan praktik pengelolaan sumber daya manusia yang efektif untuk memperkuat kompetensi, talenta, kapabilitas organisasi, dan kinerja karyawan.',
                leadershipDesc:
                    'Membangun pemimpin yang mampu mengarahkan tim, memperkuat kolaborasi, dan menerjemahkan prioritas organisasi menjadi eksekusi yang efektif.',
                managerialDesc:
                    'Memperkuat kemampuan manajerial dan bisnis yang praktis untuk meningkatkan komunikasi, pengambilan keputusan, pelaksanaan proyek, dan efektivitas bisnis.',
                tmsDesc:
                    'Mendukung organisasi dalam merancang, merencanakan, melaksanakan, dan mengevaluasi program pelatihan melalui sistem manajemen pelatihan yang terstruktur dan efektif.',
                personalDesc:
                    'Meningkatkan efektivitas individu melalui pengelolaan waktu, pengembangan diri, keseimbangan hidup dan pekerjaan, serta kemampuan followership.',
                retirementDesc:
                    'Membantu individu mempersiapkan masa purnabakti secara lebih matang agar dapat menjalani transisi dengan percaya diri dan produktif.',

                // Blog
                articles: 'Artikel',
                news: 'Berita',
                insight: 'Insight',
                blogTitle: 'Insight & Informasi',
                blogDesc:
                    'Temukan perspektif, artikel, dan informasi terbaru dari Prospero Management.',
                latestArticles: 'Artikel Terbaru',
                latestArticlesDesc: 'Wawasan dan pengetahuan praktis.',
                featuredInsight: 'Insight Pilihan',
                featuredInsightDesc: 'Pilihan gagasan dan perspektif.',
            },


            // ==========================================
            // LANGUAGE
            // ==========================================
            language: {
                indonesian: 'Bahasa Indonesia',
                english: 'English',
            },


            // ==========================================
            // HERO
            // ==========================================
            hero: {
                eyebrow: 'Solusi Pengembangan Organisasi',
                title: 'Raih Potensi Terbaik',
                titleHighlight: 'untuk Perusahaan Anda.',
                description:
                    'Kami membantu perusahaan dan organisasi mengembangkan potensi sumber daya manusia melalui solusi konsultasi, pelatihan, dan pengembangan yang relevan.',
                serviceButton: 'Lihat Layanan',
                contactButton: 'Hubungi Kami',
            },


            // ==========================================
            // UPCOMING TRAINING
            // ==========================================
            training: {
                eyebrow: 'Program Mendatang',
                title: 'Ikuti Pelatihan',
                titleHighlight: 'Prospero Management',
                description:
                    'Temukan program pelatihan dan pengembangan terbaru yang akan datang dan tingkatkan kompetensi Anda bersama Prospero Management.',
                previous: 'Program sebelumnya',
                next: 'Program berikutnya',
                view: 'Lihat',
                date: 'Tanggal:',
                duration: 'Durasi:',
            },


            // ==========================================
            // COMPANY OVERVIEW
            // ==========================================
            companyOverview: {
                eyebrow: 'Tentang Kami',
                title:
                    'Membangun Potensi, Mengembangkan Keunggulan',
                description:
                    'Prospero Management membantu perusahaan dan organisasi mengembangkan sumber daya manusia melalui pelatihan, konsultasi, asesmen, dan berbagai solusi pengembangan organisasi yang relevan.',
                button:
                    'Selengkapnya Tentang Kami',
                statTraining:
                    'Peserta Pelatihan',
                statAssessment:
                    'Peserta Asesmen',
            },


            // ==========================================
            // DIRECTOR
            // ==========================================
            director: {
                eyebrow: 'PROSPERO MANAGEMENT',
                name: 'Ade Ahmad Rozi',
                position: 'Founder & Managing Partner HAVPRO Group',
                title: 'Mengenal',
                introduction:
                    'Ade Ahmad Rozi merupakan profesional berpengalaman lebih dari 20 tahun dalam bidang konsultasi dan pelatihan untuk meningkatkan kinerja organisasi dan individu di berbagai organisasi di Indonesia.',
                experience:
                    'Dengan pengalaman tersebut, beliau berkontribusi dalam membantu organisasi mengembangkan sumber daya manusia, meningkatkan kinerja, serta menghadapi berbagai tantangan perubahan organisasi secara strategis dan berkelanjutan.',
                expertiseTitle: 'Bidang Keahlian',
                expertise:
                    'Strategic Management, Corporate Culture, Performance Management, Change Management, Project Management, Leadership Development, Human Resources Management.',
                backgroundTitle: 'Latar Belakang Akademik & Profesional',
                phdTitle: 'Ph.D. in Management Science',
                phdInstitution:
                    'Technology University of the Philippines, Manila — 2002',
                bachelorTitle: 'Sarjana Manajemen',
                qwpDescription:
                    'Qualified Wealth Planner, QWP Academy Singapore — 2021',
            },


            // ==========================================
            // ABOUT PROSPERO
            // ==========================================
            aboutProspero: {
                eyebrow: 'PROSPERO MANAGEMENT',

                title: 'Visi Kami',

                titleHighlight: '',

                visionTitle: 'Visi Kami',

                vision:
                    'Menjadi Learning Management Firm yang profesional, handal, dan terpercaya dalam memberikan layanan peningkatan kinerja individu dan organisasi.',

                missionTitle: 'Misi Kami',

                mission1:
                    'Meningkatkan keunggulan kompetitif klien melalui pemberdayaan SDM yang adaptif dan inovatif;',

                mission2:
                    'Proaktif dalam membangun partnership untuk memastikan layanan yang tepat guna;',

                mission3:
                    'Membangun kehandalan layanan berdasarkan riset mutakhir.',
            },


            // ==========================================
            // PROGRAM SERVICES
            // ==========================================
            programServices: {
                eyebrow: 'PROGRAM & LAYANAN',
                title:
                    'Solusi Pengembangan Organisasi',
                description:
                    'Temukan berbagai program pengembangan yang sesuai dengan kebutuhan organisasi Anda.',
            },


            // ==========================================
            // TESTIMONIALS
            // ==========================================
            testimonials: {
                eyebrow: 'Testimoni',
                title: 'Apa Kata',
                titleHighlight: 'Mereka',
                description:
                    'Pengalaman dan pandangan dari berbagai profesional yang telah mengikuti program pengembangan bersama Prospero Management.',
                previous: 'Testimoni sebelumnya',
                next: 'Testimoni berikutnya',

                quote1:
                    'Program yang diberikan Prospero sangat relevan dengan kebutuhan pengembangan kami. Materinya aplikatif dan mudah diterapkan di lingkungan kerja.',

                quote2:
                    'Pendekatan pembelajaran Prospero membuat peserta lebih aktif dan terlibat. Kami mendapatkan pengalaman belajar yang sangat positif.',

                quote3:
                    'Prospero mampu memahami kebutuhan organisasi dan menerjemahkannya menjadi program yang relevan, terstruktur, dan engaging.',

                quote4:
                    'Kami sangat terbantu dengan pendekatan yang fleksibel dan profesional. Programnya memberikan insight yang dapat langsung diterapkan oleh peserta.',

                position1:
                    'Human Capital Manager',

                position2:
                    'Learning & Development Manager',

                position3:
                    'HR Business Partner',

                position4:
                    'People Development Lead',
            },


            // ==========================================
            // OUR CLIENTS
            // ==========================================
            ourClients: {
                eyebrow:
                    'KLIEN KAMI',

                title:
                    'Dipercaya oleh Organisasi di Berbagai Industri',

                description:
                    'Dipercaya oleh berbagai perusahaan dan organisasi dalam mendukung pengembangan sumber daya manusia.',
            },


            // ==========================================
            // BLOG SECTION
            // ==========================================
            blogSection: {
                eyebrow:
                    'BLOG & INSIGHT',

                title:
                    'Latest Stories',

                titleHighlight:
                    'Insights',

                description:
                    'Temukan berbagai berita, artikel, wawasan, dan informasi terbaru seputar pengembangan organisasi, sumber daya manusia, pelatihan, dan berbagai aktivitas Prospero.',

                viewAll:
                    'View All',

                posts: {
                    post1: {
                        title:
                            'Prospero Management Laksanakan Program Pelatihan Effective Leadership in Digital Era untuk MTI SCM',
                        date:
                            'April 25, 2025',
                    },

                    post2: {
                        title:
                            'Prospero Management Selenggarakan Public Seminar: Impact Evaluation of Training Program & Developing Training Plan',
                        date:
                            'February 5, 2025',
                    },

                    post3: {
                        title:
                            'Prospero Management Gading FT Tubanda Menyelenggarakan Workshop Human Performance Management',
                        date:
                            'January 18, 2025',
                    },

                    post4: {
                        title:
                            'Prospero Management Bersama ICT Pelatihan In-House Training Smart Money Management',
                        date:
                            'January 10, 2025',
                    },

                    post5: {
                        title:
                            'Prospero Management dan PT KGSW Bekasi Mengadakan Pelatihan Happy Retirement 2024',
                        date:
                            'December 20, 2024',
                    },
                },
            },


            // ==========================================
            // FOOTER
            // ==========================================
            footer: {
                description:
                    'Prospero Management membantu perusahaan dan organisasi mengembangkan sumber daya manusia melalui pelatihan, konsultasi, asesmen, dan solusi pengembangan organisasi yang relevan.',

                newsletterTitle:
                    'Berlangganan Newsletter Kami',

                newsletterDescription:
                    'Perluas wawasan Anda bersama insight dari Prospero Management.',

                emailPlaceholder:
                    'Alamat Email',

                submit:
                    'Kirim',

                copyright:
                    '© 2026 Prospero Management. All Rights Reserved.',
            },


            // ==========================================
            // MEGA MENU - SERVICES
            // ==========================================
            megaServices: {
                publicPrograms:
                    'Program Publik',

                customizeProgram:
                    'Program Khusus',

                consultingProgram:
                    'Program Konsultasi',

                assessmentServices:
                    'Layanan Assessment',

                esgCenter:
                    'ESG Center',

                solutionsTitle:
                    'Solusi untuk Organisasi Anda',

                solutionsDescription:
                    'Kami menyediakan berbagai solusi pengembangan untuk membantu organisasi mencapai potensi terbaiknya.',

                publicProgramTitle:
                    'Program Publik',

                publicProgramDescription:
                    'Jelajahi berbagai program pengembangan yang dirancang untuk memperkuat kepemimpinan, kompetensi, dan kinerja organisasi.',

                shortPrograms:
                    'Program Singkat',

                seasonalPrograms:
                    'Program Musiman',

                certificationPrograms:
                    'Program Sertifikasi',

                learnMore:
                    'Pelajari lebih lanjut',
            },


            // ==========================================
            // MEGA MENU - BLOG
            // ==========================================
            megaBlog: {
                articles:
                    'Artikel',

                news:
                    'Berita',

                insight:
                    'Insight',

                title:
                    'Insight & Informasi',

                description:
                    'Temukan perspektif, artikel, dan informasi terbaru dari Prospero Management.',

                latestArticles:
                    'Artikel Terbaru',

                latestArticlesDescription:
                    'Wawasan dan pengetahuan praktis.',

                featuredInsight:
                    'Insight Pilihan',

                featuredInsightDescription:
                    'Pilihan gagasan dan perspektif.',

                readMore:
                    'Baca selengkapnya',
            },
        },
    },


    // ==================================================
    // ENGLISH
    // ==================================================
    en: {
        translation: {

            // ==========================================
            // NAVBAR
            // ==========================================
            navbar: {
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                blog: 'Blog',
                contact: 'Contact Us',

                // About
                aboutProspero: 'About Prospero Management',
                ourTeams: 'Our Teams',
                director: 'Director',
                prosperoTeams: 'Prospero Management Teams',

                aboutDescription:
                    'Discover Prospero Management, our vision, values, and commitment to supporting organizations and people to achieve their full potential.',

                learnMore:
                    'Learn more',

                teamsDescription:
                    'Meet the professionals behind Prospero Management who bring expertise and experience to every engagement.',

                // Service Categories
                strategic:
                    'Strategic & Performance Management',

                hr:
                    'Human Resource Management',

                leadership:
                    'Leadership Development Program',

                managerial:
                    'Managerial & Business Skill',

                tms:
                    'Training Management System',

                personal:
                    'Personal Effectiveness',

                retirement:
                    'Purnabakti',

                // Strategic & Performance Management
                strategicPlan:
                    'Strategic Plan',

                diagnosing:
                    'Diagnosing Employee Performance Management Effectiveness',

                strategyMap:
                    'Strategy Map & KPI Development Based on BSC',

                // Human Resource Management
                competencyHrm:
                    'Competency-Based HRM',

                hrNonHr:
                    'HR for Non-HR',

                hrEssentials:
                    'Human Resource Management Essentials',

                talent:
                    'Talent Management',

                sop:
                    'Developing Standard Operating Procedure',

                orgDev:
                    'Organizational Development',

                coaching:
                    'Coaching & Counseling',

                // Leadership Development Program
                effectiveLeadership:
                    'Effective Leadership',

                supervisory:
                    'Supervisory Development Program',

                customerTeams:
                    'Developing Customer-Focused Teams',

                execution:
                    'Developing Execution Skills',

                // Managerial & Business Skill
                fiveS:
                    '5S Workplace',

                presentation:
                    'High Impact Presentation Skill',

                communication:
                    'Communication Skill',

                businessResearch:
                    'Business Management Research',

                projectManagement:
                    'Improving Project Management Skill',

                marketing:
                    'Fundamental of Marketing',

                problemSolving:
                    'Problem Solving & Decision Making',

                negotiation:
                    'Negotiation Skill for Business',

                feasibility:
                    'Feasibility Study',

                businessPlan:
                    'Business Plan',

                finance:
                    'Finance for Non-Finance',

                // Training Management System
                trainingModule:
                    'Developing Training Module',

                designTraining:
                    'Designing Training Program',

                trainingPlan:
                    'Training Plan Development',

                trainingImpact:
                    'Training Impact Evaluation',

                trainingSystem:
                    'Training Management System',

                trainers:
                    'Training for Trainers',

                // Personal Effectiveness
                timeStress:
                    'Time & Stress Management',

                personalDevelopment:
                    'Personal Development',

                workLife:
                    'Work-Life Balance',

                followership:
                    'Effective Followership',

                // Retirement
                retire1:
                    'Persiapan Pensiun (1 Day)',

                retire2:
                    'Persiapan Pensiun (2 Days)',

                retire3:
                    'Persiapan Pensiun (3 Days)',

                // Service Category Descriptions
                strategicDesc:
                    'Helping organizations define strategic direction, align performance, and translate business objectives into measurable results.',

                hrDesc:
                    'Developing effective people management practices to strengthen competencies, talent, organizational capability, and employee performance.',

                leadershipDesc:
                    'Building capable leaders who can lead people, strengthen teamwork, and turn organizational priorities into effective execution.',

                managerialDesc:
                    'Strengthening practical managerial and business capabilities to improve communication, decision making, project execution, and business effectiveness.',

                tmsDesc:
                    'Supporting organizations in designing, planning, delivering, and evaluating training programs through a structured and effective training management system.',

                personalDesc:
                    'Enhancing personal capabilities, self-management, and effectiveness to help individuals perform with greater focus, balance, and confidence.',

                retirementDesc:
                    'Helping individuals prepare for retirement through practical programs that support a smooth transition and a meaningful next stage of life.',

                // Blog
                articles:
                    'Articles',

                news:
                    'News',

                insight:
                    'Insight',

                blogTitle:
                    'Insights & Information',

                blogDesc:
                    'Discover the latest perspectives, articles, and information from Prospero Management.',

                latestArticles:
                    'Latest Articles',

                latestArticlesDesc:
                    'Knowledge and practical insights.',

                featuredInsight:
                    'Featured Insight',

                featuredInsightDesc:
                    'Selected ideas and perspectives.',
            },


            // ==========================================
            // LANGUAGE
            // ==========================================
            language: {
                indonesian:
                    'Bahasa Indonesia',

                english:
                    'English',
            },


            // ==========================================
            // HERO
            // ==========================================
            hero: {
                eyebrow:
                    'Organization Development Solutions',

                title:
                    'Unlock Your Full Potential',

                titleHighlight:
                    'for Your Organization.',

                description:
                    'We help companies and organizations develop their human capital through relevant consulting, training, and development solutions.',

                serviceButton:
                    'View Services',

                contactButton:
                    'Contact Us',
            },


            // ==========================================
            // UPCOMING TRAINING
            // ==========================================
            training: {
                eyebrow:
                    'Upcoming Programs',

                title:
                    'Join',

                titleHighlight:
                    'Prospero Management Training',

                description:
                    'Discover our upcoming training and development programs and enhance your capabilities with Prospero Management.',

                previous:
                    'Previous program',

                next:
                    'Next program',

                view:
                    'View',

                date:
                    'Date:',

                duration:
                    'Duration:',
            },


            // ==========================================
            // COMPANY OVERVIEW
            // ==========================================
            companyOverview: {
                eyebrow:
                    'About Us',

                title:
                    'Building Potential, Developing Excellence',

                description:
                    'Prospero Management helps companies and organizations develop their human capital through training, consulting, assessment, and relevant organizational development solutions.',

                button:
                    'Learn More About Us',

                statTraining:
                    'Training Participants',

                statAssessment:
                    'Assessment Participants',
            },


            // ==========================================
            // DIRECTOR
            // ==========================================
            director: {
                eyebrow:
                    'PROSPERO MANAGEMENT',

                name:
                    'Ade Ahmad Rozi',

                position:
                    'Founder & Managing Partner HAVPRO Group',

                title:
                    'Get to Know',

                introduction:
                    'Ade Ahmad Rozi is a professional with more than 20 years of experience in consulting and training to improve organizational and individual performance across organizations in Indonesia.',

                experience:
                    'With this experience, he has contributed to helping organizations develop human capital, improve performance, and address various organizational change challenges in a strategic and sustainable manner.',

                expertiseTitle:
                    'Areas of Expertise',

                expertise:
                    'Strategic Management, Corporate Culture, Performance Management, Change Management, Project Management, Leadership Development, Human Resources Management.',

                backgroundTitle:
                    'Academic & Professional Background',

                phdTitle:
                    'Ph.D. in Management Science',

                phdInstitution:
                    'Technology University of the Philippines, Manila — 2002',

                bachelorTitle:
                    "Bachelor's Degree in Management",

                qwpDescription:
                    'Qualified Wealth Planner, QWP Academy Singapore — 2021',
            },


            // ==========================================
            // ABOUT PROSPERO
            // ==========================================
            aboutProspero: {
                eyebrow:
                    'PROSPERO MANAGEMENT',

                title:
                    'Our Vision',

                titleHighlight:
                    '',

                visionTitle:
                    'Our Vision',

                vision:
                    'To become a professional, reliable, and trusted Learning Management Firm in providing performance improvement services for individuals and organizations.',

                missionTitle:
                    'Our Mission',

                mission1:
                    'Enhancing clients’ competitive advantage through adaptive and innovative human capital empowerment;',

                mission2:
                    'Proactively building partnerships to ensure effective and appropriate services;',

                mission3:
                    'Building service reliability based on the latest research.',
            },


            // ==========================================
            // PROGRAM SERVICES
            // ==========================================
            programServices: {
                eyebrow:
                    'PROGRAM & SERVICES',

                title:
                    'Organizational Development Solutions',

                description:
                    'Explore development programs tailored to your organization’s needs.',
            },


            // ==========================================
            // TESTIMONIALS
            // ==========================================
            testimonials: {
                eyebrow:
                    'Testimonials',

                title:
                    'What',

                titleHighlight:
                    'They Say',

                description:
                    'Experiences and perspectives from professionals who have participated in development programs with Prospero Management.',

                previous:
                    'Previous testimonial',

                next:
                    'Next testimonial',

                quote1:
                    'Prospero’s program was highly relevant to our development needs. The materials were practical and easy to apply in the workplace.',

                quote2:
                    'Prospero’s learning approach made participants more active and engaged. We had a very positive learning experience.',

                quote3:
                    'Prospero was able to understand our organizational needs and translate them into relevant, structured, and engaging programs.',

                quote4:
                    'We greatly benefited from the flexible and professional approach. The program provided insights that participants could apply immediately.',

                position1:
                    'Human Capital Manager',

                position2:
                    'Learning & Development Manager',

                position3:
                    'HR Business Partner',

                position4:
                    'People Development Lead',
            },


            // ==========================================
            // OUR CLIENTS
            // ==========================================
            ourClients: {
                eyebrow:
                    'OUR CLIENTS',

                title:
                    'Trusted by Organizations Across Industries',

                description:
                    'Trusted by companies and organizations across industries to support human capital development.',
            },


            // ==========================================
            // BLOG SECTION
            // ==========================================
            blogSection: {
                eyebrow:
                    'BLOG & INSIGHT',

                title:
                    'Latest Stories',

                titleHighlight:
                    'Insights',

                description:
                    'Discover the latest news, articles, insights, and information on organizational development, human capital, training, and Prospero activities.',

                viewAll:
                    'View All',

                posts: {
                    post1: {
                        title:
                            'Prospero Management Conducts Effective Leadership in Digital Era Training Program for MTI SCM',

                        date:
                            'April 25, 2025',
                    },

                    post2: {
                        title:
                            'Prospero Management Holds Public Seminar: Impact Evaluation of Training Program & Developing Training Plan',

                        date:
                            'February 5, 2025',
                    },

                    post3: {
                        title:
                            'Prospero Management Gading FT Tubanda Holds Human Performance Management Workshop',

                        date:
                            'January 18, 2025',
                    },

                    post4: {
                        title:
                            'Prospero Management Together with ICT Conducts In-House Training Smart Money Management',

                        date:
                            'January 10, 2025',
                    },

                    post5: {
                        title:
                            'Prospero Management and PT KGSW Bekasi Hold Happy Retirement 2024 Training',

                        date:
                            'December 20, 2024',
                    },
                },
            },


            // ==========================================
            // FOOTER
            // ==========================================
            footer: {
                description:
                    'Prospero Management helps companies and organizations develop their human capital through relevant training, consulting, assessment, and organizational development solutions.',

                newsletterTitle:
                    'Subscribe to Our Newsletter',

                newsletterDescription:
                    'Expand your horizons with insights from Prospero Management.',

                emailPlaceholder:
                    'Email Address',

                submit:
                    'Submit',

                copyright:
                    '© 2026 Prospero Management. All Rights Reserved.',
            },


            // ==========================================
            // MEGA MENU - SERVICES
            // ==========================================
            megaServices: {
                publicPrograms:
                    'Public Programs',

                customizeProgram:
                    'Customized Programs',

                consultingProgram:
                    'Consulting Programs',

                assessmentServices:
                    'Assessment Services',

                esgCenter:
                    'ESG Center',

                solutionsTitle:
                    'Solutions for Your Organization',

                solutionsDescription:
                    'We provide various development solutions to help organizations reach their full potential.',

                publicProgramTitle:
                    'Public Programs',

                publicProgramDescription:
                    'Explore development programs designed to strengthen leadership, capabilities, and organizational performance.',

                shortPrograms:
                    'Short Programs',

                seasonalPrograms:
                    'Seasonal Programs',

                certificationPrograms:
                    'Certification Programs',

                learnMore:
                    'Learn more',
            },


            // ==========================================
            // MEGA MENU - BLOG
            // ==========================================
            megaBlog: {
                articles:
                    'Articles',

                news:
                    'News',

                insight:
                    'Insight',

                title:
                    'Insights & Information',

                description:
                    'Discover the latest perspectives, articles, and information from Prospero Management.',

                latestArticles:
                    'Latest Articles',

                latestArticlesDescription:
                    'Knowledge and practical insights.',

                featuredInsight:
                    'Featured Insight',

                featuredInsightDescription:
                    'Selected ideas and perspectives.',

                readMore:
                    'Read more',
            },
        },
    },
};


i18n
    .use(initReactI18next)
    .init({
        resources,

        lng: 'id',

        fallbackLng: 'id',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;