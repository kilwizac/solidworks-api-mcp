---
type: method
interface: IGtol
member: SetCompositeFrame2
returns: void
parameters:
  -
    name: Composite
    type: System.Boolean
    description: True to create a composite frame, false to not (see Remarks )
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
  - IGtol.GetCompositeFrame2
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - setcompositeframe2
  - igtol
  - gtol
  - composite
  - frame2
  - boolean
  - num
  - int16
  - void
  - create
  - vba
  - vb
  - net
---

# IGtol.SetCompositeFrame2

Sets whether to create a composite frame containing the specified GTol frame.

## Signature

```csharp
void SetCompositeFrame2( 
   System.Boolean
Composite
,
   System.Int16
FrameNum
)
```
## Parameters

- `Composite` (System.Boolean): True to create a composite frame, false to not (see Remarks )
- `FrameNum` (System.Int16): Index of GTol frame

## Return Value

Unknown.

## Remarks

If Composite is true, this method creates a composite frame containing adjacent GTol frames:
Frame with index FrameNum.
Frame directly below.
Both GTol frames must have the same symbol.

## Examples

- Create GTol Composite Frame (VBA) (Create_Gtol_Composite_Frame_Example_VB.htm)
- Create GTol Composite Frame (VB.NET) (Create_Gtol_Composite_Frame_Example_VBNET.htm)
- Create GTol Composite Frame (C#) (Create_Gtol_Composite_Frame_Example_CSharp.htm)

## See Also

- `IGtol.GetCompositeFrame2`