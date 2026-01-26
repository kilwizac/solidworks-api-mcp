---
type: method
interface: IComplexCornerTreatmentFeatureData
member: GetTrimToolMember
returns: System.Object
parameters:
  -
    name: MemberObjType
    type: System.Int32
    description: Trim tool member object to return as defined by swTrimToolMemberObjectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - gettrimtoolmember
  - icomplexcornertreatmentfeaturedata
  - complex
  - corner
  - treatment
  - feature
  - data
  - trim
  - tool
  - member
  - obj
  - type
  - int32
  - object
  - icornermanagementfolder
---

# IComplexCornerTreatmentFeatureData.GetTrimToolMember

Gets the specified trim tool member for this complex corner treatment.

## Signature

```csharp
System.Object GetTrimToolMember( 
   out System.Int32
MemberObjType
)
```
## Parameters

- `MemberObjType` (System.Int32): Trim tool member object to return as defined by swTrimToolMemberObjectType_e

## Return Value

ICornerMember or IFeature

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)