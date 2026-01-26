---
type: method
interface: IModelDocExtension
member: InsertBOMBalloon
returns: System.Object
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
    description: Style for the upper text of the balloon as defined in swBalloonTextContent_e (see Remarks )
  -
    name: UpperText
    type: System.String
    description: Upper text of the balloon
  -
    name: LowerTextStyle
    type: System.Int32
    description: Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc (see Remarks )
  -
    name: LowerText
    type: System.String
    description: Lower text of the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
  -
    name: CustomSize
    type: System.Double
    description: User-defined size of the balloon; Size must be set to swBF_UserDef
  -
    name: ShowQuantity
    type: System.Boolean
    description: User-defined size of the balloon; Size must be set to swBF_UserDef
  -
    name: QuantityPlacement
    type: System.Int16
    description: True to show quantity, false to not
  -
    name: QuantityDenotationText
    type: System.String
    description: True to show quantity, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IDrawingDoc.AutoBalloon3
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.IsBomBalloon
  - INote.SetBomBalloonText
keywords:
  - insertbomballoon
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - bom
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
  - object
---

# IModelDocExtension.InsertBOMBalloon

Obsolete. Superseded by IModelDocExtension::InsertBomBalloon2.

## Signature

```csharp
System.Object InsertBOMBalloon( 
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
- `UpperTextStyle` (System.Int32): Style for the upper text of the balloon as defined in swBalloonTextContent_e (see Remarks )
- `UpperText` (System.String): Upper text of the balloon
- `LowerTextStyle` (System.Int32): Style for the lower text of the balloon as defined in swBalloonTextContent_e ; valid for balloons only and Style must be set to swBS_SplitCirc (see Remarks )
- `LowerText` (System.String): Lower text of the balloon; valid for balloons only and Style must be set to swBS_SplitCirc
- `CustomSize` (System.Double): User-defined size of the balloon; Size must be set to swBF_UserDef
- `ShowQuantity` (System.Boolean): User-defined size of the balloon; Size must be set to swBF_UserDef
- `QuantityPlacement` (System.Int16): True to show quantity, false to not
- `QuantityDenotationText` (System.String): True to show quantity, false to not

## Return Value

Note

## Remarks

See
INote::PropertyLinkedText
for examples of link strings usable with swBalloonTextContent_e.swBalloonTextCustomProperties.

## See Also

- `IDrawingDoc.AutoBalloon3`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.IsBomBalloon`
- `INote.SetBomBalloonText`