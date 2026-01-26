---
type: property
interface: IProfileGroupFolder
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
  - iprofilegroupfolder
  - profile
  - group
  - folder
  - type
  - string
readonly: true
---

# IProfileGroupFolder.ProfileType

Gets the profile type for this member profile group.

## Signature

```csharp
System.String ProfileType {get;}
```
## Parameters

None.

## Return Value

Weldment profile type as defined in a weldment profile

## Remarks

This property:
is valid only if a
IProfileGroupFolder::ProfileStandard
is set.
may be overridden by
IStructureSystemMemberProfile::ProfileType
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