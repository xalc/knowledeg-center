import { Component } from "react";
import { Button } from 'antd';
import * as Tfvis from '@tensorflow/tfjs-vis';
class TfvisCore extends Component {
    constructor(props) {
        super(props);
        this.ele = null;
        this.tfvis = Tfvis;
        this.visor = null;
        this.renderReactVis = this.renderReactVis.bind(this);
        this.togglePanel = this.togglePanel.bind(this);
    }
    renderReactVis() {
        const data = [
            { index: 0, value: 50 },
            { index: 1, value: 100 },
            { index: 2, value: 150 },
        ];
        this.visor = this.tfvis.visor();
        this.ele = this.visor.el;
        const surface = this.visor.surface({ name: 'Barchart', tab: 'Test' });
        this.tfvis.render.barchart(surface, data, {});
        const surface1 = this.visor.surface({ name: 'Barchart', tab: 'Plot' });
        this.tfvis.render.barchart(surface1, data, {});
    }
    componentDidMount() {
        this.renderReactVis();
    }


    componentWillUnmount() {
        this.distroy();
    }
    togglePanel() {
        this.visor.toggle();
    }
    distroy() {

        this.ele.remove();
        this.ele = null;

    }
    render() {

        return (
            <Button
                type="primary"
                onClick={this.togglePanel}>
                Toggle panel
            </Button>
        );
    }
};
export default TfvisCore;