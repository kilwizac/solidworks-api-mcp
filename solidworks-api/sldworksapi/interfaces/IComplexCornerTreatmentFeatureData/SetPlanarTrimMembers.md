---
type: method
interface: IComplexCornerTreatmentFeatureData
member: SetPlanarTrimMembers
returns: System.Boolean
parameters:
  -
    name: PlanarMemList
    type: System.Object
    description: Array of planar trim IStructureSystemMemberFeatureData s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setplanartrimmembers
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - planar
  - trim
  - members
  - mem
  - list
  - object
  - boolean
---

# IComplexCornerTreatmentFeatureData.SetPlanarTrimMembers

Sets the planar trim member of this complex corner treatment feature.

## Signature

```csharp
System.Boolean SetPlanarTrimMembers( 
   System.Object
PlanarMemList
)
```
## Parameters

- `PlanarMemList` (System.Object): Array of planar trim IStructureSystemMemberFeatureData s

## Return Value

True if planar trim members successfully set, false if not