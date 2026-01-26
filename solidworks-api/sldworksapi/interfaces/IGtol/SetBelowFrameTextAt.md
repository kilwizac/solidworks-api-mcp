---
type: method
interface: IGtol
member: SetBelowFrameTextAt
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 1-based line index at which to edit or insert text
  -
    name: Text
    type: System.String
    description: New text
  -
    name: Overwrite
    type: System.Boolean
    description: True to overwrite the text at Index; false to insert a new line at Index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.DeleteBelowFrameTextAt
  - IGtol.GetBelowFrameTextAt
  - IGtol.GetBelowFrameTextLineCount
  - IGtol.InsertBelowFrameTextAt
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - setbelowframetextat
  - igtol
  - gtol
  - below
  - text
  - index
  - int32
  - string
  - overwrite
  - boolean
---

# IGtol.SetBelowFrameTextAt

Edits or inserts a text line at the specified below frame line index of this GTol.

## Signature

```csharp
System.Boolean SetBelowFrameTextAt( 
   System.Int32
Index
,
   System.String
Text
,
   System.Boolean
Overwrite
)
```
## Parameters

- `Index` (System.Int32): 1-based line index at which to edit or insert text
- `Text` (System.String): New text
- `Overwrite` (System.Boolean): True to overwrite the text at Index; false to insert a new line at Index

## Return Value

True if the text is successfully edited or inserted, false if not

## Examples

- IGTol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtol)

## See Also

- `IGtol.DeleteBelowFrameTextAt`
- `IGtol.GetBelowFrameTextAt`
- `IGtol.GetBelowFrameTextLineCount`
- `IGtol.InsertBelowFrameTextAt`