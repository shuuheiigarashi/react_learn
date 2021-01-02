import React from "react";
import Header from "./Header";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      hasEmailError: false,
      hasContactError: false
    };
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  handleEmailChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {
      email: inputValue,
      hasEmailError: isEmpty
    };
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";
    this.state = {
      content: inputValue,
      hasContentError: isEmpty
    };
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = <span>メールアドレスを入力して下さい</span>;
    }

    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = <span>お問い合わせ内容を入力してください</span>;
    }

    let Contact;
    if (this.state.isSubmitted) {
      Contact = <span className="message">送信完了しました</span>;
    } else {
      Contact = (
        <form
          onSubmit={() => {
            this.handleSubmit();
          }}
        >
          <p>メールアドレス</p>
          <input
            value={this.state.email}
            onChange={event => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>お問い合わせ</p>
          <textarea
            value={this.state.content}
            onChange={event => {
              this.handleContentChange(event);
            }}
          />
          {contentErrorText}
          <div>
            <input type="submit" value="送信" />
          </div>
        </form>
      );
    }

    return (
      <div>
        <Header />
        <div className="contact">
          <h1>Contact</h1>
          <p>お問い合わせはこちらからお願い致します。</p>
          {Contact}
        </div>
        <div className="sns">
          <p>SNS</p>
          <Link to="https://twitter.com/shuuheifront" target="_blank">
            <TwitterIcon />
          </Link>
          <Link to="https://github.com/shuuheiigarashi" target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    );
  }
}

export default Contact;
