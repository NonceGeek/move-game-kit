<template>
  <div class="flex flex-col w-content mx-auto pt-9">
    <div class="header h-16 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <h1 class="text-4xl font-bold">Move Game Kit</h1>
      </div>
      <div class="links flex items-center space-x-5 text-black-1 dark:text-white font-['Poppins'] text-[17px]">
        <!--<a v-for="link in links" :key="link" class="group relative h-7 flex items-center cursor-pointer">
          <span>{{ link }}</span>
        </a>-->
        <div class="flex justify-center ml-2" @click="toggleColorMode">
          <input type="checkbox" name="light-switch" class="light-switch sr-only" />
          <label
            class="relative h-[30px] p-[3px] bg-[#F0F2F5] dark:bg-[#2C2C2C] rounded-full after:content-[''] after:transition-transform after:duration-500 after:absolute after:dark:translate-x-full after:w-6 after:h-6 after:p-[6px] after:rounded-full after:bg-gradient-to-r after:from-[#439DFF] after:to-[#6052FF] flex items-center cursor-pointer select-none"
            for="light-switch">
            <img class="m-[6px] z-20 w-3 h-3" src="~/assets/svg/light-mode.svg" alt="light-mode">
            <img class="m-[6px] z-20 w-3 h-3" src="~/assets/svg/dark-mode.svg" alt="dark-mode">
            <span class="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </div>
    </div>
    <div class="slogon mt-12 flex justify-between items-center">
      <div class="flex flex-col space-y-12">
        <div class="texts flex flex-col space-y-6">
          <div class="titles flex flex-col space-y-9">
            <div class="flex flex-col space-y-4 text-black-1 dark:text-white">
              <h1 class="text-6xl font-bold">Move Game Kit</h1>
              <!--<span class="w-[450px] text-[50px] leading-none font-['Poppins'] font-medium tracking-[0.6px]"><b>Move Game
                Kit</b></span>-->
              <span class="w-[600px] text-[20px] leading-tight font-['Poppins']">Game Kit for Move-based Chains.</span>
              <span class="w-[600px] text-[20px] leading-tight font-['Poppins']">We believe that FOCG needs tools🧰, NOT
                just a framework.</span>
            </div>
          </div>
          <div class="flex items-center space-x-2 text-third-gray dark:text-gray-4 text-[20px]">
            <span class="leading-8">
              Powered by <a href="https://x.com/intent/follow?screen_name=0xleeduckgo" target="_blank" rel="noopener noreferrer"
                class="text-blue-500 underline">0xleeduckgo</a>
            </span>
            &nbsp;and other NonceGeekDAO members
            <img class="w-8 h-8" src="/img/logo-ng.jpg" alt="noncegeek">
          </div>
        </div>
        <div class="buttons flex items-center space-x-8">
          <template v-for="button in buttons" :key="button.text">
            <TheButton :text="button.text" :uppercase="true" :high="true" :colored-border="button.coloredBorder"
              :change-text="true" :href="button.href" />
          </template>
        </div>
      </div>
      <img class="w-[400px]" :src="currentMushroomSrc" alt="mushroom" @mouseenter="startMushroomAnimation"
        @mouseleave="stopMushroomAnimation">
    </div>
    <div class="mt-40 mx-auto w-[1160px] flex flex-col items-center space-y-[142px]">

      <!-- A Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              A decentralized craft impl in move, all the elements are NFTs, it could be use in the diff games.

            </div>
          </div>
          <TheButton text="Launch App - TESTNET" :colored-border="true" href="https://test.craft.rootmud.xyz" />
          <TheButton text="Launch App - MAINNET" :colored-border="true" href="https://craft.rootmud.xyz" />
          <TheButton text="Demo Video" :colored-border="true" href="https://youtu.be/Iw-ER5XmCPI" target="_blank" />
        </div>

        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold flex items-center">
          <span>MOVECRAFT</span>
          <img class="w-8 h-8 ml-2" src="/img/craft.webp" alt="movecraft">
        </div>

      </div>
      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>
      <!-- A Block End -->

      <!-- B Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold flex items-center">
          <span>MOVE MAP</span>
          <img class="w-8 h-8 ml-2" src="/img/move-map.png" alt="move-map">
        </div>
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              To make the game map as the NFT, it could be play in the roguelike game example.
            </div>
          </div>

          <TheButton text="Launch App" :colored-border="true" href="https://dm.rootmud.xyz/#/map-editor" />
        </div>
      </div>
      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>
      <!-- B Block End -->

      <!-- A Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              Be a Dungeon Master, a game based on MoveCraft & MoveMap, create your own on-chain dungeon & meet the
              adventurers!
            </div>
          </div>

          <TheButton text="Launch App" :colored-border="true" href="https://dm.rootmud.xyz" />
        </div>

        <div class="title text-black-2 dark:text-white text-[30px] font-['Poppins'] font-semibold flex items-center">
          <span>Be A Dungeon Master 👾</span>

        </div>

      </div>
      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>
      <!-- A Block End -->

      <!-- A Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold flex items-center">
          <span>Sacffold Move 🏗</span>

        </div>
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              Scaffold & Scaffold Examples for dev to buidl Move Games.
            </div>
          </div>

          <TheButton text="Scaffold" :colored-border="true" href="https://github.com/noncegeek/scaffold-aptos" />
          <TheButton text="Scaffold Examples" :colored-border="true"
            href="https://github.com/rootmud/scaffold-aptos-examples" />
        </div>



      </div>
      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>
      <!-- A Block End -->

      <!-- A Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">
        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              Loot NFT-based Move Game, implementing the D&D world on-chain 🎲 🦎 ⚔️ 👸🏻!
            </div>
          </div>

          <TheButton text="Developing..." :colored-border="true" href="/" />

        </div>

        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold flex items-center">
          <span>Move Loot 🎲</span>

        </div>

      </div>

      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>
      <!-- A Block End -->

      <!-- B Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">


        <div class="title text-black-2 dark:text-white text-[30px] font-['Poppins'] font-semibold flex items-center">
          <span>Move-based zkWASM 📦</span>
        </div>

        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              Generate proofs for the games, verify them on-chain.
            </div>
          </div>

          <TheButton text="Developing..." :colored-border="true" href="/" />
        </div>

      </div>
      <!-- B Block End -->

      <div class="w-[575px] p-2.5">
        <LinearLine />
      </div>

      <!-- B Block Begin -->
      <div class="w-full flex justify-start items-center space-x-60">

        <div class="w-[555px] flex flex-col space-y-6 items-start">
          <div class="w-full flex flex-col space-y-2 text-[20px] text-second-gray dark:text-white font-['Poppins']">
            <div class="flex items-center">
              On-chain profile for Users.
            </div>
          </div>

          <TheButton text="Launch App" :colored-border="true" href="https://did.rootmud.xyz" />
        </div>

        <div class="title text-black-2 dark:text-white text-[40px] font-['Poppins'] font-semibold flex items-center">
          <span>MOVE DID 🪪</span>
        </div>

      </div>
      <!-- B Block End -->

    </div>




    <!-- Footer -->
    <div class="footer mt-60 pb-24 flex flex-col space-y-3">
      <LinearLine />
      <div class="flex justify-between items-center text-third-gray dark:text-white font-['Montserrat']">
        <span v-for="text in footerTexts" :key="text">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  'Twitter',
]
const buttons = [
  {
    text: 'Github',
    coloredBorder: false,
    href: 'https://github.com/noncegeek/move-game-kit',
  },
  {
    text: 'Whitepaper-EN',
    coloredBorder: false,
    href: 'https://bodhi.wtf/space/5/15427',
  },
  {
    text: 'Whitepaper-CN',
    coloredBorder: false,
    href: 'https://bodhi.wtf/space/5/15426',
  },
  {
    text: 'Full Video',
    coloredBorder: false,
    href: 'https://youtu.be/X-w9JHscCPk',
  },
]
const footerTexts = [
  '𑖌𑖼Copyright © 2024 NonceGeekDAO & rootMUD DAO. All rights reserved.𑖌𑖼',
  'Terms of Use & Privacy Policy',
]

const colorMode = useColorMode('dark');
const toggleColorMode = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const mushroomTypes = ['red', 'yellow', 'blue', 'green'];
let currentIndex = 0;
let intervalId = null;

const currentMushroomSrc = ref(`/img/mushroom-${mushroomTypes[currentIndex]}.png`);

const changeMushroomColor = () => {
  currentIndex = (currentIndex + 1) % mushroomTypes.length;
  currentMushroomSrc.value = `/img/mushroom-${mushroomTypes[currentIndex]}.png`;
};

const startMushroomAnimation = () => {
  if (!intervalId) {
    intervalId = setInterval(changeMushroomColor, 500);
  }
};

const stopMushroomAnimation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
</script>

<style scoped></style>
