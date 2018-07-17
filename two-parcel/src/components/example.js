class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    const data = await loadStuff();
    this.setState({ loading: false, data });
  }
  render() {
    const { loading, data } = this.state;
    return (
      {loading ? <Loading /> : <View {...data} />}
    );
  }
}