---
type: property
interface: IStructuralMemberFeatureData
member: WeldmentProfilePath
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberFeatureData.LocateProfilePoint
keywords:
  - weldmentprofilepath
  - istructuralmemberfeaturedata
  - structural
  - member
  - feature
  - data
  - weldment
  - profile
  - path
  - string
readonly: null
---

# IStructuralMemberFeatureData.WeldmentProfilePath

Gets or sets the path for the profile for this structural member.

## Signature

```csharp
System.String WeldmentProfilePath {get; set;}
```
## Parameters

None.

## Return Value

Full path and filename for the profile (see Remarks )

## Remarks

Weldment profiles are located in
install_dir
/lang/
lang
/weldment profiles
subfolders and are named
filename
.sldflp
.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IStructuralMemberFeatureData.LocateProfilePoint`