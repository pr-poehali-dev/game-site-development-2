import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "gameplay", "characters", "media", "requirements"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bosses = [
    {
      name: "Страж Тени",
      role: "Босс Первого Уровня",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c9acf5c-9f93-40da-a748-bb9bf9068d28.jpg",
      description: "Загадочная фигура, охраняющая вход в лес"
    },
    {
      name: "Хранитель Равновесия",
      role: "Финальный Босс",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c9acf5c-9f93-40da-a748-bb9bf9068d28.jpg",
      description: "Откроет Ваське истинное предназначение"
    },
    {
      name: "Призрак Прошлого",
      role: "Секретный Босс",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c9acf5c-9f93-40da-a748-bb9bf9068d28.jpg",
      description: "Отражение внутренних страхов котёнка"
    }
  ];

  const screenshots = [
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/7873d475-0db0-427e-a0f5-abfc4ff5baeb.jpg",
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c47cbf4-bc84-4c5f-856c-73a2d60e0c1d.jpg",
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c9acf5c-9f93-40da-a748-bb9bf9068d28.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-primary">ЛЕС РАВНОВЕСИЯ</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная" },
                { id: "gameplay", label: "Геймплей" },
                { id: "characters", label: "Боссы" },
                { id: "media", label: "Медиа" },
                { id: "requirements", label: "Требования" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/7873d475-0db0-427e-a0f5-abfc4ff5baeb.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow animate-float">
              ЛЕС РАВНОВЕСИЯ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              История маленького котёнка Васьки, который ищет своё предназначение в тёмном, атмосферном мире, полном загадок и испытаний.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать игру
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { icon: "Ghost", label: "Жанр", value: "Хоррор" },
              { icon: "Moon", label: "Атмосфера", value: "Тёмная" },
              { icon: "Skull", label: "Боссов", value: "6+" }
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all">
                <Icon name={stat.icon} size={32} className="mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gameplay" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Геймплей</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Исследуйте тёмный мир в стиле Little Nightmares</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2c47cbf4-bc84-4c5f-856c-73a2d60e0c1d.jpg"
                alt="Gameplay"
                className="rounded-lg border border-primary/20"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: "Footprints",
                  title: "Платформер-хоррор",
                  desc: "Путешествуйте через мрачные локации, решайте головоломки"
                },
                {
                  icon: "Brain",
                  title: "Философская история",
                  desc: "Узнайте о предназначении Васьки через испытания"
                },
                {
                  icon: "Eye",
                  title: "Атмосферный мир",
                  desc: "Погрузитесь в депрессивную, серую эстетику"
                },
                {
                  icon: "Swords",
                  title: "Битвы с боссами",
                  desc: "Противостойте страшным существам леса"
                }
              ].map((feature, i) => (
                <Card key={i} className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="characters" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Боссы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Встретьте существ Леса Равновесия</p>

          <div className="grid md:grid-cols-3 gap-8">
            {bosses.map((boss, i) => (
              <Card
                key={i}
                className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={boss.image}
                    alt={boss.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-accent font-semibold mb-1">{boss.role}</div>
                    <h3 className="text-2xl font-bold">{boss.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{boss.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Скриншоты</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Посмотрите на атмосферу игры</p>

          <div className="grid md:grid-cols-3 gap-6">
            {screenshots.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary transition-all cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all flex items-center justify-center">
                  <Icon name="Maximize2" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Системные требования</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Убедитесь, что ваш ПК готов</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Monitor" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">Минимальные</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "ОС", value: "Windows 10 64-bit" },
                  { label: "Процессор", value: "Intel Core i5-6600K" },
                  { label: "Память", value: "8 GB RAM" },
                  { label: "Видеокарта", value: "NVIDIA GTX 1060 6GB" },
                  { label: "Место", value: "50 GB" }
                ].map((req, i) => (
                  <div key={i} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="font-semibold">{req.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur border-accent/30">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Zap" size={32} className="text-accent" />
                <h3 className="text-2xl font-bold">Рекомендуемые</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "ОС", value: "Windows 11 64-bit" },
                  { label: "Процессор", value: "Intel Core i7-9700K" },
                  { label: "Память", value: "16 GB RAM" },
                  { label: "Видеокарта", value: "NVIDIA RTX 3070" },
                  { label: "Место", value: "50 GB SSD" }
                ].map((req, i) => (
                  <div key={i} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="font-semibold">{req.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-glow">Готовы узнать свою судьбу?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Скачайте игру и помогите Ваське найти ответы на его вопросы
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground text-xl px-12 py-6 h-auto">
            <Icon name="Download" size={24} className="mr-3" />
            Скачать ЛЕС РАВНОВЕСИЯ
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            Доступно на Windows, macOS и Linux
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/10 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">ЛЕС РАВНОВЕСИЯ</h3>
              <p className="text-muted-foreground text-sm">
                Философская история маленького котёнка в тёмном мире
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Главная</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Геймплей</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Скачать</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-primary cursor-pointer transition-colors">VK</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Telegram</li>
                <li className="hover:text-primary cursor-pointer transition-colors">YouTube</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Политика конфиденциальности</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Пользовательское соглашение</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Обратная связь</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 ЛЕС РАВНОВЕСИЯ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
