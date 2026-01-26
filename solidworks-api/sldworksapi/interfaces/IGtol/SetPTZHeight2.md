---
type: method
interface: IGtol
member: SetPTZHeight2
returns: System.Boolean
parameters:
  -
    name: FrameNumber
    type: System.Int32
    description: Frame number
  -
    name: TolNumber
    type: System.Int32
    description: Tolerance number
  -
    name: PtzDisplay
    type: System.Boolean
    description: True to display the projected zone tolerance, false to not
  -
    name: PtzHt
    type: System.String
    description: Height of the projected tolerance zone
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetPTZHeight2
keywords:
  - setptzheight2
  - igtol
  - gtol
  - ptz
  - height2
  - frame
  - number
  - int32
  - tol
  - display
  - boolean
  - ht
  - string
  - insert
  - vb
  - net
  - vba
---

# IGtol.SetPTZHeight2

Sets the projected tolerance zone for the specified frame and tolerance in this GTol.

## Signature

```csharp
System.Boolean SetPTZHeight2( 
   System.Int32
FrameNumber
,
   System.Int32
TolNumber
,
   System.Boolean
PtzDisplay
,
   System.String
PtzHt
)
```
## Parameters

- `FrameNumber` (System.Int32): Frame number
- `TolNumber` (System.Int32): Tolerance number
- `PtzDisplay` (System.Boolean): True to display the projected zone tolerance, false to not
- `PtzHt` (System.String): Height of the projected tolerance zone

## Return Value

True if this method executed successfully, false if not

## Remarks

This method is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
The projected tolerance zone (PTZ) displays in the first tolerance window of the first control frame of the GTol. If PtzHt is not empty, its value is displayed after the PTZ symbol, which is a P enclosed in a circle.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

- `IGtol.GetPTZHeight2`