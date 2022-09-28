import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Editor } from '@tinymce/tinymce-react';

const { Configuration, OpenAIApi } = require("openai");

class ProfileBio extends Component {
  constructor() {
    super()
    this.state = {
      heading: 'AI Response of:',
      response: 'AI Generated Results Here...'
    }

  }

  onFormSubmit = e => {
    //Start by Preventing the default
    e.preventDefault()

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.productName)


    ////OPENAI///


    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-davinci-002", {
      prompt: `translate this in ${formDataObj.language}. Create ${formDataObj.tone} bio for ${formDataObj.productName}`,
      temperature: 0.8,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      .then((response) => {
        this.setState({
          heading: `AI Response of: ${formDataObj.productName}`,
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
      <div style={{ backgroundColor: '#fafafa' }}>
        <Container>
          <br />
          <br />
          <h1>Profile Bio</h1>
          <br />

          <div className='container-fluid d-flex'>
            <div className='container'>

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
                   About You
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    placeholder="Experienced content writer and digital marketing expert" />
                  <Form.Text className="text-muted">
                    Enter as much information as possible for more acurate descriptions.
                  </Form.Text>
                </Form.Group>

                <Button variant="dark" size="lg" type="submit">
                  Generate
                </Button>
              </Form>
            </div>

            <div className='container'>

              <Card>
                <Card.Body>
                  <Card.Title><h1> {this.state.heading} </h1></Card.Title>
                  <hr />
                  <Card.Text><p> {this.state.response} </p></Card.Text>
                </Card.Body>
              </Card>

            </div>

          </div>
          <div className='container'  style={{marginTop:'50px'}}>

            <Editor
              id="myEditor"
              apiKey="aomhk3dk1y1no3mai7xz9fbgd26lzimwz2p7m7bkcdr2kyn2"
              init={{
                menubar: false,
                branding: false,
                content_css: "/myStyle.css",
                selector: "textarea",
                plugins: [
                  "lists",
                  "image",
                  "paste",
                  "wordcount",
                  "tabfocus",
                   "spellchecker",
                ],
                setup: (editor) => {
                  this.editor = editor;
                },
                statusbar: false,
                resize: false,
                toolbar_sticky: true,
                paste_as_text: true,
                force_br_newlines: true,
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help | wordcount ",
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
          </div>
        </Container>

      </div>
    )
  }
}
export default ProfileBio
