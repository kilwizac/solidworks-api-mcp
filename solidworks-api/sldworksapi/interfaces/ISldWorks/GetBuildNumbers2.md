---
type: method
interface: ISldWorks
member: GetBuildNumbers2
returns: void
parameters:
  -
    name: BaseVersion
    type: System.String
    description: Major revision number
  -
    name: CurrentVersion
    type: System.String
    description: Build number
  -
    name: HotFixes
    type: System.String
    description: Hot fix numbers
docset: sldworksapi
deprecated: false
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
  - hot
  - fix
  - revision
  - solidworks
  - getbuildnumbers2
  - isldworks
  - sld
  - works
  - numbers2
  - base
  - version
  - string
  - current
  - fixes
  - void
  - numbers
  - vba
  - vb
  - net
---

# ISldWorks.GetBuildNumbers2

Gets the build, major revision, and hot fix numbers of the SOLIDWORKS Design application.

## Signature

```csharp
void GetBuildNumbers2( 
   out System.String
BaseVersion
,
   out System.String
CurrentVersion
,
   out System.String
HotFixes
)
```
## Parameters

- `BaseVersion` (System.String): Major revision number
- `CurrentVersion` (System.String): Build number
- `HotFixes` (System.String): Hot fix numbers

## Return Value

Unknown.

## Examples

- Get Build Numbers (VBA) (Get_Build_Numbers_Example_VB.htm)
- Get Build Numbers (VB.NET) (Get_Build_Numbers_Example_VBNET.htm)
- Get Build Numbers (C#) (Get_Build_Numbers_Example_CSharp.htm)

## See Also

- `ISldWorks.IGetVersionHistoryCount`
- `ISldWorks.IVersionHistory`
- `ISldWorks.RevisionNumber`
- `ISldWorks.VersionHistory`