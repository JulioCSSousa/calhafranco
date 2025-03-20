"use client"

export default function MenuButton() {
  return (
    <button
      className="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=>alert('oi')}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}