---
type: method
interface: IGtol
member: InsertBelowFrameTextAt
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based index where to insert the line of Text in the below frame
  -
    name: Text
    type: System.String
    description: Text to insert
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.DeleteBelowFrameTextAt
  - IGtol.GetBelowFrameTextAt
  - IGtol.GetBelowFrameTextLineCount
  - IGtol.SetBelowFrameTextAt
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - insertbelowframetextat
  - igtol
  - gtol
  - insert
  - below
  - text
  - index
  - int32
  - string
  - boolean
---

# IGtol.InsertBelowFrameTextAt

Inserts the specified text at the specified line index in the below frame of this GTol.

## Signature

```csharp
System.Boolean InsertBelowFrameTextAt( 
   System.Int32
Index
,
   System.String
Text
)
```
## Parameters

- `Index` (System.Int32): 1-based index where to insert the line of Text in the below frame
- `Text` (System.String): Text to insert

## Return Value

True if text line successfully inserted, false if not

## Examples

- IGTol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtol)

## See Also

- `IGtol.DeleteBelowFrameTextAt`
- `IGtol.GetBelowFrameTextAt`
- `IGtol.GetBelowFrameTextLineCount`
- `IGtol.SetBelowFrameTextAt`