import React from 'react'

import './App.css'
import { Layout, Form, Input, Button, List, Tag, Row, Col } from 'antd'
import TerfTerms, { TerfTermType } from '../model/TerfModel'
import { TextOccurrences } from '../util/TextOccurrences'
import { Scrape } from '../util/Scrape'

const { Header, Footer, Content } = Layout

interface State {
  terfText: string
  terfResults: TerfTermType[]
}

export default class App extends React.Component {
  state: State = {
    terfText: '',
    terfResults: []
  }

  checkEvent = (terfText: string) => {
    this.setState({ terfText })
    this.checkText(terfText)
  }

  cleanText = (text: string) =>
    text
      .toLowerCase()
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/[^\w\s]/gi, '')

  checkText = (text: string) => {
    const TeftTextClean = this.cleanText(text)
    const terfResults: TerfTermType[] = []
    TerfTerms.forEach(value => {
      const { term, exact } = value
      const CleanTerm = this.cleanText(term)
      let Occurrences = 0
      if (exact) {
        Occurrences = TextOccurrences(text, `${term} `)
      } else {
        Occurrences = TextOccurrences(TeftTextClean, CleanTerm)
      }
      value.count = Occurrences
      if (Occurrences !== 0) {
        terfResults.push(value)
      }
    })
    this.setState({ terfResults })
  }

  runCheck = () => {
    this.checkText(this.state.terfText)
  }

  getUrl = (url: string) => {
    Scrape(url)
  }

  render() {
    const { terfText, terfResults } = this.state

    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <span className="title">TERF Lint</span>
        </Header>
        <Content style={{ paddingTop: 64 }}>
          <Row type="flex" style={{ height: 'calc(100vh - 64px)' }}>
            <Col sm={16}>
              <div style={{ margin: '0 50px' }}>
                <Form>
                  <Form.Item label="Load from url">
                    <Input
                      type="url"
                      onChange={e => this.getUrl(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Insert copy here">
                    <Input.TextArea
                      className="TextArea"
                      value={terfText}
                      onChange={e => this.checkEvent(e.target.value)}
                      placeholder="Input text"
                      rows={16}
                    />
                  </Form.Item>
                  <Button type="primary" block onClick={() => this.runCheck()}>
                    Lint
                  </Button>
                </Form>
              </div>
            </Col>
            <Col sm={8}>
              <h3 style={{ marginTop: 10 }}>Results ({terfResults.length})</h3>
              {terfResults.length > 0 && (
                <List
                  size="small"
                  bordered
                  dataSource={terfResults}
                  renderItem={item => (
                    <List.Item>
                      {item.term} <Tag>{item.count}</Tag>
                    </List.Item>
                  )}
                />
              )}
            </Col>
          </Row>
        </Content>
        <Footer>Made by CNB</Footer>
      </Layout>
    )
  }
}
