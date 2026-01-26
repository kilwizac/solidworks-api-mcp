---
type: method
interface: IDrawingDoc
member: SetupSheet5
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
    description: Paper width; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Paper height if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
  -
    name: PropertyViewName
    type: System.String
    description: Name of view containing the model from which to get custom property values
  -
    name: RemoveModifiedNotes
    type: System.Boolean
    description: True to delete modified notes, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateSheet
  - IDrawingDoc.EditSheet
  - IDrawingDoc.GetEditSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.IGetSheetNames
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.NewSheet3
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
keywords:
  - setupsheet5
  - idrawingdoc
  - drawing
  - doc
  - setup
  - sheet5
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
  - remove
  - modified
  - notes
---

# IDrawingDoc.SetupSheet5

Obsolete. Superseded by IDrawingDoc::SetupSheet6.

## Signature

```csharp
System.Boolean SetupSheet5( 
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
,
   System.Boolean
RemoveModifiedNotes
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
- `Width` (System.Double): Paper width; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
- `Height` (System.Double): Paper height if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
- `PropertyViewName` (System.String): Name of view containing the model from which to get custom property values
- `RemoveModifiedNotes` (System.Boolean): True to delete modified notes, false to not

## Return Value

Unknown.

## Remarks

Call
IModelDoc2::ForceRebuild3
after calling IDrawingDoc::SetupSheet5 to update any changes to first angle/third angle projections in the drawing views.
If you specify a different filename for TemplateName than what is currently being used by SOLIDWORKS, then SOLIDWORKS updates the sheet format.

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.IGetSheetNames`
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.NewSheet3`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`