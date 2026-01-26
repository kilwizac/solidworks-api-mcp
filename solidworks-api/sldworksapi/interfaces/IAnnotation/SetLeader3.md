---
type: method
interface: IAnnotation
member: SetLeader3
returns: System.Int32
parameters:
  -
    name: LeaderStyle
    type: System.Int32
    description: Leader style as defined in swLeaderStyle_e (see Remarks )
  -
    name: LeaderSide
    type: System.Int32
    description: Leader side as defined in swLeaderSide_e (see Remarks )
  -
    name: SmartArrowHeadStyle
    type: System.Boolean
    description: True to enable smart arrowhead style, false to disable it (see Remarks )
  -
    name: Perpendicular
    type: System.Boolean
    description: True to enable perpendicular bent leader display, false to disable it (see Remarks )
  -
    name: AllAround
    type: System.Boolean
    description: True to enable all around (weld, surface finish, or Gtol) symbol display, false to disable it (see Remarks )
  -
    name: Dashed
    type: System.Boolean
    description: True to enable dashed line leader display; false to enable solid-line leader (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.BentLeaderLength
  - IAnnotation.GetLeader
  - IAnnotation.GetLeaderCount
  - IAnnotation.GetLeaderPointsAtIndex
  - IAnnotation.GetMultiJogLeaderCount
  - IAnnotation.GetMultiJogLeaders
  - IAnnotation.LeaderLineStyle
  - IAnnotation.LeaderThickness
  - IAnnotation.LeaderThicknessCustom
  - IAnnotation.SetLeaderAttachmentPointAtIndex
  - IAnnotation.UseDocDispLeader
keywords:
  - leaders
  - annotations
  - annotation
  - see
  - also
  - iannotation
  - setleader3
  - leader3
  - leader
  - style
  - int32
  - side
  - smart
  - arrow
  - head
  - boolean
  - perpendicular
  - all
  - around
  - dashed
  - insert
  - gtol
  - vb
  - net
  - vba
---

# IAnnotation.SetLeader3

Sets the leader characteristics for this annotation.

## Signature

```csharp
System.Int32 SetLeader3( 
   System.Int32
LeaderStyle
,
   System.Int32
LeaderSide
,
   System.Boolean
SmartArrowHeadStyle
,
   System.Boolean
Perpendicular
,
   System.Boolean
AllAround
,
   System.Boolean
Dashed
)
```
## Parameters

- `LeaderStyle` (System.Int32): Leader style as defined in swLeaderStyle_e (see Remarks )
- `LeaderSide` (System.Int32): Leader side as defined in swLeaderSide_e (see Remarks )
- `SmartArrowHeadStyle` (System.Boolean): True to enable smart arrowhead style, false to disable it (see Remarks )
- `Perpendicular` (System.Boolean): True to enable perpendicular bent leader display, false to disable it (see Remarks )
- `AllAround` (System.Boolean): True to enable all around (weld, surface finish, or Gtol) symbol display, false to disable it (see Remarks )
- `Dashed` (System.Boolean): True to enable dashed line leader display; false to enable solid-line leader (see Remarks )

## Return Value

Indicates whether the operation was successful (see Remarks )

## Remarks

Not all annotations support all styles of leaders or leader characteristics. Only notes, GTols, surface finish symbols, weld symbols, datum target symbols, and block instances support leaders of any kind.
Weld symbol leaders can be hidden, but are always bent; straight leaders (swSTRAIGHT) are not supported.
Datum target symbols can have straight or bent leaders, but cannot be hidden (swNO_LEADER is not supported).
Only notes support underline leaders (swUNDERLINED).
GTols are the only type of annotation that supports perpendicular bent leaders.
GTols and weld symbols are the only types of annotations that support all around leader symbols.
Datum target symbols are the only type of annotation that supports dashed leaders
.
This method sets the characteristics of the annotation, not the individual leaders. You can get or set these characteristics whether leaders are displayed.
Use...
To...
IAnnotation::GetDashedLeader
Determine whether this leader is a dashed line or a solid line.
IAnnotation::GetLeaderAllARound
Determine whether all around symbol display is enabled or disabled.
IAnnotation::GetLeaderPerpendicular
Determine whether perpendicular bent leader display is enabled or disabled.
IAnnotation::GetLeaderSide
Get the leader attachment side setting.
IAnnotation::GetLeaderStyle
Get style of leader (hidden, straight, bent, or underline).
IAnnotation::GetSmartArrowHeadStyle
Determine whether smart arrowhead style is enabled or disabled.
You can set the leader side, smart arrowhead style, and bent leader values at any time. However, if leader display is disabled, you cannot affect the display of the annotation by setting these values. You can also set the perpendicular bent leader and all around symbol display at any time, but if bent leaders are disabled, you cannot affect the display of the annotation by setting these values.
The return status of this operation can have the following values:
0 =
Leader characteristics were successfully set
-1 =
Leader characteristics were not set because of an unknown error
-2
=
Leader attachment side setting is invalid
-3
=
Leaders are not supported on this type of annotation
-4 =
Leaders cannot be disabled on this type of annotation
-5
=
Bent leaders cannot be disabled on this type of annotation
-6 = Underline style leaders are not allowed on this type of annotation
If leader display is enabled, then this method changes the visible model.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

- `IAnnotation.BentLeaderLength`
- `IAnnotation.GetLeader`
- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.GetMultiJogLeaderCount`
- `IAnnotation.GetMultiJogLeaders`
- `IAnnotation.LeaderLineStyle`
- `IAnnotation.LeaderThickness`
- `IAnnotation.LeaderThicknessCustom`
- `IAnnotation.SetLeaderAttachmentPointAtIndex`
- `IAnnotation.UseDocDispLeader`