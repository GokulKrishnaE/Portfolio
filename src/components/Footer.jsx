import React from 'react'

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <footer>
            <div class="container">
                <div class="footerInner">
                    <p>&copy; Gokul Krishna E</p>
                    <button class="scrollTop" onClick={scrollToTop} aria-label="scroll to top">
                        <i class="fas fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        </footer>

        <div class="fixedIcons">
            <div class="item">
                <a href="tel:9497243998">
                    <i class="fas fa-phone"></i>
                    <span class="sr-only">call me</span>
                </a>
            </div>
            <div class="item">
                <a href="mailto:gokul44krishna@gmail.com">
                    <i class="fas fa-envelope"></i>
                    <span class="sr-only">mail me</span>
                </a>
            </div>
        </div>
    </>
  )
}
