---
type: method
interface: ISimulationSpringFeatureData
member: SetEndPoints
returns: System.Boolean
parameters:
  -
    name: PDirDisp1
    type: System.Object
    description: Feature
  -
    name: PDirDisp2
    type: System.Object
    description: Feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationSpringFeatureData.GetEndPoints
keywords:
  - setendpoints
  - isimulationspringfeaturedata
  - simulation
  - spring
  - feature
  - data
  - end
  - points
  - dir
  - disp1
  - object
  - disp2
  - boolean
  - add
  - motion
  - study
  - vb
  - net
  - vba
---

# ISimulationSpringFeatureData.SetEndPoints

Sets the end points for this simulation spring feature.

## Signature

```csharp
System.Boolean SetEndPoints( 
   System.Object
PDirDisp1
,
   System.Object
PDirDisp2
)
```
## Parameters

- `PDirDisp1` (System.Object): Feature
- `PDirDisp2` (System.Object): Feature

## Return Value

Unknown.

## Examples

- Add Spring to Motion Study (C#) (Add_Spring_to_Motion_Study_Example_CSharp.htm)
- Add Spring to Motion Study (VB.NET) (Add_Spring_to_Motion_Study_Example_VBNET.htm)
- Add Spring to Motion Study (VBA) (Add_Spring_to_Motion_Study_Example_VB.htm)

## See Also

- `ISimulationSpringFeatureData.GetEndPoints`