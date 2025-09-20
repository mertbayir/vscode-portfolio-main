import Image from 'next/image';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.profileImageContainer}>
          <Image
            src="/vesika2.jpg"
            className={styles.profileImage}
            alt="Mert Bayır"
            width={250}
            height={250}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <h1 className={styles.title}>Mert Bayır</h1>
        <div className={styles.subtitle}>Software Engineer</div>
        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I am a software engineer from Sakarya, Turkiye. I primarily work with C#, Python, and the Java ecosystem.
            </p>
            <p className={styles.paragraph}>
I have some image and sound processing projects developed using OpenCV,librosa etc.            </p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.customTimeline}>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineBox}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>SoleLunaTech</span>
                  <span className={styles.timelineSubtitle}>Jr. Backend Developer</span>
                  <span className={styles.timelineLocation}>Bursa, Turkiye</span>
                </div>
              </div>
              <div className={styles.timelineBox}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Martur Fompak International</span>
                  <span className={styles.timelineSubtitle}>AI Intern</span>
                  <span className={styles.timelineLocation}>Bursa, Turkiye</span>
                </div>
              </div>
              <div className={styles.timelineBox}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTitle}>Martur Fompak International</span>
                  <span className={styles.timelineSubtitle}>Hardware Intern</span>
                  <span className={styles.timelineLocation}>Kütahya, Turkiye</span>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.paragraph}>
              I have developed several projects including a full-stack Verili Olive Oil E-Commerce Platform with ASP.NET Core and Entity Framework, Real-Time Chatbot Assistant with React/TypeScript and Socket.io for SoleLuna Tech, AI Speech Recognition System with Python and ML algorithms for MFI, MFI Inventory Management System with C# and Windows Forms, and Patika Mobile Donation App with React Native featuring modern UI/UX design.
            </p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to ride a bike and play console games.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
