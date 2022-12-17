import styles from './styles.module.css';
import React, {useEffect} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import mainStyles from '@site/src/pages/index.module.css';

let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container_src-components-HomepageHeader-styles-module");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("B475E12A96D145F2B81341DCB704FEDE");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
    loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
    var lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib._20220701LINKALLWEBV2PRODUCTANIMATIONV11();
    exportRoot.addEventListener("tick", AdobeAn.handleFilterCache);
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container],stage);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

export default function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    /*useEffect(() => {
        init();

    }, []);*/
    window.addEventListener('load', function () {
        // do something here ...
        init();
    }, false);

    return (
        <div className={mainStyles.container}>
            <div className={styles.homeIntro}>
                <div className={styles.homeIntroWrapper}>
                    <div className={styles.content}>
                        <img src="/img/logos/logo-vanus.svg" alt="logo-vanus"></img>
                        <h2>{siteConfig.title}</h2>
                        <p>Vanus provides an innovative platform for collecting, storing, distributing, and processing events at scale.</p>
                    </div>
                    <div className={styles.image}>
                        <div id={"animation_container_src-components-HomepageHeader-styles-module"} style={{backgroundColor:"rgba(255, 255, 255, 1.00)"}}>
                            <canvas id="canvas" style={{display: "block", backgroundColor: "rgba(255, 255, 255, 1.00)"}}></canvas>
                            <div id="dom_overlay_container"
                                 style={{pointerEvents:"none", overflow:"hidden", position: "absolute", left: "0px", top: "0px", display: "block"}}>
                            </div>
                        </div>
                        {/*<img src="/img/logos/vanus-static.png" alt="vanus-static"></img>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}