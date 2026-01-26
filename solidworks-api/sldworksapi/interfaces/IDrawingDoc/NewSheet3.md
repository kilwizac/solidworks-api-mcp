---
type: method
interface: IDrawingDoc
member: NewSheet3
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name to be given to the new drawing sheet
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
    description: Name of custom template with full directory path if TemplateIn is set to swDwgTemplateCustom
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
    description: Name of the drawing view containing the model custom property values
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
  - IDrawingDoc.GetCurrentSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.IGetSheetNames
  - IDrawingDoc.IReorderSheets
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet4
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
keywords:
  - newsheet3
  - idrawingdoc
  - drawing
  - doc
  - new
  - sheet3
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
---

# IDrawingDoc.NewSheet3

Obsolete. Superseded by IDrawingDoc::NewSheet4.

## Signature

```csharp
System.Boolean NewSheet3( 
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

- `Name` (System.String): Name to be given to the new drawing sheet
- `PaperSize` (System.Int32): Size of paper if using swDwgTemplateNone as defined in swDwgPaperSizes_e
- `TemplateIn` (System.Int32): Template as defined in swDwgTemplates_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `FirstAngle` (System.Boolean): True for first angle projection, false otherwise
- `TemplateName` (System.String): Name of custom template with full directory path if TemplateIn is set to swDwgTemplateCustom
- `Width` (System.Double): Paper width if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
- `Height` (System.Double): Paper height if TemplateIn is set to swDwgTemplateNone or swDwgPapersUserDefined
- `PropertyViewName` (System.String): Name of the drawing view containing the model custom property values

## Return Value

True if drawing sheet creation was successful, false if not

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.IGetSheetNames`
- `IDrawingDoc.IReorderSheets`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet4`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`