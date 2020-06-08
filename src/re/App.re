[@react.component]
let make =
    (
      ~onExport,
      ~onChange,
      ~randomize,
      ~styles: Types.styles,
      ~config: Types.config,
    ) => {
  let settings: array(Types.setting) = [|
    {
      id: `Skin,
      label: "SKIN",
      colors: config.skinColors,
      styles: config.skinStyles,
      selectedColor: styles.skinColor,
      selectedStyle: styles.skin,
    },
    {
      id: `Hair,
      label: "HAIR",
      colors: config.hairColors,
      styles: config.hairStyles,
      selectedColor: styles.hairColor,
      selectedStyle: styles.hair,
    },
    {
      id: `FacialHair,
      label: "FACIAL HAIR",
      colors: config.facialHairColors,
      styles: config.facialHairStyles,
      selectedColor: styles.facialHairColor,
      selectedStyle: styles.facialHair,
    },
    {
      id: `Body,
      label: "BODY",
      colors: config.bodyColors,
      styles: config.bodyStyles,
      selectedColor: styles.bodyColor,
      selectedStyle: styles.body,
    },
    {
      id: `Eyes,
      label: "EYES",
      colors: config.disabledColors,
      styles: config.eyeStyles,
      selectedColor: "000000",
      selectedStyle: styles.eyes,
    },
    {
      id: `Mouth,
      label: "MOUTH",
      colors: config.disabledColors,
      styles: config.mouthStyles,
      selectedColor: "000000",
      selectedStyle: styles.mouth,
    },
    {
      id: `Nose,
      label: "NOSE",
      colors: config.disabledColors,
      styles: config.noseStyles,
      selectedColor: styles.skinColor,
      selectedStyle: styles.nose,
    },
    {
      id: `Background,
      label: "BACKGROUND",
      colors: config.bgColors,
      styles: config.bgStyles,
      selectedColor: styles.bgColor,
      selectedStyle: "Background",
    },
  |];
  <>
    <div className="body-bg-left" />
    <div className="body-bg-right" />
    <header className="Layout-header">
      <div className="Layout-left">
        <h1 className="Text-title"> {React.string("AvatarGifs")} </h1>
        <span className="Text-subtitle">
          {React.string("Avatar Generator")}
        </span>
      </div>
      <div className="Layout-right">
        <h2 className="Text-description">
          {React.string("A free avatar generator.")}
        </h2>
      </div>
    </header>
    <main className="Layout-main">
      <AvatarGenerator onChange onExport randomize settings />
    </main>
  </>;
};
