---
type: method
interface: IDrawingDoc
member: AutoBalloon3
returns: System.Object
parameters:
  -
    name: Layout
    type: System.Int32
    description: Layout style of the balloons as defined by swBalloonLayoutType_e or specify -1 for this argument to use the document default layout style
  -
    name: IgnoreMultiple
    type: System.Boolean
    description: True to apply a balloon to only one instance of a component, false to apply balloons to all instances of that component
  -
    name: Style
    type: System.Int32
    description: Style of the balloons as defined by swBalloonStyle_e or specify -1 to use the document default balloon style
  -
    name: Size
    type: System.Int32
    description: Fit of balloon as defined by swBalloonFit_e or specify -1 to use the document default balloon fit
  -
    name: UpperTextContent
    type: System.Int32
    description: Upper-text content style as defined by swBalloonTextContent_e or specify -1 to use the document default upper text content
  -
    name: UpperText
    type: System.String
    description: Text for upper balloon
  -
    name: LowerTextContent
    type: System.Int32
    description: Lower-text content style as defined by swBalloonTextContent_e or specify -1 to use the document default lower text content NOTE: This and the next argument are only effective when Style is set to swBS_SplitCirc. See the SOLIDWORKS Help for additional details about autoballoons.
  -
    name: LowerText
    type: System.String
    description: Text for lower balloon
  -
    name: Layername
    type: System.String
    description: Name of the layer for this balloon
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IModelDocExtension.InsertBOMBalloon
keywords:
  - autoballoon3
  - idrawingdoc
  - drawing
  - doc
  - auto
  - balloon3
  - layout
  - int32
  - ignore
  - multiple
  - boolean
  - style
  - size
  - upper
  - text
  - content
  - string
  - lower
  - layername
  - object
  - insert
  - autoballoons
  - vba
---

# IDrawingDoc.AutoBalloon3

Obsolete. Superseded by IDrawingDoc::AutoBalloon4.

## Signature

```csharp
System.Object AutoBalloon3( 
   System.Int32
Layout
,
   System.Boolean
IgnoreMultiple
,
   System.Int32
Style
,
   System.Int32
Size
,
   System.Int32
UpperTextContent
,
   System.String
UpperText
,
   System.Int32
LowerTextContent
,
   System.String
LowerText
,
   System.String
Layername
)
```
## Parameters

- `Layout` (System.Int32): Layout style of the balloons as defined by swBalloonLayoutType_e or specify -1 for this argument to use the document default layout style
- `IgnoreMultiple` (System.Boolean): True to apply a balloon to only one instance of a component, false to apply balloons to all instances of that component
- `Style` (System.Int32): Style of the balloons as defined by swBalloonStyle_e or specify -1 to use the document default balloon style
- `Size` (System.Int32): Fit of balloon as defined by swBalloonFit_e or specify -1 to use the document default balloon fit
- `UpperTextContent` (System.Int32): Upper-text content style as defined by swBalloonTextContent_e or specify -1 to use the document default upper text content
- `UpperText` (System.String): Text for upper balloon
- `LowerTextContent` (System.Int32): Lower-text content style as defined by swBalloonTextContent_e or specify -1 to use the document default lower text content NOTE: This and the next argument are only effective when Style is set to swBS_SplitCirc. See the SOLIDWORKS Help for additional details about autoballoons.
- `LowerText` (System.String): Text for lower balloon
- `Layername` (System.String): Name of the layer for this balloon

## Return Value

Array of newly created notes

## Remarks

This method automatically creates the BOM balloons for the selected drawing views. If a drawing sheet is selected, BOM balloons are automatically created for all of the drawing views on that drawing sheet.
To get or set default values for...
Use...
Layout
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingAutoBalloonLayout, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
- or -
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingAutoBalloonLayout, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonLayoutType_e.<
Value
>)
Style
IModelDocExtension::GetUserPreferenceInteger((swUserPreferenceIntegerValue_e.swDetailingBOMBalloonStyle, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
- or -
IModelDocExtension::SetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swDetailingBOMBalloonFit, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonFit_e.<
Value
>)
Size
IModelDocExtension::GetUserPreferenceInteger((swUserPreferenceIntegerValue_e.swDetailingBOMBalloonFit, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
- or -
(swUserPreferenceIntegerValue_e.swDetailingBOMStackedBalloonFit, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonFit_e.<
Value
>)
UpperTextContent
IModelDocExtension::GetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
-  or -
IModelDocExtension::SetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
LowerTextContent
IModelDocExtension::GetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
- or -
IModelDocExtension::SetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
This method also allows you to get only the balloons just created.

## Examples

- Insert AutoBalloons (VBA) (Insert_AutoBalloons_Example_VB_AutoBallooon3_VB.htm)

## See Also

- `IModelDocExtension.InsertBOMBalloon`