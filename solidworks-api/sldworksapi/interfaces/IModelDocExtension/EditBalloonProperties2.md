---
type: method
interface: IModelDocExtension
member: EditBalloonProperties2
returns: System.Object
parameters:
  -
    name: Style
    type: System.Int32
    description: Style of balloon as defined in swBalloonStyle_e
  -
    name: Size
    type: System.Int32
    description: Balloon size as defined in swBalloonFit_e
  -
    name: UpperTextStyle
    type: System.Int32
    description: Balloon text style as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Text for the balloon; valid only if UpperTextStyle is one of the following: swBalloonTextContent_e.swBalloonTextCustom swBalloonTextContent_e.swBalloonTextCustomProperties swBalloonTextContent_e.swBalloonTextCutListProperties
  -
    name: LowerTextStyle
    type: System.Int32
    description: Lower text style as defined in swBalloonTextContent_e ; valid only if Style is swBalloonStyle_e.swBS_SplitCirc
  -
    name: LowerText
    type: System.String
    description: Text for the lower text in the balloon; valid only if Style is swBalloonStyle_e.swBS_SplitCirc and LowerTextStyle is one of the following: swBalloonTextContent_e.swBalloonTextCustom swBalloonTextContent_e.swBalloonTextCustomProperties swBalloonTextContent_e.swBalloonTextCutListProperties
  -
    name: CustomSize
    type: System.Double
    description: User-defined size of the balloon; valid only if Size is swBalloonFit_e.swBF_UserDef
  -
    name: ShowQuantity
    type: System.Boolean
    description: True to show quantity, false to not
  -
    name: QuantityPlacement
    type: System.Int16
    description: Placement of quantity value as defined in swBalloonQuantityPlacement_e ; valid only if ShowQuantity is true
  -
    name: QuantityDenotationText
    type: System.String
    description: Denotation text for quantity; valid only if ShowQuantity is true
  -
    name: QuantityDistance
    type: System.Double
    description: Distance between the balloon and the quantity; valid only if ShowQuantity is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - INote.SetBalloon
  - INote.SetBomBalloonText
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - edit
  - editballoonproperties2
  - imodeldocextension
  - model
  - doc
  - extension
  - balloon
  - properties2
  - style
  - int32
  - size
  - upper
  - text
  - string
  - lower
  - custom
  - double
  - show
  - quantity
  - boolean
  - placement
  - int16
  - denotation
  - distance
  - object
  - vba
  - vb
  - net
---

# IModelDocExtension.EditBalloonProperties2

Edits the selected balloon's properties.

## Signature

```csharp
System.Object EditBalloonProperties2( 
   System.Int32
Style
,
   System.Int32
Size
,
   System.Int32
UpperTextStyle
,
   System.String
UpperText
,
   System.Int32
LowerTextStyle
,
   System.String
LowerText
,
   System.Double
CustomSize
,
   System.Boolean
ShowQuantity
,
   System.Int16
QuantityPlacement
,
   System.String
QuantityDenotationText
,
   System.Double
QuantityDistance
)
```
## Parameters

- `Style` (System.Int32): Style of balloon as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size as defined in swBalloonFit_e
- `UpperTextStyle` (System.Int32): Balloon text style as defined in swBalloonTextContent_e
- `UpperText` (System.String): Text for the balloon; valid only if UpperTextStyle is one of the following: swBalloonTextContent_e.swBalloonTextCustom swBalloonTextContent_e.swBalloonTextCustomProperties swBalloonTextContent_e.swBalloonTextCutListProperties
- `LowerTextStyle` (System.Int32): Lower text style as defined in swBalloonTextContent_e ; valid only if Style is swBalloonStyle_e.swBS_SplitCirc
- `LowerText` (System.String): Text for the lower text in the balloon; valid only if Style is swBalloonStyle_e.swBS_SplitCirc and LowerTextStyle is one of the following: swBalloonTextContent_e.swBalloonTextCustom swBalloonTextContent_e.swBalloonTextCustomProperties swBalloonTextContent_e.swBalloonTextCutListProperties
- `CustomSize` (System.Double): User-defined size of the balloon; valid only if Size is swBalloonFit_e.swBF_UserDef
- `ShowQuantity` (System.Boolean): True to show quantity, false to not
- `QuantityPlacement` (System.Int16): Placement of quantity value as defined in swBalloonQuantityPlacement_e ; valid only if ShowQuantity is true
- `QuantityDenotationText` (System.String): Denotation text for quantity; valid only if ShowQuantity is true
- `QuantityDistance` (System.Double): Distance between the balloon and the quantity; valid only if ShowQuantity is true

## Return Value

Note

## Remarks

Before calling this method, select the balloon annotation whose properties you want to edit.

## Examples

- Edit Balloon (VBA) (Edit_Balloon_Example_VB.htm)
- Edit Balloon (VB.NET) (Edit_Balloon_Example_VBNET.htm)
- Edit Balloon (C#) (Edit_Balloon_Example_CSharp.htm)

## See Also

- `INote.SetBalloon`
- `INote.SetBomBalloonText`