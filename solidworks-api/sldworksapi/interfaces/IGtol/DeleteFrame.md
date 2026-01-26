---
type: method
interface: IGtol
member: DeleteFrame
returns: System.Boolean
parameters:
  -
    name: FrameNum
    type: System.Int32
    description: One-based index of Gtol to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - deleteframe
  - igtol
  - gtol
  - delete
  - frame
  - num
  - int32
  - boolean
  - igtolframe
---

# IGtol.DeleteFrame

Deletes the specified frame from this Gtol.

## Signature

```csharp
System.Boolean DeleteFrame( 
   System.Int32
FrameNum
)
```
## Parameters

- `FrameNum` (System.Int32): One-based index of Gtol to delete

## Return Value

True if successfully deleted, false if not

## Remarks

This method is valid only if this Gtol was created in SOLIDWORKS 2022 or later.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)