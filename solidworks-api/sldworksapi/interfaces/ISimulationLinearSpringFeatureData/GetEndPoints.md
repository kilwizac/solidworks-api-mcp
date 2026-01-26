---
type: method
interface: ISimulationLinearSpringFeatureData
member: GetEndPoints
returns: void
parameters:
  -
    name: PDirDisp1
    type: System.Object
    description: Linear edge, vertex, sketch segment, or sketch point
  -
    name: PDirDisp2
    type: System.Object
    description: Linear edge, vertex, sketch segment, or sketch point
  -
    name: Type1
    type: System.Int32
    description: Type of end point as defined in swSelectType_e
  -
    name: Type2
    type: System.Int32
    description: Type of end point as defined in swSelectType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISimulationLinearSpringFeatureData.SetEndPoints
keywords:
  - getendpoints
  - isimulationlinearspringfeaturedata
  - simulation
  - linear
  - spring
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
  - void
---

# ISimulationLinearSpringFeatureData.GetEndPoints

Obsolete. Superseded by ISimulationSpringFeatureData::GetEndPoints.

## Signature

```csharp
void GetEndPoints( 
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

- `PDirDisp1` (System.Object): Linear edge, vertex, sketch segment, or sketch point
- `PDirDisp2` (System.Object): Linear edge, vertex, sketch segment, or sketch point
- `Type1` (System.Int32): Type of end point as defined in swSelectType_e
- `Type2` (System.Int32): Type of end point as defined in swSelectType_e

## Return Value

Unknown.

## See Also

- `ISimulationLinearSpringFeatureData.SetEndPoints`