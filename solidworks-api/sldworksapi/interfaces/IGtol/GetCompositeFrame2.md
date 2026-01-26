---
type: method
interface: IGtol
member: GetCompositeFrame2
returns: System.Boolean
parameters:
  -
    name: FrameNum
    type: System.Int16
    description: Index of GTol frame
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.SetCompositeFrame2
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - getcompositeframe2
  - igtol
  - gtol
  - composite
  - frame2
  - num
  - int16
  - boolean
  - create
  - vba
  - vb
  - net
---

# IGtol.GetCompositeFrame2

Gets whether the GTol frame with the specified index is part of a composite frame.

## Signature

```csharp
System.Boolean GetCompositeFrame2( 
   System.Int16
FrameNum
)
```
## Parameters

- `FrameNum` (System.Int16): Index of GTol frame

## Return Value

True if GTol frame is part of a composite frame, false if not

## Examples

- Create GTol Composite Frame (VBA) (Create_Gtol_Composite_Frame_Example_VB.htm)
- Create GTol Composite Frame (VB.NET) (Create_Gtol_Composite_Frame_Example_VBNET.htm)
- Create GTol Composite Frame (C#) (Create_Gtol_Composite_Frame_Example_CSharp.htm)

## See Also

- `IGtol.SetCompositeFrame2`