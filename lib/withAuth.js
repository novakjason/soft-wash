import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

let globalUser = null;

function withAuth(BaseComponent) {
    class App extends React.Component {

        static propTypes = {
            user: PropTypes.shape({
                displayName: PropTypes.string,
                email: PropTypes.string.isRequired
            }),
            isFromServer: this.PropTypes.bool.isRequired
        }

        static defaultProps = {
            user: null
        }

        componentDidMount(){
            const { user, isFromServer } = this.props;

            if(isFromServer){
                globalUser = user;
            }

            if(loginRequired && !logoutRequired && !user){
                Router.push('/login');
                return;
            }

            if(logoutRequired && user){
                // Router.push("something") page that should be rendered when you're logged in
            }
        }

        static async getInitialProps(ctx) {
            const isFromServer = !!ctx.req;
            const user = ctx.req ? ctx.req.user.toObject() : globalUser;

            if(isFromServer && user) {
                user._id = user._id.toString();
            }

            const props = { user, isFromServer };

            if(BaseComponent.getInitialProps) {
                Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
            }

            return props;
        }

        render() {
            const { user } = this.props;

            if(loginRequired && !logoutRequired && !user){
                return null;
            }

            if(logoutRequired && user){
                return null;
            }

            return <BaseComponent {...this.props} />
        }
    }
    return App;
}