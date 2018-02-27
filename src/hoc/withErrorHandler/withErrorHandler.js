import React, {Component} from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../hoc/util'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null 
        }
        
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.set.State({error: null})
            })

            axios.interceptors.response.use(null, error => {
                this.set.State({error: error})
            })
        }
        
        errorConfirmedHandler() {
            this.setState({error: null})
        }
        
        render () {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>    
            )    
        }
            
    }
}

export default withErrorHandler