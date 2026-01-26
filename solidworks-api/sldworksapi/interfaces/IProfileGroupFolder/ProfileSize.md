---
type: property
interface: IProfileGroupFolder
member: ProfileSize
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - profilesize
  - iprofilegroupfolder
  - profile
  - group
  - folder
  - size
  - string
readonly: true
---

# IProfileGroupFolder.ProfileSize

Gets the profile size for this member profile group.

## Signature

```csharp
System.String ProfileSize {get;}
```
## Parameters

None.

## Return Value

Weldment profile size as defined in a weldment profile

## Remarks

This property:
is valid only if a
IProfileGroupFolder::ProfileType
is set.
may be overridden by
IStructureSystemMemberProfile::ProfileSize
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