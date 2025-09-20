import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website 1',
    link: 'mertbayir.me',
    href: 'https://mertbayir.me',
  },
  {
    social: 'website 2',
    link: 'mertbayir.dev',
    href: 'https://mertbayir.dev',
  },
  {
    social: 'email',
    link: 'mert.bayir1@outlook.com',
    href: 'mailto:mert.bayir1@outlook.com',
  },
  {
    social: 'github',
  link: 'mertbayir',
  href: 'https://github.com/mertbayir',
  },
  {
    social: 'linkedin',
    link: 'mertbayir',
    href: 'https://www.linkedin.com/in/mert-bayir/',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
