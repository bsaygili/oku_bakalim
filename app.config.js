const IS_DEV = process.env.APP_VARIANT === "development";

export default {
  expo: {
    name: IS_DEV ? "OkuBakalım (Dev)" : "Oku Bakalım: Kelime Üretici",
    slug: "okubakalim",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "okubakalimapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "okubakalim.dev" : "okubakalim",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#000014",
      },
      package: IS_DEV
        ? "com.bahadir_dev.okubakalim.dev"
        : "com.bahadir_dev.okubakalim",
      googleServicesFile: "./google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-font",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash.png",
          imageWidth: 200,
          resizeMode: "cover",
          backgroundColor: "#000014",
        },
      ],
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
    },
    owner: "bahadir_dev",
    extra: {
      eas: {
        projectId: "b788169e-bdc8-44b0-abfa-39bf02f2dffd",
      },
    },
  },
};
