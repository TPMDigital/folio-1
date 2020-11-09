<template>
  <div
    class="hero-image h-screen font-sans w-full m-0 bg-no-repeat bg-center bg-cover relative overflow-y-auto"
  >
    <header class="border-b-2 border-gray-600">
      <!-- REGULAR NAV -->
      <div class="container mx-auto">
        <nav
          class="nav-top-anim animate__animated animate__fadeInDown flex items-center justify-between px-2 py-2"
        >
          <div>
            <a
              href="#"
              class="text-white text-xl md:text-2xl font-semibold tracking-wide hover:text-blue-200 menu-item-tsn"
              ><span class="font-bold">RESPONSIVE&nbsp;</span
              ><span class="text-gray-500">WEBSITES</span></a
            >
          </div>
          <div class="hidden lg:flex sm:items-center">
            <a
              href="#"
              class="text-white text-xl md:text-2xl font-semibold hover:text-blue-300 menu-item-tsn ml-5 md:ml-10 uppercase"
              >HOME</a
            >
            <a
              href="#"
              class="text-white text-xl md:text-2xl font-semibold hover:text-blue-300 menu-item-tsn ml-5 md:ml-10 uppercase"
              >COLLECTIONS</a
            >
            <a
              href="#"
              class="text-white text-xl md:text-2xl font-semibold hover:text-blue-300 menu-item-tsn ml-5 md:ml-10 uppercase"
              >NEW</a
            >
            <a
              href="#"
              class="text-white text-xl md:text-2xl font-semibold hover:text-blue-300 menu-item-tsn ml-5 md:uppercase"
              >ABOUT US</a
            >
            <a
              href="#"
              class="text-white text-2xl font-semibold hover:text-blue-300 menu-item-tsn ml-10 uppercase"
              >CONTACT</a
            >
          </div>

          <button
            class="lg:hidden cursor-pointer"
            @click="showMenu = !showMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
              />
            </svg>
          </button>
        </nav>
      </div>

      <!-- NAV MOBILE -->
      <nav
        v-if="showMenu"
        class="container mx-auto block lg:hidden bg-transparent py-2 px-2"
      >
        <div class="flex flex-col">
          <a
            href="#"
            class="text-white text-sm font-semibold hover:text-blue-300 mb-1 menu-item-tsn uppercase"
            >HOME</a
          >
          <a
            href="#"
            class="text-white text-sm font-semibold hover:text-blue-300 mb-1 menu-item-tsn uppercase"
            >COLLECTIONS</a
          >
          <a
            href="#"
            class="text-white text-sm font-semibold hover:text-blue-300 mb-1 menu-item-tsn uppercase"
            >NEW</a
          >
          <a
            href="#"
            class="text-white text-sm font-semibold hover:text-blue-300 mb-1 menu-item-tsn uppercase"
            >ABOUT US</a
          >
          <a
            href="#"
            class="text-white text-sm font-semibold hover:text-blue-300 mb-1 menu-item-tsn uppercase"
            >CONTACT</a
          >
        </div>
      </nav>
    </header>

    <section class="container mx-auto relative px-2 xl:px-0">
      <!-- HERO TEXT -->
      <div class="mt-2 hero-anim animate__animated animate__fadeInLeft">
        <div
          class="text-5xl lg:text-7xl text-white tracking-wide font-bold pt-0 xl:pt-20 pointer-events-none"
        >
          <p>RESPONSIVE</p>
          <p class="leading-8">WEB</p>
          <p>DESIGN</p>
        </div>
        <div
          class="text-gray-300 text-xl lg:text-3xl font-semibold pointer-events-none leading-9"
        >
          <p>EXPLORE OUR NEW MINIMAL</p>
          <p>THEMES COLLECTION</p>
        </div>
        <button
          class="cta-button bg-blue-800 leading-10 px-4 py-2 mt-6 rounded-lg"
        >
          <span class="py-2 font-bold text-3xl text-white tracking-wide"
            >Explore</span
          >
        </button>
      </div>
      <!-- -->

      <!-- BOTTOM CARDS -->
      <div
        class="icons block sm:flex justify-between pt-16 pointer-events-none mt-4"
      >
        <div
          class="card flex w-full sm:w-1/3 pr-6 mobile-anim animate__animated animate__fadeInUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="px-1 w-32 h-32 text-white"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"
            />
          </svg>
          <div class="border-t-4 w-full mt-6 ml-3">
            <span
              class="text-white inline-block text-lg tracking-wide leading-6 mt-2"
            >
              MOBILE AND TABLET OPTIMISED WITH A FLUID DESIGN
            </span>
          </div>
        </div>

        <div
          class="card flex w-full sm:w-1/3 pr-6 globe-anim animate__animated animate__fadeInUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="px-1 w-32 h-32 text-white"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M15 2c-8.284 0-15 6.716-15 15s6.716 15 15 15c8.284 0 15-6.716 15-15s-6.716-15-15-15zM23.487 22c0.268-1.264 0.437-2.606 0.492-4h3.983c-0.104 1.381-0.426 2.722-0.959 4h-3.516zM6.513 12c-0.268 1.264-0.437 2.606-0.492 4h-3.983c0.104-1.381 0.426-2.722 0.959-4h3.516zM21.439 12c0.3 1.28 0.481 2.62 0.54 4h-5.979v-4h5.439zM16 10v-5.854c0.456 0.133 0.908 0.355 1.351 0.668 0.831 0.586 1.625 1.488 2.298 2.609 0.465 0.775 0.867 1.638 1.203 2.578h-4.852zM10.351 7.422c0.673-1.121 1.467-2.023 2.298-2.609 0.443-0.313 0.895-0.535 1.351-0.668v5.854h-4.852c0.336-0.94 0.738-1.803 1.203-2.578zM14 12v4h-5.979c0.059-1.38 0.24-2.72 0.54-4h5.439zM2.997 22c-0.533-1.278-0.854-2.619-0.959-4h3.983c0.055 1.394 0.224 2.736 0.492 4h-3.516zM8.021 18h5.979v4h-5.439c-0.3-1.28-0.481-2.62-0.54-4zM14 24v5.854c-0.456-0.133-0.908-0.355-1.351-0.668-0.831-0.586-1.625-1.488-2.298-2.609-0.465-0.775-0.867-1.638-1.203-2.578h4.852zM19.649 26.578c-0.673 1.121-1.467 2.023-2.298 2.609-0.443 0.312-0.895 0.535-1.351 0.668v-5.854h4.852c-0.336 0.94-0.738 1.802-1.203 2.578zM16 22v-4h5.979c-0.059 1.38-0.24 2.72-0.54 4h-5.439zM23.98 16c-0.055-1.394-0.224-2.736-0.492-4h3.516c0.533 1.278 0.855 2.619 0.959 4h-3.983zM25.958 10h-2.997c-0.582-1.836-1.387-3.447-2.354-4.732 1.329 0.636 2.533 1.488 3.585 2.54 0.671 0.671 1.261 1.404 1.766 2.192zM5.808 7.808c1.052-1.052 2.256-1.904 3.585-2.54-0.967 1.285-1.771 2.896-2.354 4.732h-2.997c0.504-0.788 1.094-1.521 1.766-2.192zM4.042 24h2.997c0.583 1.836 1.387 3.447 2.354 4.732-1.329-0.636-2.533-1.488-3.585-2.54-0.671-0.671-1.261-1.404-1.766-2.192zM24.192 26.192c-1.052 1.052-2.256 1.904-3.585 2.54 0.967-1.285 1.771-2.896 2.354-4.732h2.997c-0.504 0.788-1.094 1.521-1.766 2.192z"
            />
          </svg>
          <div class="border-t-4 w-full mt-6 ml-3">
            <span
              class="text-white inline-block text-lg tracking-wide leading-6 mt-2"
            >
              BEST SEO PLUGINS AND VERY EASY TO USE
            </span>
          </div>
        </div>

        <div
          class="card flex w-full sm:w-1/3 pr-6 home-anim animate__animated animate__fadeInUp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="px-1 w-32 h-32 text-white"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"
            />
          </svg>
          <div class="border-t-4 w-full mt-6 ml-3">
            <span
              class="text-white inline-block text-lg tracking-wide leading-6 mt-2"
            >
              MORE THAN 10 LANDING PAGES IN EVERY THEME
            </span>
          </div>
        </div>
      </div>
      <!-- -->
    </section>
  </div>
  <footer class="absolute bottom-0 w-full text-center text-gray-600 text-sm">
    <span class="animate__animated attrib pt-1 leading-9 inline-block"
      >Photo by
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://unsplash.com/@henriquesetim?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >henrique setim</a
      >
      on
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >Unsplash</a
      ></span
    >
  </footer>

  <!-- REST OF WEBSITE HERE !! -->
</template>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.45)),
    url("../assets/mountains.jpg");
}

/* button styles non tailwind */
.cta-button {
  transition: all 0.35s;
  border: 2px solid rgba(255, 250, 250, 0.5);
  opacity: 0.76;
}
.cta-button:hover {
  opacity: 1;
  border: 2px solid rgba(255, 250, 250, 0.75);
}

/* required attribution style */
.attrib {
  cursor: pointer;
  transition: opacity 1s;
  opacity: 0.5;
}
.attrib:hover {
  opacity: 1;
}

/* animations */
.menu-item-tsn {
  transition: color 0.35s;
}

.nav-top-anim {
  /* animation: fadeInDown; */
  --animate-delay: 2s;
  --animate-duration: 1s;
}

.hero-anim {
  /* animation: fadeInLeft; */
  --animate-delay: 2s;
  --animate-duration: 1s;
}

.mobile-anim {
  /* animation: fadeInUp; */
  --animate-delay: 2s;
  --animate-duration: 1s;
}

.globe-anim {
  /* animation: fadeInUp; */
  --animate-delay: 2s;
  --animate-duration: 1.5s;
}

.home-anim {
  /* animation: fadeInUp; */
  --animate-delay: 2s;
  --animate-duration: 2s;
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
