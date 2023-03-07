import React from 'react';
import Layout from '../components/layouts/Layout';
import DataView from '../components/general/DataView';
import CustomBarChart from '../components/general/CustomBarChart';
import RangeSlider from '../components/general/RangeSlider';
import { Data, UnitData, IndexedData } from '../utils/interfaces';
import Button from '../components/general/Button';
import { NavigateFunction } from 'react-router-dom';
import { withNavigation } from '../utils/helpers/withNavigation';

interface DashboardProps {
  navigate: NavigateFunction;
};

interface DashboardState {
  data: IndexedData[];
  currentItem: IndexedData | undefined;
  error: string | null;
};

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      data: [],
      currentItem: undefined,
      error: null
    }
  };

  componentDidMount = (): void => {
    this.fetchData();
  };

  fetchData = () => {
    fetch('data.json')
      .then((response) => {
        if (!response.ok) {
          this.setState({ error: response.statusText })
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        const indexedData: IndexedData[] = []
        data.map((item: Data, index: number) => indexedData.push({ 
          index, 
          title: item.title,
          attributes: item.attributes as unknown as UnitData[] 
        }))
        this.setState({ 
          data: indexedData as unknown as IndexedData[],
          currentItem: indexedData.length > 0 ? indexedData[0] : undefined
         });
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
  };

  onChangeItem = (value: number) => {
    const { data } = this.state
    const currentItem: IndexedData | undefined = data.find(item => item.index === value)
    this.setState({ currentItem: currentItem })
  };

  onLogout = () => {
    this.props.navigate('/');
  };
  
  render() {
    const { data, currentItem } = this.state;
    return (
      <Layout title={currentItem?.title ?? ''}>
        <Button
          title="Logout"
          className='relative button marginLeft400 bottom30 paragraph' onClick={this.onLogout} 
        />
        <div className='flexCol padding10'>
          <div className='flexRow padding10 marginRight90'>
            <DataView data={currentItem?.attributes}/>
            <CustomBarChart data={currentItem?.attributes ?? []}/>
          </div>
          <RangeSlider
              range={data.length > 0 ? data.length - 1 : 0}
              currentTitle={currentItem?.title}
              onChange={this.onChangeItem} />
        </div>
      </Layout>
    );
  };
};

export default withNavigation(Dashboard);