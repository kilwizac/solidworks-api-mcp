---
type: method
interface: ISheet
member: SetProperties2
returns: void
parameters:
  -
    name: PaperSz
    type: System.Int32
    description: Paper size as defined in swDwgPaperSizes_e (see Remarks )
  -
    name: Templ
    type: System.Int32
    description: Template as defined in swDwgTemplates_e (see Remarks )
  -
    name: Scale1
    type: System.Double
    description: Scale numerator (see Remarks )
  -
    name: Scale2
    type: System.Double
    description: Scale denominator (see Remarks )
  -
    name: FirstAngle
    type: System.Boolean
    description: True if you want first angle projection, false if not
  -
    name: Width
    type: System.Double
    description: Custom paper width if PaperSz = swDwgPaperSizes_e.swDwgPaperUserDefined (see Remarks )
  -
    name: Height
    type: System.Double
    description: Custom paper height if PaperSz = swDwgPaperSizes_e.swDwgPaperUserDefined (see Remarks )
  -
    name: SameCustomPropAsSheetInDocProp
    type: System.Boolean
    description: True to select the Same as sheet specified in Document Properties check box in the Sheet Properties dialog, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties2
  - ISheet.GetSize
  - ISheet.GetTemplateName
  - ISheet.PageSetup
  - ISheet.SetTemplateName
keywords:
  - sheet
  - see
  - also
  - isheet
  - properties
  - sheets
  - setproperties2
  - properties2
  - paper
  - sz
  - int32
  - templ
  - scale1
  - double
  - scale2
  - first
  - angle
  - boolean
  - width
  - height
  - same
  - custom
  - prop
  - doc
  - void
  - drawing
  - vb
  - net
  - vba
---

# ISheet.SetProperties2

Sets the properties for this sheet.

## Signature

```csharp
void SetProperties2( 
   System.Int32
PaperSz
,
   System.Int32
Templ
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
   System.Double
Width
,
   System.Double
Height
,
   System.Boolean
SameCustomPropAsSheetInDocProp
)
```
## Parameters

- `PaperSz` (System.Int32): Paper size as defined in swDwgPaperSizes_e (see Remarks )
- `Templ` (System.Int32): Template as defined in swDwgTemplates_e (see Remarks )
- `Scale1` (System.Double): Scale numerator (see Remarks )
- `Scale2` (System.Double): Scale denominator (see Remarks )
- `FirstAngle` (System.Boolean): True if you want first angle projection, false if not
- `Width` (System.Double): Custom paper width if PaperSz = swDwgPaperSizes_e.swDwgPaperUserDefined (see Remarks )
- `Height` (System.Double): Custom paper height if PaperSz = swDwgPaperSizes_e.swDwgPaperUserDefined (see Remarks )
- `SameCustomPropAsSheetInDocProp` (System.Boolean): True to select the Same as sheet specified in Document Properties check box in the Sheet Properties dialog, false to not (see Remarks )

## Return Value

Unknown.

## Remarks

If you...
Then...
Specify a custom template
The current custom template is used by this sheet until you call
ISheet::SetTemplateName
and pass in a different custom template name.
Specify a value for Templ that does not match PaperSz
The template does not fit the paper size. Templ does not override the PaperSz setting.
Change the scale of the sheet using Scale1 and Scale2
Any drawing view that is set to use the sheet's scale takes the new scale setting.
Set SameCustomPropAsSheetInDocProp to true
The
Tools > Options > Document Properties > Drawing Sheets > Use custom property values from the sheet
check box must be preselected.
NOTE:
You can also use
ISheet::SetSize
to set the size of the sheet and the standard sheet size.

## Examples

- Set Drawing Sheet Properties (C#) (Set_Drawing_Sheet_Properties_Example_CSharp.htm)
- Set Drawing Sheet Properties (VB.NET) (Set_Drawing_Sheet_Properties_Example_VBNET.htm)
- Set Drawing Sheet Properties (VBA) (Set_Drawing_Sheet_Properties_Example_VB.htm)

## See Also

- `ISheet.GetProperties2`
- `ISheet.GetSize`
- `ISheet.GetTemplateName`
- `ISheet.PageSetup`
- `ISheet.SetTemplateName`