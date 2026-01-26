---
type: method
interface: ISimulationForceFeatureData
member: SetEndPoints
returns: System.Boolean
parameters:
  -
    name: PDirDisp1
    type: System.Object
    description: Force end point
  -
    name: PDirDisp2
    type: System.Object
    description: Force end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationForceFeatureData.GetEndPoints
keywords:
  - setendpoints
  - isimulationforcefeaturedata
  - simulation
  - force
  - feature
  - data
  - end
  - points
  - dir
  - disp1
  - object
  - disp2
  - boolean
---

# ISimulationForceFeatureData.SetEndPoints

Sets the end points for this Force feature.

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

- `PDirDisp1` (System.Object): Force end point
- `PDirDisp2` (System.Object): Force end point

## Return Value

True if the operation succeeds, false if it fails

## See Also

- `ISimulationForceFeatureData.GetEndPoints`