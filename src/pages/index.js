import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import "./index.css"

export default function Home() {
  return (
    <Layout>
      <main className="home-main">
        <div className="home-entry">
          <Hero />
        </div>

      </main>
    </Layout>
  )
}
