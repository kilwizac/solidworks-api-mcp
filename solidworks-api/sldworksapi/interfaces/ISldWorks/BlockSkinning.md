---
type: method
interface: ISldWorks
member: BlockSkinning
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - skinning
  - windows
  - blockskinning
  - isldworks
  - sld
  - works
  - block
  - boolean
---

# ISldWorks.BlockSkinning

Blocks skinning a window, which prevents a window from looking like a SOLIDWORKS window.

## Signature

```csharp
System.Boolean BlockSkinning()
```
## Parameters

None.

## Return Value

True if successful, false if not

## Remarks

You must call
ISldWorks::ResumeSkinning
after creating your unskinned window so that new windows created by SOLIDWORKS and other add-ins are displayed as intended.