---
type: method
interface: IComplexCornerTreatmentFeatureData
member: SetBodyTrimMembers
returns: System.Boolean
parameters:
  -
    name: BodyMemList
    type: System.Object
    description: Array of body trim IStructureSystemMemberFeatureData s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - setbodytrimmembers
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - body
  - trim
  - members
  - mem
  - list
  - object
  - boolean
---

# IComplexCornerTreatmentFeatureData.SetBodyTrimMembers

Sets the body trim members of this complex corner treatment feature.

## Signature

```csharp
System.Boolean SetBodyTrimMembers( 
   System.Object
BodyMemList
)
```
## Parameters

- `BodyMemList` (System.Object): Array of body trim IStructureSystemMemberFeatureData s

## Return Value

True if body trim members successfully set, false if not