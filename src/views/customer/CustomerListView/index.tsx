import React from 'react';
import type { FC } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
// import axios from 'src/utils/axios';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
// import useIsMountedRef from 'src/hooks/useIsMountedRef';
// import type { Customer } from 'src/types/customer';
import Header from './Header';
import Results from './Results';
import { GET_USERS } from 'src/graphql/User/query';
import { useQuery } from '@apollo/client';
import LoadingScreen from 'src/components/LoadingScreen';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CustomerListView: FC = () => {
  const classes = useStyles();
  // const isMountedRef = useIsMountedRef();
  // const [customers, setCustomers] = useState<Customer[]>([]);
  const {data: users, loading} = useQuery(GET_USERS)

  // const getCustomers = useCallback(async () => {
  //   try {
  //     const response = await axios.get<{ customers: Customer[]; }>('/api/customers');

  //     if (isMountedRef.current) {
  //       setCustomers(response.data.customers);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [isMountedRef]);

  // useEffect(() => {
  //   getCustomers();
  // }, [getCustomers]);

  return (
    <Page
      className={classes.root}
      title="Users List"
    >
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results customers={users?.users || []} />
        </Box>
        {loading && <Box mt={3}>
          <LoadingScreen />
        </Box>}
      </Container>
    </Page>
  );
};

export default CustomerListView;
