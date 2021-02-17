import {useEffect, useState} from 'react'
import Prism from 'Prismjs'
import JSLogo from 'components/JSLogo'
import ReactLogo from 'components/ReactLogo'
import NodeJSLogo from 'components/NodeJSLogo'

Prism.manual = true
const backgroundDimensions = {width: 1584, height: 396}

export default function App() {
  // https://bit.ly/3pvg8td
  const [showMiddleLine, setShowMiddleLine] = useState(false)
  const [showOutline, setShowOutline] = useState(false)
  const containerStyles = {
    ...backgroundDimensions,
    outline: showOutline ? '2px solid lime' : 'none',
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">Create New App</h1>
        <div>By The Qodesmith</div>
      </header>

      <section className="flex-grow-1 pt24 code-bg white-80">
        {/* BACKGROUND CONTAINER */}
        <div className="relative mha code-bg" style={containerStyles}>
          {showMiddleLine && (
            <div className="absolute w-100 top-50 ba-1px lime" />
          )}

          {/* LOGO CONTAINER */}
          <div className="logo-container absolute top-50 right-0">
            <div className="df justify-center align-items-center w-80 mha overflow-h">
              <JSLogo
                size="150"
                className="radius12 overflow-h flex-shrink-0 flex-grow-0"
              />
              <ReactLogo size="250" />
              <NodeJSLogo size="180" />
            </div>
          </div>

          <div className="absolute top-0 z1 w-100">
            <pre className="dt">
              <code className="language-javascript">
                {[
                  'const i    = {}',
                  `i.am       = 'a front end developer'`,
                  `i.usedTo   = ['rap', 'produce beats', 'explore subway tunnels', 'drive 18-wheelers', 'be an MTA Track Worker']`,
                  `i.love     = ['God', 'family', 'JavaScript', 'Hip-Hop', 'urban exploration', 'snowboarding', 'meaningful challenges']`,
                  `i.workWith = ['node', 'react', 'scss', 'mongodb', 'open-minded people', 'my hands', "what I've got"]`,
                  `i.aspire   = 'to inspire others and change the world'`,
                ].join('\n')}
              </code>
            </pre>
          </div>
        </div>
        <div className="mt16 tc f-1-3em">
          {backgroundDimensions.width} &times; {backgroundDimensions.height}
        </div>
        <button
          className="dt mha mt16 f-1-3em"
          onClick={() => setShowMiddleLine(s => !s)}>
          Toggle Middle Line
        </button>
        <button
          className="dt mha mt16 f-1-3em"
          onClick={() => setShowOutline(s => !s)}>
          Toggle Outline
        </button>
      </section>
    </div>
  )
}
