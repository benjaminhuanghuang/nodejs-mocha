## UT
    Find the smallest available piece for testing
    Mock everything else

    Sample:
        function isAuthorized(neededRole)
        {
            return roles.indexOf(neededRole) >= 0;
        }

## Integration testing
    Tie things together
    Test their interactions
    Mock the outside resources

## Functional testing (Black box testing)
    All together 
    Start on the outside, end on the outside
    Make sure everything fits together

