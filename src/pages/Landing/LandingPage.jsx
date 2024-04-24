import style from "./style.module.css";
import {
  Flex,
  Title,
  Text,
  Container,
  Box,
  Divider,
  Grid,
  Button,
  ActionIcon,
} from "@mantine/core";
// import { Carousel } from "@mantine/core";
// import Autoplay from "embla-carousel-autoplay";
import Logo from "../../components/Logo";
import aboutImg from "../../assets/landing-about.png";
import {
  IconArrowRight,
  IconBrandReddit,
  IconBrandTwitter,
  IconMessage,
  IconBrandTelegram,
  IconBrandGithub,
} from "@tabler/icons-react";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const socials = [
  { icon: IconBrandReddit },
  { icon: IconBrandTwitter },
  { icon: IconMessage },
  { icon: IconBrandTelegram },
  { icon: IconBrandGithub },
];
const supportItems = ["Help Center", "FAQ", "Bug report", "Contact Us"];
const names = ["CVez", "Forum", "Documentation"];

export default function LandingPage() {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [showButton, setShowButton] = useState(false); // state mới để kiểm soát việc hiển thị nút up-arrow
  // const autoplay = useRef(Autoplay({ delay: 1500 }));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setSticky(true);
        setShowButton(true); // hiển thị nút up-arrow khi cuộn xuống 500px
      } else {
        setSticky(false);
        setShowButton(false); // ẩn nút up-arrow khi ở đầu trang
      }

      // Tính vị trí của phần "About" trên màn hình
      const aboutElement = document.querySelector(`.${style.about}`);
      if (aboutElement) {
        const aboutElementPosition = aboutElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // Nếu phần "About" xuất hiện trên màn hình
        if (aboutElementPosition < windowHeight * 0.75) {
          setShowAbout(true); // Kích hoạt hiệu ứng xuất hiện
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Xóa bỏ event listener khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    // hàm xử lý sự kiện click vào nút up-arrow
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <nav className={`${style.nav} ${sticky ? style.darknav : ""}`}>
        <Logo variant={sticky ? "light" : "auto"} />
        <Flex>
          {sticky ? (
            <Button
              className={style.btn}
              variant="gradient"
              gradient={{ from: "#89C4DF", to: "#31AFD8", deg: 90 }}
              onClick={() => navigate("/dashboard")}
            >
              Getting Started
            </Button>
          ) : null}
        </Flex>
      </nav>
      <div className={style.hero}>
        <div className={style.heroContent}>
          <h1>Career Potential Unlocked</h1>
          <p>Take the Next Step Towards Your Dream Job Today!</p>
          <Button
            size="lg"
            variant="white"
            color="#31afd8"
            onClick={() => navigate("/dashboard")}
            rightSection={<IconArrowRight />}
          >
            Getting Started
          </Button>
        </div>
      </div>

      {/* <Container size="lg">
        <Carousel
          slideSize="20%"
          slideGap={{ base: 0, sm: "md", md: "sm" }}
          height={200}
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.play}
          dragFree
          loop
          withControls={false}
          style={{ marginTop: "100px" }}
        >
          <Carousel.Slide>
            <img src={Logo1} alt="Logo 1" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Logo2} alt="Logo 2" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Logo3} alt="Logo 3" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Logo4} alt="Logo 4" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Logo5} alt="Logo 5" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={Logo6} alt="Logo 6" />
          </Carousel.Slide>
        </Carousel>
      </Container> */}

      {/* <Container size="lg">
        <Flex
          mih={50}
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title order={3}>Serivce</Title>
          <Title order={2}>
            Marketing Automation Will Bring More Qualified Leads
          </Title>
        </Flex>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div className={style.card}>
            <div className={style.cardimage}>
              <img
                className={style.imgFluid}
                src={description1}
                alt="alternative"
              />
            </div>
            <div className={style.cardbody}>
              <Title order={5}>Matching JD with CV</Title>
              <Text size="sm" className={style.text}>
                Tivo collects customer data in order to help you analyse
                different situations and take required action
              </Text>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardimage}>
              <img
                className={style.imgFluid}
                src={description2}
                alt="alternative"
              />
            </div>
            <div className={style.cardbody}>
              <Title order={5}>Matching question with CV</Title>
              <Text size="sm" className={style.text}>
                Tivo collects customer data in order to help you analyse
                different situations and take required action
              </Text>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardimage}>
              <img
                className={style.imgFluid}
                src={description3}
                alt="alternative"
              />
            </div>
            <div className={style.cardbody}>
              <Title order={5}>Manage CV in possition</Title>
              <Text size="sm" className={style.text}>
                Tivo collects customer data in order to help you analyse
                different situations and take required action
              </Text>
            </div>
          </div>
        </Flex>
      </Container> */}

      <Flex justify="center" gap="lg" p={100}>
        <Flex flex={1} align="center" justify="center">
          <img className={style.image} src={aboutImg} />
        </Flex>
        <Flex direction="column" gap="sm" flex={1}>
          <Title order={1}>About us</Title>
          <Title order={4}>Career Growth Through Strategic Connections</Title>
          <Text size="sm" className={style.text}>
            At CVEZ, we believe in taking a comprehensive approach to unlocking
            your career potential by connecting you with the right opportunities
            beyond traditional CV submissions.
          </Text>
          <Text size="sm" className={style.text}>
            We advocate for your right to thrive in your chosen career
            trajectory, empowering you with insights into job compatibility for
            informed decisions and professional growth.
          </Text>
        </Flex>
      </Flex>
      {/* Create footer for CVez */}
      <Box>
        <Divider style={{ marginBottom: "30px", marginTop: "50px" }} />
        <Container>
          <Grid>
            <Grid.Col span={4}>
              <Title style={{ marginBottom: "10px" }} order={5}>
                Governance
              </Title>
              {names.map((name, index) => (
                <a key={index} href="" className={style.hovertext}>
                  <Text style={{ marginBottom: "10px" }} size="sm">
                    {name}
                  </Text>
                </a>
              ))}
            </Grid.Col>
            <Grid.Col span={4}>
              <Title style={{ marginBottom: "10px" }} order={5}>
                Support
              </Title>
              {supportItems.map((item, index) => (
                <a key={index} href="" className={style.hovertext}>
                  <Text style={{ marginBottom: "10px" }} size="sm">
                    {item}
                  </Text>
                </a>
              ))}
            </Grid.Col>

            <Grid.Col span={4}>
              <Title style={{ marginBottom: "5px" }} order={5}>
                Subscribe to CVEZ newsletter
              </Title>
              <Text size="sm" c="dimmed">
                Get the latest news and updates
              </Text>
              <Button
                variant="outline"
                color="red"
                mt="md"
                w="100%"
                rightSection={
                  <IconArrowRight style={{ marginLeft: "-5px" }} size={14} />
                }
              >
                Subscribe
              </Button>
              <Flex
                mih={50}
                gap="lg"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
                mt={10}
              >
                {socials.map((item, i) => (
                  <ActionIcon variant="transparent" color="black" key={i}>
                    <item.icon />
                  </ActionIcon>
                ))}
              </Flex>
            </Grid.Col>
          </Grid>
          <Divider
            style={{ marginTop: 4, marginBottom: "20px", width: "95%" }}
            size="xs"
          />
          <Flex justify="space-between" align="center" style={{ width: "95%" }}>
            <Text style={{ marginBottom: "20px" }} size="sm" c="dimmed">
              © 2024 CVEZ. All rights reserved
            </Text>
            <Text style={{ marginBottom: "20px" }} size="sm" c="dimmed">
              Made with 💗 by CVEZ
            </Text>
          </Flex>
        </Container>
      </Box>
      {/* {showButton && (
        <img
          src={UpArrow}
          alt="up-arrow"
          className={style.upArrow}
          onClick={scrollToTop}
        />
      )} */}
    </Fragment>
  );
}
