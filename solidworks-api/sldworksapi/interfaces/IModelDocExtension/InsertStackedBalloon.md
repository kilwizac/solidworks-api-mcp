---
type: method
interface: IModelDocExtension
member: InsertStackedBalloon
returns: Note
parameters:
  -
    name: Style
    type: System.Int32
    description: Balloon style as defined in swBalloonStyle_e
  -
    name: Size
    type: System.Int32
    description: Balloon size as defined in swBalloonFit_e
  -
    name: UpperTextStyle
    type: System.Int32
    description: Style for the upper text of the balloon as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Style for the upper text of the balloon as defined in swBalloonTextContent_e
  -
    name: LowerTextStyle
    type: System.Int32
    description: Upper text in the balloon
  -
    name: LowerText
    type: System.String
    description: Upper text in the balloon
  -
    name: CustomSize
    type: System.Double
    description: Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: ShowQuantity
    type: System.Boolean
    description: Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: QuantityPlacement
    type: System.Int16
    description: Lower text in the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: QuantityDenotationText
    type: System.String
    description: User-defined size of the balloon; Size must be set to swBF_UserDef
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IBalloonStack
  - INote.IsStackedBalloon
keywords:
  - insertstackedballoon
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - stacked
  - balloon
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
  - note
---

# IModelDocExtension.InsertStackedBalloon

Obsolete. Superseded by IModelDocExtension::InsertStackedBalloon2.

## Signature

```csharp
Note InsertStackedBalloon( 
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

- `Style` (System.Int32): Balloon style as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size as defined in swBalloonFit_e
- `UpperTextStyle` (System.Int32): Style for the upper text of the balloon as defined in swBalloonTextContent_e
- `UpperText` (System.String): Style for the upper text of the balloon as defined in swBalloonTextContent_e
- `LowerTextStyle` (System.Int32): Upper text in the balloon
- `LowerText` (System.String): Upper text in the balloon
- `CustomSize` (System.Double): Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
- `ShowQuantity` (System.Boolean): Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc
- `QuantityPlacement` (System.Int16): Lower text in the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
- `QuantityDenotationText` (System.String): User-defined size of the balloon; Size must be set to swBF_UserDef

## Return Value

Note

## See Also

- `IBalloonStack`
- `INote.IsStackedBalloon`