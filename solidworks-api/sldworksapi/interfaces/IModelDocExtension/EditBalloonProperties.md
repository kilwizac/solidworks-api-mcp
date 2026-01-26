---
type: method
interface: IModelDocExtension
member: EditBalloonProperties
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
    description: Upper text style as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Text for the upper text in the balloon
  -
    name: LowerTextStyle
    type: System.Int32
    description: Lower text style as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: LowerText
    type: System.String
    description: Text for the lower text in the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: CustomSize
    type: System.Double
    description: User-defined size of the balloon; Size must be set to swBF_UserDef
  -
    name: ShowQuantity
    type: System.Boolean
    description: True to show quantity, false to not
  -
    name: QuantityPlacement
    type: System.Int16
    description: Placement of quantity value: 0 = Left 1 = Right 2 = Top 3 = Bottom
  -
    name: QuantityDenotationText
    type: System.String
    description: Denotation text for quantity
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - INote.SetBalloon
  - INote.SetBomBalloonText
keywords:
  - editballoonproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - edit
  - balloon
  - properties
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
  - object
---

# IModelDocExtension.EditBalloonProperties

Obsolete. Superseded by IModelDocExtension::EditBalloonProperties2.

## Signature

```csharp
System.Object EditBalloonProperties( 
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
)
```
## Parameters

- `Style` (System.Int32): Style of balloon as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size as defined in swBalloonFit_e
- `UpperTextStyle` (System.Int32): Upper text style as defined in swBalloonTextContent_e
- `UpperText` (System.String): Text for the upper text in the balloon
- `LowerTextStyle` (System.Int32): Lower text style as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
- `LowerText` (System.String): Text for the lower text in the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
- `CustomSize` (System.Double): User-defined size of the balloon; Size must be set to swBF_UserDef
- `ShowQuantity` (System.Boolean): True to show quantity, false to not
- `QuantityPlacement` (System.Int16): Placement of quantity value: 0 = Left 1 = Right 2 = Top 3 = Bottom
- `QuantityDenotationText` (System.String): Denotation text for quantity

## Return Value

Note

## See Also

- `INote.SetBalloon`
- `INote.SetBomBalloonText`