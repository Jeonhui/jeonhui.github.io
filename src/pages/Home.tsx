import Layout from "../journey-ui/components/Layout.tsx";
import Text from "../journey-ui/components/Text.tsx";
import colors from "../journey-ui/themes/colors/colors.ts";

function Home() {
    return (
        <Layout scrollable>
            <Layout>
                <Text color={colors.primaryBlue}>aaaa</Text>
            </Layout>
            <Layout>
                <Text fontStyle={{fontSize:'15rem', fontHeight: '11rem', fontWeight: 'bold'}}>aaaa</Text>
            </Layout>
            <Layout>
                <Text>aaaabbb</Text>
            </Layout>
        </Layout>
    )
}

export default Home