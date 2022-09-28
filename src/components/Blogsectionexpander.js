import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col} from 'react-bootstrap'

const { Configuration, OpenAIApi } = require("openai");

class Blogsectionexpander extends Component {
  constructor()
  {
    super()
    this.state = {
      heading: 'Blog Sections Expander are:',
      response: '..... await AI response'
    }

  }

  onFormSubmit = e =>{
    //Start by Preventing the default
    e.preventDefault()

    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.blogExpander)


    ////OPENAI///


        const configuration = new Configuration({
          apiKey: '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',
        });
          const openai1 = new OpenAIApi(configuration);
         openai1.createCompletion("text-davinci-002", {
          prompt: `Expand the blog section into a detailed professional, witty,  natural  and clever explanation: {} \n\n ${formDataObj.blogExpander}`,
          temperature: 0.7,
          max_tokens: 400,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((response) => {
          this.setState({
            heading:`AI Response of: ${formDataObj.blogExpander}`,
            response: `${response.data.choices[0].text}`
          })
        });



//    this.setState({
//      heading:`AI product Description Suggestion for:${formDataObj.productName }`,
//      response: `The Respnse from OpenAI will be shown here`
//    })
  }

  render() {
    return (
    <div>
      <Container>
        <br />
        <br />
        <h1>Blog Section Expander</h1>
        <br />
        <p>The blog writing tool will allow you to enter a blog topic and keywords --- and get in return a full blog that you can use
         anywhere. The tool intiially provides a list of topic ideas to choose from, once you select a topic, you can go ahead and
         generate a full content AI blog.</p>
        <br />
        <br />
      <Row>
        <Col>
            <Form onSubmit={this.onFormSubmit}>
            <div className=''>
                  <Form.Label>
                    <strong> Language</strong>
                  </Form.Label>
                  <select class="form-select" name='language' aria-label="Default select example">
                    <option selected="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Persian">Persian</option>
                    <option value="Filipino">Filipino</option>
                    <option value="Finnish">Finnish</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Herbrew">Herbrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Malay">Malay</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swedish">Swedish</option>
                    <option value="Thai">Thai</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Vietnamese">Vietnamese</option>
                  </select>

                  <br />

                  <Form.Label>
                    <strong> Tone</strong>
                  </Form.Label>
                  <select class="form-select" name='tone' aria-label="Default select example">
                    <option selected="Appreciative">Appreciative</option>
                    <option value="Assertive">Assertive</option>
                    <option value="Awestruck">Awestruck</option>
                    <option value="Candid">Candid</option>
                    <option value="Casual">Casual</option>
                    <option value="Cautionary">Cautionary</option>
                    <option value="Compassionate">Compassionate</option>
                    <option value="Convincing">Convincing</option>
                    <option value="Critical">Critical</option>
                    <option value="Earnest">Earnest</option>
                    <option value="Enthusiatic">Enthusiatic</option>
                    <option value="Formal">Formal</option>
                    <option value="Funny">Funny</option>
                    <option value="Humble">Humble</option>
                    <option value="Humorous">Humorous</option>
                    <option value="Informative">Informative</option>
                    <option value="Inspirational">Inspirational</option>
                    <option value="Joyful">Joyful</option>
                    <option value="Passionate">Passionate</option>
                    <option value="Thoughtful">Thoughtful</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Worried">Worried</option>
                  </select>
                  <br />

                </div>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        What topic do you want to get blog ideas on?
                      </Form.Label>
                      <Form.Control
                              type="text"
                              name="blogExpander"
                              placeholder="Enter Blog Sections"
                            style={{width: '50%'}}
                               />
                  </Form.Group>

                  <Button variant="primary" size="md" type="submit">
                      Genrate Blog
                  </Button>

            </Form>
            <br />
        </Col>
        <br />
        <br />

        <Col md="fix">
              <Card>
                  <Card.Body>
                      <Card.Title><h4> {this.state.heading} </h4></Card.Title>
                          <hr />
                          <br />
                      <Card.Text><h4> {this.state.response} </h4></Card.Text>
                  </Card.Body>
              </Card>
        </Col>
      </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
    )
  }
}
export default Blogsectionexpander
