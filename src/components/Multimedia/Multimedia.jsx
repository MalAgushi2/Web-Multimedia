import React, { useEffect } from "react";
import { Graphics, Application, Assets, Sprite } from "pixi.js";

const Multimedia = () => {
  useEffect(() => {
    const initializePixi = async () => {
      const app = new Application();

      await app.init({ resizeTo: window });

      document.body.appendChild(app.view);

      const button = new Graphics()
        .roundRect(0, 0, 100, 100, 10)
        .fill(0xffffff, 0.5)
        .beginPath()
        .moveTo(36, 30)
        .lineTo(36, 70)
        .lineTo(70, 50)
        .closePath()
        .fill(0xffffff);

      button.x = (app.screen.width - button.width) / 2;
      button.y = (app.screen.height - button.height) / 2;

      button.interactive = true;
      button.cursor = "pointer";

      app.stage.addChild(button);

      const texture = await Assets.load(
        "/Për 23 vjetor Libraria Dukagjini ofron zbritje në blerje.mp4"
      );

      button.on("pointertap", () => {
        button.destroy();

        const videoSprite = new Sprite(texture);

        videoSprite.width = app.screen.width;
        videoSprite.height = app.screen.height;

        app.stage.addChild(videoSprite);
      });
    };

    initializePixi();

    return () => {
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div className="multimedia-container">
      {/* Your existing HTML content */}
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source
            src="/Për 23 vjetor Libraria Dukagjini ofron zbritje në blerje.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="button-container">
          <button className="custom-button">Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
