---
type: method
interface: IBodyFolder
member: GetAutomaticUpdate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - cut
  - lists
  - getautomaticupdate
  - ibodyfolder
  - body
  - folder
  - automatic
  - update
  - boolean
---

# IBodyFolder.GetAutomaticUpdate

Gets whether to automatically update cut lists.

## Signature

```csharp
System.Boolean GetAutomaticUpdate()
```
## Parameters

None.

## Return Value

True to automatically update cut lists, false to update them manually

## Remarks

To update cut lists...
Call...
Manually
IBodyFolder::UpdateCutList
Automatically
IBodyFolder::SetAutomaticUpdate

## Examples

- IBodyFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBodyFolder)