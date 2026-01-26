---
type: method
interface: IModelDocExtension
member: CreateStructureSystem
returns: Feature
parameters:
  -
    name: PrimaryMembersData
    type: System.Object
    description: Array of primary IStructureSystemMemberFeatureData objects; null or Nothing if none
  -
    name: SecondaryMembersData
    type: System.Object
    description: Array of secondary IStructureSystemMemberFeatureData objects; null or Nothing if none
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - createstructuresystem
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - structure
  - primary
  - members
  - data
  - object
  - secondary
  - feature
  - icornermanagementfolder
  - iprimarymemberfaceplaneintersectionfeaturedata
  - iprimarymemberpointlengthfeaturedata
  - iprimarymemberpathsegmentfeaturedata
  - iprimarymemberrefplanefeaturedata
  - isecondarymemberbetweenpointsfeaturedata
---

# IModelDocExtension.CreateStructureSystem

Creates a structure system feature using the specified primary and secondary member arrays.

## Signature

```csharp
Feature CreateStructureSystem( 
   System.Object
PrimaryMembersData
,
   System.Object
SecondaryMembersData
)
```
## Parameters

- `PrimaryMembersData` (System.Object): Array of primary IStructureSystemMemberFeatureData objects; null or Nothing if none
- `SecondaryMembersData` (System.Object): Array of secondary IStructureSystemMemberFeatureData objects; null or Nothing if none

## Return Value

IFeature

## Remarks

The feature returned is an
IStructureSystemFolder
. Use
IFeature::GetSpecificFeature2
to get the specific interface.
See the IStructureSystemFolder Remarks.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)
- IPrimaryMemberFacePlaneIntersectionFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberFacePlaneIntersectionFeatureData)
- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)
- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)
- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)
- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)