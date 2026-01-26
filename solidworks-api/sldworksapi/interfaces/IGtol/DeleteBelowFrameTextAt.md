---
type: method
interface: IGtol
member: DeleteBelowFrameTextAt
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index of the below frame text line to delete; -1 to delete all of the below frame text lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetBelowFrameTextAt
  - IGtol.GetBelowFrameTextLineCount
  - IGtol.InsertBelowFrameTextAt
  - IGtol.SetBelowFrameTextAt
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - deletebelowframetextat
  - igtol
  - gtol
  - delete
  - below
  - text
  - index
  - int32
  - boolean
---

# IGtol.DeleteBelowFrameTextAt

Deletes the specified text line in the below frame of this GTol.

## Signature

```csharp
System.Boolean DeleteBelowFrameTextAt( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 1-based index of the below frame text line to delete; -1 to delete all of the below frame text lines

## Return Value

True if text line successfully deleted, false if not

## Examples

- IGTol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtol)

## See Also

- `IGtol.GetBelowFrameTextAt`
- `IGtol.GetBelowFrameTextLineCount`
- `IGtol.InsertBelowFrameTextAt`
- `IGtol.SetBelowFrameTextAt`