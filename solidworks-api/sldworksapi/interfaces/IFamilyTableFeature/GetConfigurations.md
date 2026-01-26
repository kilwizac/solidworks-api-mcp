---
type: method
interface: IFamilyTableFeature
member: GetConfigurations
returns: System.Object
parameters:
  -
    name: Criteria
    type: System.Int32
    description: Criteria as defined by swFamilyTableGetConfigurationCriteria_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - getconfigurations
  - ifamilytablefeature
  - family
  - table
  - feature
  - configurations
  - criteria
  - int32
  - object
---

# IFamilyTableFeature.GetConfigurations

Gets the configurations to use based on the specified criteria.

## Signature

```csharp
System.Object GetConfigurations( 
   System.Int32
Criteria
)
```
## Parameters

- `Criteria` (System.Int32): Criteria as defined by swFamilyTableGetConfigurationCriteria_e

## Return Value

Array of configurations