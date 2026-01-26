---
type: method
interface: ISldWorks
member: GetBuildNumbers
returns: void
parameters:
  -
    name: BaseVersion
    type: System.String
    description: SOLIDWORKS major revision number
  -
    name: CurrentVersion
    type: System.String
    description: SOLIDWORKS build number
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IGetVersionHistoryCount
  - ISldWorks.IVersionHistory
  - ISldWorks.RevisionNumber
  - ISldWorks.VersionHistory
keywords:
  - build
  - number
  - revision
  - solidworks
  - getbuildnumbers
  - isldworks
  - sld
  - works
  - numbers
  - base
  - version
  - string
  - current
  - void
---

# ISldWorks.GetBuildNumbers

Obsolete. Superseded by ISldWorks::GetBuildNumbers2.

## Signature

```csharp
void GetBuildNumbers( 
   out System.String
BaseVersion
,
   out System.String
CurrentVersion
)
```
## Parameters

- `BaseVersion` (System.String): SOLIDWORKS major revision number
- `CurrentVersion` (System.String): SOLIDWORKS build number

## Return Value

Unknown.

## See Also

- `ISldWorks.IGetVersionHistoryCount`
- `ISldWorks.IVersionHistory`
- `ISldWorks.RevisionNumber`
- `ISldWorks.VersionHistory`