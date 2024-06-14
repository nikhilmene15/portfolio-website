import React, { useEffect } from 'react';
import "./App.css";

const SparkleAnimation = () => {
    const colour = "random";

  useEffect(() => {
    let x = 0;
    let y = 0;
    let ox = 400;
    let oy = 300;
    let sparkles = 100;
    let swide = 800;
    let shigh = 600;
    let sleft = 0;
    let sdown = 0;
    let tiny = [];
    let star = [];
    let starv = [];
    let starx = [];
    let stary = [];
    let tinyx = [];
    let tinyy = [];
    let tinyv = [];

    const colours = ['#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff'];
    const n = 10;

    const createDiv = (height, width) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height + "px";
      div.style.width = width + "px";
      div.style.overflow = "hidden";
      return div;
    };

    const newColour = () => {
      const c = new Array();
      c[0] = 255;
      c[1] = Math.floor(Math.random() * 256);
      c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
      c.sort(function () { return (0.5 - Math.random()); });
      return ("rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")");
    };

    const sparkle = () => {
      let c;
      if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) if (!starv[c]) {
          star[c].style.left = (starx[c] = x) + "px";
          star[c].style.top = (stary[c] = y + 1) + "px";
          star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
          star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
          star[c].style.visibility = "visible";
          starv[c] = 50;
          break;
        }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout(sparkle, 40);
    };

    const update_star = (i) => {
      if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;
        if (stary[i] < shigh + sdown) {
          star[i].style.top = stary[i] + "px";
          star[i].style.left = starx[i] + "px";
        }
        else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
          return;
        }
      }
      else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
      }
    };

    const update_tiny = (i) => {
      if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = tinyy[i] + "px";
          tiny[i].style.left = tinyx[i] + "px";
        }
        else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
          return;
        }
      }
      else tiny[i].style.visibility = "hidden";
    };

    const mouse = (e) => {
      if (e) {
        y = e.pageY;
        x = e.pageX;
      }
      else {
        set_scroll();
        y = e.y + sdown;
        x = e.x + sleft;
      }
    };

    const set_scroll = () => {
      if (typeof (window.pageYOffset) == 'number') {
        sdown = window.pageYOffset;
        sleft = window.pageXOffset;
      }
      else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
      }
      else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
      }
      else {
        sdown = 0;
        sleft = 0;
      }
    };

    const set_width = () => {
      let sw_min = 999999;
      let sh_min = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
      }
      if (typeof (window.innerWidth) == 'number' && window.innerWidth) {
        if (window.innerWidth > 0 && window.innerWidth < sw_min) sw_min = window.innerWidth;
        if (window.innerHeight > 0 && window.innerHeight < sh_min) sh_min = window.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
      }
      if (sw_min == 999999 || sh_min == 999999) {
        sw_min = 800;
        sh_min = 600;
      }
      swide = sw_min;
      shigh = sh_min;
    };

    const initialize = () => {
      if (document.getElementById) {
        let i, rats, rlef, rdow;
        for (i = 0; i < sparkles; i++) {
          rats = createDiv(3, 3);
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          document.body.appendChild(tiny[i] = rats);
          starv[i] = 0;
          tinyv[i] = 0;
          rats = createDiv(5, 5);
          rats.style.backgroundColor = "transparent";
          rats.style.visibility = "hidden";
          rats.style.zIndex = "999";
          rlef = createDiv(1, 5);
          rdow = createDiv(5, 1);
          rats.appendChild(rlef);
          rats.appendChild(rdow);
          rlef.style.top = "2px";
          rlef.style.left = "0px";
          rdow.style.top = "0px";
          rdow.style.left = "2px";
          document.body.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
      }
    };

    initialize();

    document.onmousemove = mouse;
    window.onscroll = set_scroll;
    window.onresize = set_width;

    return () => {
      document.onmousemove = null;
      window.onscroll = null;
      window.onresize = null;
    };
  }, []);

  return <div className="sparkle-container"></div>;
};

export default SparkleAnimation;
