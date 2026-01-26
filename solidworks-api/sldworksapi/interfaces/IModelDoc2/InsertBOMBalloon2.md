---
type: method
interface: IModelDoc2
member: InsertBOMBalloon2
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
    description: Text style for the upper text of the balloon as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Text string to be placed in the upper text of the balloon
  -
    name: LowerTextStyle
    type: System.Int32
    description: Text style for the lower text of the balloon as defined in swBalloonTextContent_e
  -
    name: LowerText
    type: System.String
    description: Text string to be placed in the lower text of the balloon
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IInsertBOMBalloon2
keywords:
  - insertbomballoon2
  - imodeldoc2
  - model
  - doc2
  - insert
  - bom
  - balloon2
  - style
  - int32
  - size
  - upper
  - text
  - string
  - lower
  - object
  - balloon
  - vba
---

# IModelDoc2.InsertBOMBalloon2

Obsolete. Superseded by IModelDocExtension::InsertBOMBalloon.

## Signature

```csharp
System.Object InsertBOMBalloon2( 
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
)
```
## Parameters

- `Style` (System.Int32): Balloon style as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size as defined in swBalloonFit_e
- `UpperTextStyle` (System.Int32): Text style for the upper text of the balloon as defined in swBalloonTextContent_e
- `UpperText` (System.String): Text string to be placed in the upper text of the balloon
- `LowerTextStyle` (System.Int32): Text style for the lower text of the balloon as defined in swBalloonTextContent_e
- `LowerText` (System.String): Text string to be placed in the lower text of the balloon

## Return Value

Newly created note

## Examples

- Insert BOM Balloon (VBA) (Insert_BOM_Balloon_Example_VB.htm)

## See Also

- `IModelDoc2.IInsertBOMBalloon2`