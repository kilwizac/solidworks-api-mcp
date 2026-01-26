---
type: method
interface: IDrawingDoc
member: SetupSheet6
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the sheet to set up
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper as defined in swDwgPaperSizes_e ; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone
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
    name: RemoveModifiedNotes
    type: System.Boolean
    description: True to delete modified notes, false to not
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
  - IDrawingDoc.GetEditSheet
  - IDrawingDoc.GetSheetCount
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.NewSheet4
  - IDrawingDoc.PasteSheet
  - IDrawingDoc.ReorderSheets
  - IDrawingDoc.SheetNext
  - IDrawingDoc.SheetPrevious
  - ISheet
  - ISheet.GetDrawingZone
keywords:
  - drawing
  - sheets
  - see
  - also
  - isheet
  - up
  - drawings
  - idrawingdoc
  - sheet
  - zones
  - setupsheet6
  - doc
  - setup
  - sheet6
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
  - modify
  - multiple
  - setups
---

# IDrawingDoc.SetupSheet6

Sets up the specified drawing sheet.

## Signature

```csharp
System.Boolean SetupSheet6( 
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

- `Name` (System.String): Name of the sheet to set up
- `PaperSize` (System.Int32): Size of paper as defined in swDwgPaperSizes_e ; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone
- `TemplateIn` (System.Int32): Template as defined in swDwgTemplates_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `FirstAngle` (System.Boolean): True for first angle projection, false for third angle projection
- `TemplateName` (System.String): Name of custom template with full directory path; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateCustom
- `Width` (System.Double): Paper width; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
- `Height` (System.Double): Paper height; valid only if TemplateIn is set to swDwgTemplates_e.swDwgTemplateNone or PaperSize is set to swDwgPaperSizes_e.swDwgPapersUserDefined
- `PropertyViewName` (System.String): Name of view containing the model from which to get custom property values
- `RemoveModifiedNotes` (System.Boolean): True to delete modified notes, false to not
- `ZoneLeftMargin` (System.Double): Zone area left margin; distance from drawing sheet's left edge
- `ZoneRightMargin` (System.Double): Zone area right margin; distance from drawing sheet's right edge
- `ZoneTopMargin` (System.Double): Zone area top margin; distance from drawing sheet's top edge
- `ZoneBottomMargin` (System.Double): Zone area bottom margin; distance from drawing sheet's bottom edge
- `ZoneRow` (System.Int32): Number of zone rows in the zone area of this sheet (see Remarks )
- `ZoneCol` (System.Int32): Number of zone columns in the zone area of this sheet (see Remarks )

## Return Value

True if drawing sheet setup is successful, false if not

## Remarks

After calling this method, call
IModelDoc2::ForceRebuild3
to update any changes to first angle/third angle projections in the drawing views.
If you specify a different filename for TemplateName than what is currently being used by SOLIDWORKS, then SOLIDWORKS updates the sheet format.
The drawing sheet can be set up with zones that annotations in other views can reference. Each zone is referenced by an alphanumeric label that is defined using the Zone Editor. See the SOLIDWORKS Help for more information about drawing sheet zones.
Multiplying ZoneRow by ZoneCol equals the total number of zones in the zone area of this drawing sheet. The zone area is specified by ZoneLeftMargin, ZoneRightMargin, ZoneTopMargin, and ZoneBottomMargin.
To modify the setups of multiple drawing sheets with just one call to IDrawingDoc::SetupSheet6, call
IDrawingDoc::SetSelectedSheets
before calling IDrawingDoc::SetupSheet6.

## Examples

- Create Drawing Sheet Zones (VBA) (Create_Drawing_Sheet_Zones_Example_VB.htm)
- Create Drawing Sheet Zones (VB.NET) (Create_Drawing_Sheet_Zones_Example_VBNET.htm)
- Create Drawing Sheet Zones (C#) (Create_Drawing_Sheet_Zones_Example_CSharp.htm)
- Modify Multiple Drawing Sheets Setups (C#) (Modify_Multiple_Drawing_Sheets_Setups_Example_CSharp.htm)
- Modify Multiple Drawing Sheets Setups (VB.NET) (Modify_Multiple_Drawing_Sheets_Setups_Example_VBNET.htm)
- Modify Multiple Drawing Sheets Setups (VBA) (Modify_Multiple_Drawing_Sheets_Setups_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetEditSheet`
- `IDrawingDoc.GetSheetCount`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.NewSheet4`
- `IDrawingDoc.PasteSheet`
- `IDrawingDoc.ReorderSheets`
- `IDrawingDoc.SheetNext`
- `IDrawingDoc.SheetPrevious`
- `ISheet`
- `ISheet.GetDrawingZone`