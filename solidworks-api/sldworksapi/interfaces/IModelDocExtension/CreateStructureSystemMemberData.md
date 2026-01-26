---
type: method
interface: IModelDocExtension
member: CreateStructureSystemMemberData
returns: System.Object
parameters:
  -
    name: MemberType
    type: System.Int32
    description: Type of member as defined by swStructureSystemMemberCreationType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - createstructuresystemmemberdata
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - structure
  - member
  - data
  - type
  - int32
  - object
  - icornermanagementfolder
  - iprimarymemberfaceplaneintersectionfeaturedata
  - iprimarymemberpointlengthfeaturedata
  - iprimarymemberpathsegmentfeaturedata
  - iprimarymemberrefplanefeaturedata
  - isecondarymemberbetweenpointsfeaturedata
---

# IModelDocExtension.CreateStructureSystemMemberData

Creates the specified structure system member.

## Signature

```csharp
System.Object CreateStructureSystemMemberData( 
   System.Int32
MemberType
)
```
## Parameters

- `MemberType` (System.Int32): Type of member as defined by swStructureSystemMemberCreationType_e

## Return Value

IStructureSystemMemberFeatureData

## Remarks

See the
IStructureSystemFolder
Remarks.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)
- IPrimaryMemberFacePlaneIntersectionFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberFacePlaneIntersectionFeatureData)
- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)
- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)
- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)
- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)