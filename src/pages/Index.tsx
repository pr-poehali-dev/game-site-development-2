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

  const characters = [
    {
      name: "Кибер-Воин",
      role: "Атакующий",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/6180a203-5f00-48a2-aaa0-474d9f507356.jpg",
      description: "Мастер ближнего боя с усиленной броней"
    },
    {
      name: "Нейро-Хакер",
      role: "Поддержка",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/727c1eb5-46a0-491d-bb1d-319d2a978679.jpg",
      description: "Управляет системами противника"
    },
    {
      name: "Плазма-Снайпер",
      role: "Дальний бой",
      image: "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/6180a203-5f00-48a2-aaa0-474d9f507356.jpg",
      description: "Точные выстрелы на дальних дистанциях"
    }
  ];

  const screenshots = [
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2d0b6cdb-11d0-421c-bce8-12cd90b8be20.jpg",
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/6180a203-5f00-48a2-aaa0-474d9f507356.jpg",
    "https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/727c1eb5-46a0-491d-bb1d-319d2a978679.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-glow">NEON STRIKE</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная" },
                { id: "gameplay", label: "Геймплей" },
                { id: "characters", label: "Персонажи" },
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground box-glow">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/2d0b6cdb-11d0-421c-bce8-12cd90b8be20.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow animate-float">
              NEON STRIKE
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Окунитесь в мир киберпанка будущего. Выбирайте персонажей, развивайте навыки и сражайтесь за контроль над городом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground box-glow text-lg px-8">
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
              { icon: "Users", label: "Онлайн PvP", value: "5v5" },
              { icon: "Zap", label: "Режимов", value: "8+" },
              { icon: "Trophy", label: "Персонажей", value: "20+" }
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:box-glow">
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
          <p className="text-center text-muted-foreground mb-16 text-lg">Динамичные бои в киберпанк-мире</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/2b850eb6-46de-4fe6-a73c-a998b638582e/files/6180a203-5f00-48a2-aaa0-474d9f507356.jpg"
                alt="Gameplay"
                className="rounded-lg border border-primary/20 box-glow"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: "Sword",
                  title: "Тактические бои",
                  desc: "Используйте способности персонажей и работайте в команде"
                },
                {
                  icon: "Sparkles",
                  title: "Уникальные способности",
                  desc: "Каждый герой обладает набором мощных умений"
                },
                {
                  icon: "Map",
                  title: "Множество карт",
                  desc: "Сражайтесь на улицах неонового города и в его окрестностях"
                },
                {
                  icon: "Award",
                  title: "Система прогрессии",
                  desc: "Открывайте новых персонажей и улучшения"
                }
              ].map((feature, i) => (
                <Card key={i} className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:box-glow">
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
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Персонажи</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите своего бойца</p>

          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((char, i) => (
              <Card
                key={i}
                className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all hover:box-glow hover:scale-105 duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-secondary font-semibold mb-1">{char.role}</div>
                    <h3 className="text-2xl font-bold">{char.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{char.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-glow">Скриншоты</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Посмотрите на игру в действии</p>

          <div className="grid md:grid-cols-3 gap-6">
            {screenshots.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary transition-all hover:box-glow cursor-pointer group"
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

            <Card className="p-8 bg-card/50 backdrop-blur border-secondary/30 box-glow">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Zap" size={32} className="text-secondary" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 text-glow">Готовы начать?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Скачайте игру бесплатно и присоединяйтесь к миллионам игроков
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground box-glow text-xl px-12 py-6 h-auto">
            <Icon name="Download" size={24} className="mr-3" />
            Скачать NEON STRIKE
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            Доступно на Windows, macOS и Linux
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-glow">NEON STRIKE</h3>
              <p className="text-muted-foreground text-sm">
                Футуристический шутер нового поколения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игра</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Скачать</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Новости</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Обновления</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Форум</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Связаться</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitch" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 NEON STRIKE. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
