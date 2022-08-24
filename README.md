# authz

> fine-grain authorization controls

## Problem(s)

- share permissions between UI, API and microservices
- support claim-based and A-BAC
- preferrably typed
- Tree shakable (as it's JS) < 10KB

## Known Authz Methods

1. R-BAC role
2. A-BAC attribute P-BAC policy | C-BAC claim (microsoft specific terminology)
3. U-BAC user
4. C-BAC context
5. R-BAC rule
6. T-BAC time

## A-BAC

Attribute based access control, Subject/Action based

Attributes

- Subject - actor
- Object - resource unit you want to protect
- Action - access, allow/deny Policy
- Environment conditions - time, compression, cache, network, geo-location
- policy model on attributes

- google implements IAM using A-BAC model

## CASL

- operated on ability-level
- can implement feature-toggle
- conduct A/B testing
- implement rule-based business logic, disallow user to watch video if subscription has expired
- restrict database queries `@casl/ability/extra`
