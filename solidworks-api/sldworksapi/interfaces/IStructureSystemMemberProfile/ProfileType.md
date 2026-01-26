---
type: property
interface: IStructureSystemMemberProfile
member: ProfileType
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profiletype
  - istructuresystemmemberprofile
  - structure
  - member
  - profile
  - type
  - string
  - icornermanagementfolder
  - iprimarymemberfaceplaneintersectionfeaturedata
  - iprimarymemberpointlengthfeaturedata
  - iprimarymemberpathsegmentfeaturedata
  - iprimarymemberrefplanefeaturedata
readonly: null
---

# IStructureSystemMemberProfile.ProfileType

Gets the profile type for this member profile.

## Signature

```csharp
System.String ProfileType {get; set;}
```
## Parameters

None.

## Return Value

Weldment profile type as defined in a weldment profile

## Remarks

This property:
is valid only if a
IStructureSystemMemberProfile::ProfileStandard
is set.
overrides
IProfileGroupFolder::ProfileType
.
Specify this property using strings found in:
SOLIDWORKS-supplied weldment profile (*.
sldlfp
) from
install_dir
\
lang
\
lang_name
\
weldment profiles
-
or -
custom weldment profile (*.
sldlfp
); see the SOLIDWORKS Help for details about custom weldment profiles

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)
- IPrimaryMemberFacePlaneIntersectionFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberFacePlaneIntersectionFeatureData)
- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)
- IPrimaryMemberPathSegmentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPathSegmentFeatureData)
- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)