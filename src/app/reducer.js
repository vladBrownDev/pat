import MainSection from "../comps/MainSection"
import ProductPage from "../comps/ProductPage"
import HighDestinyOne from "../comps/products/HighDestinyOne"
import HighDestinyTwo from "../comps/products/HighDestinyTwo"
import GPUserv from "../comps/products/GPUserv"
import KunLun from "../comps/products/KunLun"
import Soft from "../comps/products/Soft"
import Maintanance from "../comps/technical/Maintanance"
import Specs from "../comps/technical/Specs"
import About from "../comps/About"
import Partner from "../comps/Partner"
import Hpc from "../comps/Hpc"
import Owners1 from "../comps/Owners1"
import Owners2 from "../comps/Owners2"
import Contact from "../comps/Contact"

import { animateScroll as scroll } from "react-scroll/modules"

import info from "./info"

function reducer (state = <MainSection/> , action) {
  function scrolling() {
    scroll.scrollToTop({
      duration: 700,
    })
  }
  switch (action.type) {
    case "main":
      scrolling()
      return <MainSection/>
    case "zero": 
    scrolling()
      return  <ProductPage info={info.zero}/>
    case "fst":
      scrolling()
      return <ProductPage info={info.first}/>
    case "sec":
      scrolling()
      return <ProductPage info={info.second}/>
    case "third":
      scrolling()
      return <ProductPage info={info.third}/>
    case "fourth":
      scrolling()
      return <ProductPage info={info.fourth}/>
    case "fifth":
      scrolling()
        return <HighDestinyOne info={info.fifth}/>
    case "sixth":
      scrolling()
        return <HighDestinyTwo info={info.sixth}/>
    case "seventh":
      scrolling()
        return <HighDestinyTwo info={info.seventh}/>
    case "eight":
      scrolling()
        return <GPUserv info={info.eight} />
    case "ninth":
      scrolling()
        return <KunLun info={info.ninth}/>
    case "tenth":
      scrolling()
          return <Soft info={info.tenth} slide={1}/>
    case "eleventh":
      scrolling()
        return <Soft info={info.eleventh} slide={2}/>
    case "twelvth":
      scrolling()
        return <Soft info={info.twelvth} slide={3}/>
    case "thirteenth":
      scrolling()
          return <Soft info={info.thirteenth} slide={4}/>
    case "maint":
      scrolling()
          return <Maintanance/>
    case "about":
      scrolling()
          return <About/>
    case "specs":
      scrolling()
          return <Specs/>
    case "partner":
      scrolling()
          return <Partner/>
    case "hpc":
      scrolling()
        return <Hpc/>
    case "own1":
      scrolling()
        return <Owners1/>
    case "own2":
      scrolling()
        return <Owners2/>
    case "contact":
      scrolling()
        return <Contact/>
    default:
      return state
  }
}

export default reducer
