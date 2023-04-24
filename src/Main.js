import React, {Component} from 'react';
import json from './mock_stores.json';
import Table from "./Table";

class Main extends Component {
    state = {
        json: json
    }

    calc() {
        const data = {
            stores: [],
            total: {}
        };

        for (const item of json) {
            const store = {}
            store.name = item.store.name;
            store.months = item.months;

            let sum = 0;
            item.months.forEach(month => {
                sum += month.value;
                if (!data.total[month.name]) {
                    data.total[month.name] = month.value;
                } else {
                    data.total[month.name] += month.value;
                }
            });
            store.sum = sum;
            data.stores.push(store);
        }
        let totalSum = 0;
        Object.keys(data.total).forEach(key => {
            totalSum += data.total[key];
        })
        data.total.SUM = totalSum;
        return data;
    }

    onChange() {
        
    }

    render() {
        return (
            <>
                <header className="bg-dark text-white shadow p-4 mb-5">
                    <div className="container">
                        Mock data
                    </div>
                </header>

                <main className="container">
                    <Table
                        data={this.calc()}
                        onChange={this.onChange()}
                    />
                </main>
            </>
        )
    }
}

export default Main;