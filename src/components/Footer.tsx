import { siteConfig } from "@/utils/site"

export function SiteFooter() {
  return (
    <footer>
      <div className="container flex items-center justify-center md:h-24 md:flex-row">
        <p className=" text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline"
          >
            Sarthak Kapila with ❤️
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
