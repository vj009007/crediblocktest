import Head from 'next/head';
import Image from "next/image";
import logo from "../../public/logo.svg";
import Pict from "../../public/pict.png";
import AiTech from "../../public/ai-tech.svg";
import english from "../../public/en.svg";
import es from "../../public/es.svg";
import dt from "../../public/dt.svg";
import sliderLogo1 from "../../public/logo-1.svg";
import sliderLogo2 from "../../public/logo-2.svg";
import sliderLogo3 from "../../public/logo-3.svg";
import sliderLogo4 from "../../public/logo-4.svg";
import testimonial_avatar from "../../public/testimonial.svg";
import discover from "../../public/discover.svg";
import gem1 from "../../public/gem.svg";
import gem2 from "../../public/gem-1.svg";
import fLogo from "../../public/footer-logo.svg";
import twitter from "../../public/Twitter_black.svg";
import discord from "../../public/Discord_black.svg";
import rss from "../../public/RSS_black.svg";
import roobinium from "../../public/roobinium.svg";
import React, { useState } from "react";
import localFont from '@next/font/local';
import {
  SelectChangeEvent,
  FormControl,
  Select,
  MenuItem,
  Box,
  Link,
  Typography,
  List,
  ListItemText,
} from "@mui/material";
import Slider from "react-slick";

const myFont = localFont({ src: '../fonts/Druk-Wide-Bold.woff' })

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event: any) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  const [age, setAge] = React.useState("10");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const testimonial = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var logoSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-black py-[14px] relative">
        <button className={isActive ? "toggleMenu" : ""}></button>
        <Box className="container mx-auto">
          <Box className="flex items-center justify-between">
            <Box className="flex gap-4 items-center">
              <Box
                className="lg:hidden hamburger flex-col"
                onClick={handleClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </Box>
              <Box className="logo">
                <Link href="#">
                  <Image
                    src={logo}
                    alt="LOGO"
                    className="block mx-auto w-full"
                  />
                </Link>
              </Box>
            </Box>
            <nav className="nav hidden lg:block">
              <ul className="flex items-center text-white lg:gap-[44px] p-0">
                <MenuItem className="p-0">
                  <Link href="#">Home</Link>
                </MenuItem>
                <MenuItem className="p-0">
                  <Link href="#">Product</Link>
                </MenuItem>
                <MenuItem className="p-0">
                  <Link href="#">About us</Link>
                </MenuItem>
                <MenuItem className="p-0">
                  <Link href="#">Support</Link>
                </MenuItem>
                <MenuItem className="p-0">
                  <Link href="#">Contact</Link>
                </MenuItem>
              </ul>
            </nav>
            <Box className="country-dropdown">
              <FormControl
                sx={{ m: 0, minWidth: 70 }}
                size="small"
                className="text-white"
              >
                <Select
                  labelId="language"
                  id="language"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>
                    <Image src={english} alt="englisg" /> EN
                  </MenuItem>
                  <MenuItem value={es}>
                    <Image src={es} alt="englisg" /> ES
                  </MenuItem>
                  <MenuItem value={dt}>
                    <Image src={dt} alt="englisg" /> DT
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </header>
      <section className="banner bg-black md:pb-[60px] pb-12 xl:pt-0 pt-10">
        <Box className="container">
          <Box className="flex items-center lg:flex-nowrap flex-wrap">
            <Box className="lg:max-w-[440px] w-full lg:text-left text-center lg:pt-20">
              <Typography
                variant="h1"
                className="lg:text-[68px] text-[48px] leading-none font-bold text-white"
              >
                AI-powered detection of unwanted bots in web3
              </Typography>
              <Typography className="text-md leading-6 font-normal lg:pt-10 pt-6 text-white text-opacity-60">
                A trustworthy investment offer
              </Typography>
              <Link href="#" className="btn-style lg:mt-11 mt-8">
                Book a demo
              </Link>
              <Box className={myFont.className}>
                <Typography className="web3">web3</Typography>
              </Box>
            </Box>
            <Box className="w-full">
              <Image
                src={Pict}
                alt="Pict"
                className="block mx-auto w-full lg:translate-x-[30px] lg:translate-y-[-50px] xl:min-w-[110%]"
              />
            </Box>
          </Box>
        </Box>
      </section>

      <section className="tech-section bg-black lg:pb-[100px] pb-14">
        <div className="container">
          <Typography
            variant="h2"
            className="text-center max-w-[700px] mx-auto md:text-[40px] text-3xl md:leading-[48px] text-white tracking-[-0.04em] font-bold text-green-gradient"
          >
            <span className="no-gradient">Web 3 (on-chain) and web 2 (off- chain) analyzed our </span>
             Al technology
          </Typography>
          <Box className="rounded-3xl gradeint-border md:p-8 p-4 add-glow mt-[52px]">
            <Box className="technology-header lg:max-w-[936px] w-full flex items-center justify-between mb-8">
              <Link href="#" className="btn-style-2">
                All predictions
              </Link>
              <Link href="#" className="btn-style-2">
                Predicted
              </Link>
              <Link href="#" className="btn-style-2">
                Actual
              </Link>
            </Box>
            <Box className="flex items-center lg:flex-nowrap flex-wrap lg:gap-0 gap-5">
              <Box className="mt-0">
                <List aria-label="List" className="p-0">
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b… Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor error, molestias amet magnam quas quae eveniet similique reprehenderit tempora?" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                  <ListItemText primary="0x687fc49cd772a2b53afe090830ed6fc74c9b…" />
                </List>
              </Box>
              <Box className="max-w-full">
                <Image
                  src={AiTech}
                  alt="Ai"
                  className="w-full block mx-auto lg:translate-x-[-50px]"
                />
              </Box>
            </Box>
          </Box>
        </div>
      </section>

      <section className="bg-black lg:py-20 py-12">
        <div className="container">
          <Typography
            variant="h2"
            className="text-center max-w-[790px] mx-auto md:text-[40px] text-3xl leading-none text-white tracking-[-0.04em] font-bold"
          >
            Media
          </Typography>
          <Box className="wrapper-logo mt-8 text-white">
            <Slider {...logoSlider}>
              <Box>
                <Link href="#">
                  <Image src={sliderLogo1} alt="slider logo" />
                </Link>
              </Box>
              <Box>
                <Link href="#">
                  <Image src={sliderLogo2} alt="slider logo" />
                </Link>
              </Box>
              <Box>
                <Link href="#">
                  <Image src={sliderLogo3} alt="slider logo" />
                </Link>
              </Box>
              <Box>
                <Link href="#">
                  <Image src={sliderLogo4} alt="slider logo" />
                </Link>
              </Box>
              <Box>
                <Link href="#">
                  <Image src={sliderLogo3} alt="slider logo" />
                </Link>
              </Box>
            </Slider>
          </Box>
        </div>
      </section>

      <section className="bg-black lg:py-20 py-6 bgfaded relative overflow-hidden">
        <div className="container">
          <Typography
            variant="h2"
            className="text-center max-w-[420px] mx-auto md:text-[40px] text-3xl md:leading-[48px] text-white tracking-[-0.04em] font-bold text-green-gradient"
          >
            <span className="no-gradient"> Get bot score for your user via</span> our API 
          </Typography>
          <Typography className="text-base leading-6 font-normal text-white text-opacity-70 text-center mt-6">
            The complete web3 security service
          </Typography>
          <div className="flex mt-11 items-start lg:gap-[70px] gap-10 mx-auto lg:max-w-[90%] lg:flex-nowrap flex-wrap lg:text-left text-center">
            <div className="lg:w-[50%] w-full">
              <Image
                src={gem1}
                alt="Gem"
                className="block mx-auto w-100 w-[341px] -translate-x-[10%]"
              />
              <Typography
                variant="h5"
                className="text-white text-center md:text-[28px] text-xl left-7 font-semibold"
              >
                Community security system
              </Typography>
              <Typography className="mt-5 md:text-base text-sm text-white md:max-w-[375px] mx-auto font-normal text-opacity-70 text-center">
                Our bot provides a firewall for discord and telegram communities
                to grow safely
              </Typography>
            </div>
            <div className="lg:w-[50%] w-full">
              <Image
                src={gem2}
                alt="Gem"
                className="block mx-auto w-100 max-w-[341px] -translate-x-[10%]"
              />
              <Typography
                variant="h5"
                className="text-white text-center md:text-[28px] text-xl left-7 font-semibold"
              >
                Project certification & insurance
              </Typography>
              <Typography className="mt-5 md:text-base text-sm text-white md:max-w-[375px] mx-auto font-normal text-opacity-70 text-center">
                Build trust for your project with web3 security assurances that
                lead to more sales and users
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-slider bg-black lg:py-20 py-12 lg:pb-40 pb-20">
        <Box className="container max-w-[832px]">
          <Typography
            variant="h2"
            className="text-center  mx-auto md:text-[40px] text-3xl md:leading-[48px] text-white tracking-[-0.04em] font-bold"
          >
            Our <span className="text-green-gradient"> costumers <span className="no-gradient">and</span> partners </span>
          </Typography>
          <div className="wrapper">
            <Slider {...testimonial} className="lg:w-full w-[90%] mx-auto">
              <Box className="mt-8 rounded-3xl gradeint-border lg:p-12 p-6">
                <Box className="flex items-center justify-between flex-wrap gap-5">
                  <Box className="flex items-center gap-6">
                    <Image src={testimonial_avatar} alt="Picture" />
                    <Box>
                      <Typography className="text-base text-white font-semibold">
                        Maya Bezerra
                      </Typography>
                      <Typography className="text-sm text-white text-opacity-70 mt-2">
                        CEO / Co-founder
                      </Typography>
                    </Box>
                  </Box>
                  <Image src={discover} alt="Discover" />
                </Box>
                <Typography className="text-white md:text-base md:leading-7 text-sm text-opacity-70 mt-8">
                  The business plan meaningfully slows down the empirical method
                  of market research. The method of market research
                  simultaneously reverses the role life cycle of products.
                  Budget redistribution distorts sociometric press clipping. It
                  naturally follows that contextual advertising specifies
                  interpersonal press-clipping. Brand selection inductively
                  transforms a typical event format
                </Typography>
              </Box>
              <Box className="mt-8 rounded-3xl gradeint-border lg:p-12 p-6">
                <Box className="flex items-center justify-between flex-wrap gap-5">
                  <Box className="flex items-center gap-6">
                    <Image src={testimonial_avatar} alt="Picture" />
                    <Box>
                      <Typography className="text-base text-white font-semibold">
                        Maya Bezerra
                      </Typography>
                      <Typography className="text-sm text-white text-opacity-70 mt-2">
                        CEO / Co-founder
                      </Typography>
                    </Box>
                  </Box>
                  <Image src={discover} alt="Discover" />
                </Box>
                <Typography className="text-white md:text-base md:leading-7 text-sm text-opacity-70 mt-8">
                  The business plan meaningfully slows down the empirical method
                  of market research. The method of market research
                  simultaneously reverses the role life cycle of products.
                  Budget redistribution distorts sociometric press clipping. It
                  naturally follows that contextual advertising specifies
                  interpersonal press-clipping. Brand selection inductively
                  transforms a typical event format
                </Typography>
              </Box>
            </Slider>
          </div>
        </Box>
      </section>

      <section className="community lg:pb-[100px] pb-10">
        <Box className="container text-center">
          <Typography
            variant="h2"
            className="text-center max-w-[580px] mx-auto lg:text-[40px] md:text-[40px] text-3xl md:leading-snug md:leading-[48px] text-white tracking-[-0.04em] font-bold lg:pt-[160px] pt-10"
          >
            Equip yourself with Crediblocks and grow your community
          </Typography>

          <Link href="#" className="btn-style mt-[52px] mx-auto">
            Book a demo
          </Link>
        </Box>
      </section>

      <footer className="bg-black ">
        <Box className="container">
          <Box className="footer-border py-8">
            <Box className="flex items-center justify-between gap-5 flex-wrap">
              <Image src={fLogo} alt="Footer Logo" />
              <Box className="flex items-center gap-12 md:w-[40%]">
                <Link
                  href="#"
                  className="text-sm leading-6 font-medium text-white opacity-70 no-underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm leading-6 font-medium text-white opacity-70 no-underline"
                >
                  Terms of Use
                </Link>
              </Box>
              <Box className="flex items-center gap-5">
                <Link href="" className="no-underline">
                  <Image src={twitter} alt="Twitter" />
                </Link>
                <Link href="" className="no-underline">
                  <Image src={discord} alt="discord" />
                </Link>
                <Link href="" className="no-underline">
                  <Image src={rss} alt="rss" />
                </Link>
              </Box>
              <Typography className="text-sm leading-6 font-medium text-white opacity-70 lg:w-[40%]">
                © 2023 Crediblocks
              </Typography>
              <Box className="flex items-center gap-2">
                <Typography className="text-sm leading-6 font-normal text-[#FDFDFD]">
                  Made by roobinium.io
                </Typography>
                <Image src={roobinium} alt="roobinium" />
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>

      <Box className="header-line"></Box>
      <Box className="header-icons">
        <Link href="" className="no-underline">
          <Image src={twitter} alt="Twitter" />
        </Link>
        <Link href="" className="no-underline">
          <Image src={discord} alt="discord" />
        </Link>
        <Link href="" className="no-underline">
          <Image src={rss} alt="rss" />
        </Link>
      </Box>
    </main>
  );
}
