---
type: method
interface: IBeltChainFeatureData
member: ModifyMemberParameters
returns: System.Boolean
parameters:
  -
    name: PulleyCompObject
    type: System.Object
    description: Pulley component
  -
    name: Diameter
    type: System.Double
    description: Diameter > 0.0 to change; 0.0 to not change
  -
    name: Flip
    type: System.Boolean
    description: True to flip the belt side, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - modifymemberparameters
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - modify
  - member
  - parameters
  - pulley
  - comp
  - object
  - diameter
  - double
  - flip
  - boolean
---

# IBeltChainFeatureData.ModifyMemberParameters

Changes diameter and whether to flip the belt side of the specified pulley component.

## Signature

```csharp
System.Boolean ModifyMemberParameters( 
   System.Object
PulleyCompObject
,
   System.Double
Diameter
,
   System.Boolean
Flip
)
```
## Parameters

- `PulleyCompObject` (System.Object): Pulley component
- `Diameter` (System.Double): Diameter > 0.0 to change; 0.0 to not change
- `Flip` (System.Boolean): True to flip the belt side, false to not

## Return Value

True if pulley component successfully modifed, false if not