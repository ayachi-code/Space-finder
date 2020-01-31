import React from 'react'


class Update extends React.Component {

    render() {
        return(
            <div>
            <div className="text-muted float-left border">
                    <table>
                        <thead>
                        <tr>
                            <th className="border">Update 1.0.0</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center ">
                                <th>
                                   {this.get_version}
                                </th>
                            </tr>
                        </tbody>

                    </table>
            </div>
        </div>
        )
    }
}

export default Update;