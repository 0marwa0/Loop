import { useState } from "react";
import "./index.css";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
// import twiterIcon from "../../assets/icons/twiter-icon.svg";
import twiterIcon from "../../assets/icons/icon-twitter.svg";
import youtypeIcon from "../../assets/icons/youtype-icon.svg";
import instgramIcon from "../../assets/icons/instgram-icon.svg";
function Footer() {
  return (
    <>
      <section id="footer">
        <div className="container-layout">
          <div className=" footer-layout">
            <div class="footer-icons">
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#555pxw188a)">
                    <path
                      d="M9.332 2.325h1.278V.099C10.39.069 9.63 0 8.748 0 6.905 0 5.643 1.16 5.643 3.29v1.96H3.609v2.489h2.034V14h2.493V7.74h1.951l.31-2.49H8.135V3.537c0-.72.194-1.211 1.197-1.211z"
                      fill="#CCC"
                    />
                  </g>
                  <defs>
                    <clipPath id="555pxw188a">
                      <path fill="#fff" d="M0 0h14v14H1z" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>

              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#vixiabekta)">
                    <path
                      d="M12.562 4.15A5.73 5.73 0 0 0 14 2.66c-.52.228-1.075.379-1.654.452a2.855 2.855 0 0 0 1.263-1.586 5.744 5.744 0 0 1-1.82.695 2.87 2.87 0 0 0-4.965 1.962c0 .228.02.446.067.655A8.126 8.126 0 0 1 .975 1.835a2.873 2.873 0 0 0 .882 3.836A2.837 2.837 0 0 1 .56 5.318v.031c0 1.395.995 2.553 2.3 2.82a2.854 2.854 0 0 1-.753.095c-.184 0-.37-.01-.543-.049a2.898 2.898 0 0 0 2.681 2 5.77 5.77 0 0 1-3.558 1.224c-.236 0-.461-.01-.687-.04a8.082 8.082 0 0 0 4.403 1.289c5.065 0 8.366-4.226 8.159-8.539z"
                      fill="#CCC"
                    />
                  </g>
                  <defs>
                    <clipPath id="vixiabekta">
                      <path fill="blue" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#tx66b3ofza)" fill="#CCC">
                    <path d="M7.002 3.405a3.592 3.592 0 1 0 0 7.184 3.592 3.592 0 0 0 0-7.184zm0 5.924a2.33 2.33 0 1 1-.001-4.662 2.33 2.33 0 0 1 .001 4.662z" />
                    <path d="M9.886.044c-1.288-.06-4.478-.057-5.767 0C2.986.097 1.987.371 1.18 1.176-.165 2.523.007 4.336.007 6.997c0 2.723-.152 4.495 1.174 5.821 1.352 1.351 3.192 1.175 5.821 1.175 2.698 0 3.629.001 4.582-.368 1.297-.503 2.276-1.662 2.372-3.744.06-1.289.057-4.479 0-5.768C13.84 1.656 12.52.165 9.886.044zm2.039 11.884c-.883.882-2.107.803-4.94.803-2.916 0-4.086.044-4.94-.812-.982-.978-.804-2.55-.804-4.931 0-3.223-.331-5.544 2.903-5.71.744-.026.962-.035 2.833-.035l.026.018c3.109 0 5.548-.326 5.694 2.908.034.738.041.96.041 2.828 0 2.883.054 4.06-.813 4.93z" />
                    <path d="M10.737 4.104a.84.84 0 1 0 0-1.68.84.84 0 0 0 0 1.68z" />
                  </g>
                  <defs>
                    <clipPath id="tx66b3ofza">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.36 3.393c-.153-.647-.603-1.156-1.174-1.329C11.15 1.75 7 1.75 7 1.75s-4.151 0-5.186.314C1.243 2.237.793 2.746.64 3.393.363 4.565.363 7.01.363 7.01s0 2.445.277 3.617c.153.647.603 1.135 1.174 1.308C2.849 12.25 7 12.25 7 12.25s4.15 0 5.186-.314c.571-.173 1.02-.661 1.174-1.308.277-1.172.277-3.617.277-3.617s0-2.446-.277-3.618zM5.642 9.23v-4.44l3.47 2.22-3.47 2.22z"
                    fill="#CCC"
                  />
                </svg>{" "}
              </a>
              <a href="#">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#pqcb4yeema)" fill="#CCC">
                    <path d="M13.996 14H14V8.864c0-2.512-.54-4.447-3.477-4.447-1.412 0-2.36.775-2.746 1.51h-.04V4.651H4.951V14h2.9V9.371c0-1.219.23-2.397 1.74-2.397 1.486 0 1.508 1.39 1.508 2.475V14h2.896zM.231 4.653h2.903V14H.23V4.653zM1.681 0C.753 0 0 .753 0 1.681s.753 1.697 1.681 1.697 1.681-.769 1.681-1.697S2.61 0 1.682 0z" />
                  </g>
                  <defs>
                    <clipPath id="pqcb4yeema">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </svg>{" "}
              </a>
            </div>
            <div className="text-center">
              <a href="#">© LOOP 2023</a>
            </div>
            <div className="terms-porlicy">
              <div className="text-center">
                <a href="#"> Terms Of Use</a>
              </div>
              <div className="text-center">
                <a href="#"> Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
