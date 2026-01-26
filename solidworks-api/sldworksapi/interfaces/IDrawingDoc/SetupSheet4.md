---
type: method
interface: IDrawingDoc
member: SetupSheet4
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name for the sheet
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper if using swDwgTemplateNone as defined in swDwgPaperSizes_e
  -
    name: TemplateIn
    type: System.Int32
    description: Template as defined in swDwgTemplates_e
  -
    name: Scale1
    type: System.Double
    description: Scale numerator
  -
    name: Scale2
    type: System.Double
    description: Scale denominator
  -
    name: FirstAngle
    type: System.Boolean
    description: True for first angle projection, false otherwise
  -
    name: TemplateName
    type: System.String
    description: Name of custom template with full directory path if using swDwgTemplateCustom
  -
    name: Width
    type: System.Double
    description: Paper width if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Paper height if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
  -
    name: PropertyViewName
    type: System.String
    description: Name of view containing the model from which to get custom property values
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - setupsheet4
  - idrawingdoc
  - drawing
  - doc
  - setup
  - sheet4
  - name
  - string
  - paper
  - size
  - int32
  - template
  - scale1
  - double
  - scale2
  - first
  - angle
  - boolean
  - width
  - height
  - view
  - change
  - sheet
  - vba
---

# IDrawingDoc.SetupSheet4

Obsolete. Superseded by IDrawingDoc::SetupSheet5.

## Signature

```csharp
System.Boolean SetupSheet4( 
   System.String
Name
,
   System.Int32
PaperSize
,
   System.Int32
TemplateIn
,
   System.Double
Scale1
,
   System.Double
Scale2
,
   System.Boolean
FirstAngle
,
   System.String
TemplateName
,
   System.Double
Width
,
   System.Double
Height
,
   System.String
PropertyViewName
)
```
## Parameters

- `Name` (System.String): Name for the sheet
- `PaperSize` (System.Int32): Size of paper if using swDwgTemplateNone as defined in swDwgPaperSizes_e
- `TemplateIn` (System.Int32): Template as defined in swDwgTemplates_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `FirstAngle` (System.Boolean): True for first angle projection, false otherwise
- `TemplateName` (System.String): Name of custom template with full directory path if using swDwgTemplateCustom
- `Width` (System.Double): Paper width if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
- `Height` (System.Double): Paper height if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
- `PropertyViewName` (System.String): Name of view containing the model from which to get custom property values

## Return Value

True if set successfully, false if not

## Remarks

Call
IModelDoc2::ForceRebuild3
after calling IDrawingDoc::SetupSheet4 to update any changes to first angle/third angle projections in the drawing views.
If you specify a different filename for TemplateName than what is currently being used by SOLIDWORKS, then SOLIDWORKS updates the sheet format.

## Examples

- Change Setup of Drawing Sheet (VBA) (Set_Up_Drawing_Sheet_Example_VB.htm)