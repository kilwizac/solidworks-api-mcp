---
type: method
interface: ISimulationDamperFeatureData
member: SetEndPoints
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - ISimulationDamperFeatureData.GetEndPoints
keywords:
  - setendpoints
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
  - boolean
---

# ISimulationDamperFeatureData.SetEndPoints

Sets the end points for this damper feature.

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

- `PDirDisp1` (System.Object): Damper end point
- `PDirDisp2` (System.Object): Damper end point

## Return Value

True if the operation succeeds, false if it fails

## Examples

- ISimulationDamperFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimulationDamperFeatureData)

## See Also

- `ISimulationDamperFeatureData.GetEndPoints`