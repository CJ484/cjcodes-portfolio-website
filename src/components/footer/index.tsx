import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Carlos Coreas. All rights reserved.</p>
    </footer>
  )
}