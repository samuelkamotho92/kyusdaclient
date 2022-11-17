import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { BsYoutube } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Personal from '../../../assets/PersonalMinistry.jpeg'
const sections = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/' },
  { title: 'Families', url: '/' },
  { title: 'Departments', url: '/' },
  { title: 'Gallery', url: '/gallery' }
];

const mainFeaturedPost = {
  title: 'Welcome to Personal Ministry Department',
  description:
  "In charge of Reaching out to our non-adventist brother and sisters",
  image: Personal,
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'About Us ',
    description:
      'Personal Ministries is a facet of the church whose origin can be traced to the beginning of Seventh-day Adventist® history in the 1860s. It endeavors to inspire, motivate, equip, train, and mobilize all members for dynamic Christian service with the conviction that “The church of Christ is organized for service” (Ministry of Healing, p. 148) and “Every son and daughter of God is called to be a missionary; we are called to the service of God and our fellow men” (The Ministry of Healing, p. 395).',
  },
  {
    title: 'Members',
    description:
      'The department comprised of 8 members'
  },
];

const posts = ["efadsfasd","wrfwrf", "wfwsfs"];

const sidebar = {
  title: 'Project',
  description:
    'Kyusda Mission 2023 Ministry',
  archives: [
    { title: 'PCM Sabbath', url: '#' },
  ],
  social: [
    { name: 'Kyusda Youtube', icon: BsYoutube , link:'https://www.youtube.com/channel/UCe6xeVkEBvG7OD_9HltS1xQ' },
    { name: 'Kyusda Facebook', icon: FacebookIcon , link:'https://www.facebook.com/profile.php?id=100083015178066' },
    { name:'kyusda Mission 2023 Contribution whatsapp group', icon: BsWhatsapp }
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header  sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Department Gallery" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
}