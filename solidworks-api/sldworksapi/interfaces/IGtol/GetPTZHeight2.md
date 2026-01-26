---
type: method
interface: IGtol
member: GetPTZHeight2
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
    description: True if the projected zone tolerance is displayed in the GTol, false if not
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
  - IGtol.SetPTZHeight2
keywords:
  - getptzheight2
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

# IGtol.GetPTZHeight2

Gets the projected tolerance zone for the specified frame and tolerance in this GTol.

## Signature

```csharp
System.Boolean GetPTZHeight2( 
   System.Int32
FrameNumber
,
   System.Int32
TolNumber
,
   out System.Boolean
PtzDisplay
,
   out System.String
PtzHt
)
```
## Parameters

- `FrameNumber` (System.Int32): Frame number
- `TolNumber` (System.Int32): Tolerance number
- `PtzDisplay` (System.Boolean): True if the projected zone tolerance is displayed in the GTol, false if not
- `PtzHt` (System.String): Height of the projected tolerance zone

## Return Value

True if the method executed successfully, false if not

## Remarks

This method:
is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
returns the height of the projected tolerance zone as a string because it is a user-specified parameter that can be textual, numeric, or both types of data.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

- `IGtol.SetPTZHeight2`