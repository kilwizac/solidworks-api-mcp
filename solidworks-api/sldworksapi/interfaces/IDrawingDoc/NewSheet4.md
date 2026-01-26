---
type: method
interface: IDrawingDoc
member: NewSheet4
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name to be given to the new drawing sheet
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper as defined in swDwgPaperSizes_e ; valid only if TemplateIn is swDwgTemplates_e.swDwgTemplateNone
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
    description: True for first angle projection, false for third angle projection
  -
    name: TemplateName
    type: System.String
    description: Name of custom template with full directory path; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateCustom
  -
    name: Width
    type: System.Double
    description: Paper width; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Paper height; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
  -
    name: PropertyViewName
    type: System.String
    description: Name of view containing the model from which to get custom property values
  -
    name: ZoneLeftMargin
    type: System.Double
    description: Zone area left margin; distance from drawing sheet's left edge
  -
    name: ZoneRightMargin
    type: System.Double
    description: Zone area right margin; distance from drawing sheet's right edge
  -
    name: ZoneTopMargin
    type: System.Double
    description: Zone area top margin; distance from drawing sheet's top edge
  -
    name: ZoneBottomMargin
    type: System.Double
    description: Zone area bottom margin; distance from drawing sheet's bottom edge
  -
    name: ZoneRow
    type: System.Int32
    description: Number of zone rows in the zone area of this sheet (see Remarks )
  -
    name: ZoneCol
    type: System.Int32
    description: Number of zone columns in the zone area of this sheet (see Remarks )
docset: sldworksapi
deprecated: false
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
  - IDrawingDoc.PasteSheet
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SetupSheet6
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
  - ISheet.GetDrawingZone
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - sheets
  - sheet
  - isheet
  - drawing
  - zones
  - add
  - newsheet4
  - doc
  - new
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
  - zone
  - left
  - margin
  - right
  - top
  - bottom
  - row
  - col
  - create
  - vba
  - vb
  - net
---

# IDrawingDoc.NewSheet4

Creates a new drawing sheet in this drawing document.

## Signature

```csharp
System.Boolean NewSheet4( 
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
   System.Double
ZoneLeftMargin
,
   System.Double
ZoneRightMargin
,
   System.Double
ZoneTopMargin
,
   System.Double
ZoneBottomMargin
,
   System.Int32
ZoneRow
,
   System.Int32
ZoneCol
)
```
## Parameters

- `Name` (System.String): Name to be given to the new drawing sheet
- `PaperSize` (System.Int32): Size of paper as defined in swDwgPaperSizes_e ; valid only if TemplateIn is swDwgTemplates_e.swDwgTemplateNone
- `TemplateIn` (System.Int32): Template as defined in swDwgTemplates_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `FirstAngle` (System.Boolean): True for first angle projection, false for third angle projection
- `TemplateName` (System.String): Name of custom template with full directory path; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateCustom
- `Width` (System.Double): Paper width; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
- `Height` (System.Double): Paper height; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
- `PropertyViewName` (System.String): Name of view containing the model from which to get custom property values
- `ZoneLeftMargin` (System.Double): Zone area left margin; distance from drawing sheet's left edge
- `ZoneRightMargin` (System.Double): Zone area right margin; distance from drawing sheet's right edge
- `ZoneTopMargin` (System.Double): Zone area top margin; distance from drawing sheet's top edge
- `ZoneBottomMargin` (System.Double): Zone area bottom margin; distance from drawing sheet's bottom edge
- `ZoneRow` (System.Int32): Number of zone rows in the zone area of this sheet (see Remarks )
- `ZoneCol` (System.Int32): Number of zone columns in the zone area of this sheet (see Remarks )

## Return Value

True if drawing sheet creation was successful, false if not

## Remarks

The drawing sheet can be created with zones that annotations in other views can reference. Each zone is referenced by an alphanumeric label that is defined using the Zone Editor. See the SOLIDWORKS Help for more information about drawing sheet zones.
(ZoneRow x ZoneCol) is the total number of zones in the zone area of this drawing sheet. The zone area is specified by ZoneLeftMargin, ZoneRightMargin, ZoneTopMargin, and ZoneBottomMargin.

## Examples

- Create Drawing Sheet Zones (VBA) (Create_Drawing_Sheet_Zones_Example_VB.htm)
- Create Drawing Sheet Zones (VB.NET) (Create_Drawing_Sheet_Zones_Example_VBNET.htm)
- Create Drawing Sheet Zones (C#) (Create_Drawing_Sheet_Zones_Example_CSharp.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.PasteSheet`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SetupSheet6`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`
- `ISheet.GetDrawingZone`