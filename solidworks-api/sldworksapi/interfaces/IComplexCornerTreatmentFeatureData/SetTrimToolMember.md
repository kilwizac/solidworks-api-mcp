---
type: method
interface: IComplexCornerTreatmentFeatureData
member: SetTrimToolMember
returns: System.Boolean
parameters:
  -
    name: Member
    type: System.Object
    description: ICornerMember or IFeature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - settrimtoolmember
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - trim
  - tool
  - member
  - object
  - boolean
  - icornermanagementfolder
---

# IComplexCornerTreatmentFeatureData.SetTrimToolMember

Sets the trim tool member for this complex corner treatment feature.

## Signature

```csharp
System.Boolean SetTrimToolMember( 
   System.Object
Member
)
```
## Parameters

- `Member` (System.Object): ICornerMember or IFeature

## Return Value

True if trim tool member successfully set, false if not

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)