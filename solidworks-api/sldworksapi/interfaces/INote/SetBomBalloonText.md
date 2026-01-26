---
type: method
interface: INote
member: SetBomBalloonText
returns: System.Boolean
parameters:
  -
    name: UpperTextStyle
    type: System.Int32
    description: Style for the upper text as defined in swDetailingNoteTextContent_e
  -
    name: UpperText
    type: System.String
    description: Upper text
  -
    name: LowerTextStyle
    type: System.Int32
    description: Style for the lower text as defined in swDetailingNoteTextContent_e
  -
    name: LowerText
    type: System.String
    description: Lower text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IModelDocExtension.InsertBOMBalloon
  - INote.GetBalloonInfo
  - INote.GetBalloonOptions
  - INote.GetBalloonSize
  - INote.GetBalloonStack
  - INote.GetBalloonStyle
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
  - INote.IsBomBalloon
  - INote.IsStackedBalloon
  - INote.IsStackedBalloonMaster
  - INote.SetBalloon
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - setbomballoontext
  - bom
  - balloon
  - text
  - upper
  - style
  - int32
  - string
  - lower
  - boolean
  - vba
  - properties
  - vb
  - net
---

# INote.SetBomBalloonText

Sets the text for this BOM balloon note.

## Signature

```csharp
System.Boolean SetBomBalloonText( 
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
)
```
## Parameters

- `UpperTextStyle` (System.Int32): Style for the upper text as defined in swDetailingNoteTextContent_e
- `UpperText` (System.String): Upper text
- `LowerTextStyle` (System.Int32): Style for the lower text as defined in swDetailingNoteTextContent_e
- `LowerText` (System.String): Lower text

## Return Value

True if successfully returned, false if not

## Remarks

If the upper- or lower-text style is swBalloonTextQuantity or swBalloonTextItemNumber, then SOLIDWORKS ignores the specified upper or lower text.

## Examples

- Set BOM Balloon Text (VBA) (Set_BOM_Balloon_Example_VB.htm)
- Get Balloon Properties (C#) (Get_BOM_Balloon_Properties_Example_CSharp.htm)
- Get Balloon Properties (VB.NET) (Get_BOM_Balloon_Properties_Example_VBNET.htm)
- Get Balloon Properties (VBA) (Get_BOM_Balloon_Properties_Example_VB.htm)

## See Also

- `IModelDocExtension.InsertBOMBalloon`
- `INote.GetBalloonInfo`
- `INote.GetBalloonOptions`
- `INote.GetBalloonSize`
- `INote.GetBalloonStack`
- `INote.GetBalloonStyle`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBalloon`