---
type: method
interface: ISimulationDamperFeatureData
member: GetEndPoints
returns: System.Boolean
parameters:
  -
    name: PDirDisp1
    type: System.Object
    description: Damper end point
  -
    name: PDirDisp2
    type: System.Object
    description: Damper end point
  -
    name: Type1
    type: System.Int32
    description: Type of end point as defined in swSelectType_e
  -
    name: Type2
    type: System.Int32
    description: Type of end point as defined in swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationDamperFeatureData.SetEndPoints
keywords:
  - getendpoints
  - isimulationdamperfeaturedata
  - simulation
  - damper
  - feature
  - data
  - end
  - points
  - dir
  - disp1
  - object
  - disp2
  - type1
  - int32
  - type2
  - boolean
---

# ISimulationDamperFeatureData.GetEndPoints

Gets the end points for this damper feature.

## Signature

```csharp
System.Boolean GetEndPoints( 
   out System.Object
PDirDisp1
,
   out System.Object
PDirDisp2
,
   out System.Int32
Type1
,
   out System.Int32
Type2
)
```
## Parameters

- `PDirDisp1` (System.Object): Damper end point
- `PDirDisp2` (System.Object): Damper end point
- `Type1` (System.Int32): Type of end point as defined in swSelectType_e
- `Type2` (System.Int32): Type of end point as defined in swSelectType_e

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `ISimulationDamperFeatureData.SetEndPoints`