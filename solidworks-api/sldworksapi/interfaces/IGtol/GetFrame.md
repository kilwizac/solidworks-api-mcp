---
type: method
interface: IGtol
member: GetFrame
returns: System.Object
parameters:
  -
    name: FrameIndex
    type: System.Int32
    description: One-based index of Gtol frame to retrieve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getframe
  - igtol
  - gtol
  - frame
  - index
  - int32
  - object
  - igtolframe
---

# IGtol.GetFrame

Gets the Gtol frame at the specified index.

## Signature

```csharp
System.Object GetFrame( 
   System.Int32
FrameIndex
)
```
## Parameters

- `FrameIndex` (System.Int32): One-based index of Gtol frame to retrieve

## Return Value

IGtolFrame

## Remarks

This method is valid only if this Gtol was created in SOLIDWORKS 2022 or later.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)