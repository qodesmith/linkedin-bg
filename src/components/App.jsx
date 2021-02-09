import {useEffect} from 'react'
import Prism from 'Prismjs'
import JSLogo from 'components/JSLogo'
import ReactLogo from 'components/ReactLogo'
import NodeJSLogo from 'components/NodeJSLogo'

Prism.manual = true

export default function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">Create New App</h1>
        <div>By The Qodesmith</div>
      </header>

      <section className="flex-grow-1 pt24 prism-tomorrow-bg">
        <div className="relative">
          <div className="dt mha o-15">
            <div className="df justify-center align-items-center w-80 mha">
              <JSLogo
                size="150"
                className="radius12 overflow-h flex-shrink-0 flex-grow-0"
              />
              <ReactLogo size="250" />
              <NodeJSLogo size="180" />
            </div>
          </div>

          <pre className="dead-center z1">
            <code className="language-javascript">
              {[
                'const i    = {}',
                `i.am       = 'a front end developer'`,
                `i.usedTo   = ['rap', 'produce beats', 'explore subway tunnels', 'drive 18-wheelers', 'be an MTA Track Worker']`,
                `i.love     = ['God', 'family', 'JavaScript', 'Hip-Hop', 'urban exploration', 'snowboarding', 'meaningful challenges']`,
                `i.workWith = ['node', 'react', 'scss', 'mongodb', 'open-minded people', 'my hands']`,
                `i.aspire   = 'to inspire others and change the world'`,
              ].join('\n')}
            </code>
          </pre>
        </div>
      </section>
    </div>
  )
}
