---
type: property
interface: IProfileGroupFolder
member: ProfileStandard
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilestandard
  - iprofilegroupfolder
  - profile
  - group
  - folder
  - standard
  - string
readonly: true
---

# IProfileGroupFolder.ProfileStandard

Gets the profile standard for this member profile group.

## Signature

```csharp
System.String ProfileStandard {get;}
```
## Parameters

None.

## Return Value

Weldment profile standard as defined in a weldment profile

## Remarks

This property may be overridden by
IStructureSystemMemberProfile::ProfileStandard
for individual members.
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