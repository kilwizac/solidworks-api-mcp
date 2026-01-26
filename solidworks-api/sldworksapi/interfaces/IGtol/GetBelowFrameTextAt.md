---
type: method
interface: IGtol
member: GetBelowFrameTextAt
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index of the line whose text to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.DeleteBelowFrameTextAt
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
  - getbelowframetextat
  - igtol
  - gtol
  - below
  - text
  - index
  - int32
  - string
---

# IGtol.GetBelowFrameTextAt

Gets the specified line of text in this GTol.

## Signature

```csharp
System.String GetBelowFrameTextAt( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 1-based index of the line whose text to get

## Return Value

Below frame line of text

## Examples

- IGTol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtol)

## See Also

- `IGtol.DeleteBelowFrameTextAt`
- `IGtol.GetBelowFrameTextLineCount`
- `IGtol.InsertBelowFrameTextAt`
- `IGtol.SetBelowFrameTextAt`