import React, { Component, Fragment } from 'react';
import CarouselContainer from './CarouselContainer'
import Wrapper from './Wrapper'
import CarouselSlot from './CarouselSlot'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      position: 0,
      sliding: false,
      direction: 'next',
    }
  }

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }


  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getOrder = (itemIndex) => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1

    this.doSliding('next', position === numItems - 1 ? 0 : position + 1)
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    })
  }

  prevSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1)
    this.setState({
      position: position === 0 ? numItems - 1 : position - 1
    })
  }

  doSliding = (direction, position) => {
    this.setState({
      sliding: true,
      direction,
      position
    })
    setTimeout(() => {
      this.setState({
        sliding: false
      })
    }, 50)
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div
          className="main__btn main__btn-left"
          onClick={() => {
            clearInterval(this.timer);
            this.timer = setInterval(this.nextSlide, 5000);
            this.prevSlide();
          }}
        >
          <i className="fa fa-chevron-left fa-2x" />
        </div>
        <Wrapper>
          <CarouselContainer
            sliding={this.state.sliding}
            direction={this.state.direction}
          >
            {children.map((child, index) => (
              <CarouselSlot
                key={index}
                order={this.getOrder(index)}
              >
                {child}
              </CarouselSlot>
            ))}
          </CarouselContainer>
        </Wrapper>
        <div
          className="main__btn main__btn-right"
          onClick={() => {
            clearInterval(this.timer);
            this.timer = setInterval(this.nextSlide, 5000);
            this.nextSlide();
          }}
        >
          <i className="fa fa-chevron-right fa-2x" />
        </div>
        {/* <button onClick={() => this.prevSlide()}>Prev</button>

        <button onClick={() => this.nextSlide()}>Next</button> */}

      </Fragment>
    )
  }
}

export default Carousel;