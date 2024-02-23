import "./style.css";

// main.js or another relevant JS file
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
dom.watch();
