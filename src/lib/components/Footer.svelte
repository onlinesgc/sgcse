<script lang="ts">
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte";

  let date = new Date();

</script>

<Footer class="mt-auto">
  <FooterCopyright href="/" by="Onlineföreningen SGC" year={date.getFullYear()} />
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="/">Om Oss</FooterLink>
    <FooterLink href="/Kontakt">Kontakt</FooterLink>
  </FooterLinkGroup>
</Footer>