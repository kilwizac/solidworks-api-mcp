---
type: method
interface: ISheet
member: SetProperties
returns: void
parameters:
  -
    name: PaperSz
    type: System.Int32
    description: Paper size as defined in swDwgPaperSizes_e
  -
    name: Templ
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
    description: True if you want first angle projection, false if not
  -
    name: Width
    type: System.Double
    description: Custom paper width if PaperSz = swDwgPaperSizes_e.swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Custom paper height if PaperSz = swDwgPaperSizes_e.swDwgPapersUserDefined
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties
  - ISheet.GetSize
  - ISheet.GetTemplateName
  - ISheet.IGetProperties
  - ISheet.IPageSetup
  - ISheet.PageSetup
  - ISheet.SetTemplateName
keywords:
  - setproperties
  - isheet
  - sheet
  - properties
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
  - void
---

# ISheet.SetProperties

Obsolete. Superseded by ISheet::SetProperties2.

## Signature

```csharp
void SetProperties( 
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
)
```
## Parameters

- `PaperSz` (System.Int32): Paper size as defined in swDwgPaperSizes_e
- `Templ` (System.Int32): Template as defined in swDwgTemplates_e
- `Scale1` (System.Double): Scale numerator
- `Scale2` (System.Double): Scale denominator
- `FirstAngle` (System.Boolean): True if you want first angle projection, false if not
- `Width` (System.Double): Custom paper width if PaperSz = swDwgPaperSizes_e.swDwgPapersUserDefined
- `Height` (System.Double): Custom paper height if PaperSz = swDwgPaperSizes_e.swDwgPapersUserDefined

## Return Value

Unknown.

## Remarks

If you specify a custom template, then the current custom template is used by this sheet until you call
ISheet::SetTemplateName
and pass in a different custom template name.
NOTE
:
If Templ does not match the PaperSz specification, then you get a template that does not fit the paper size. This parameter does not override the PaperSz setting. Also, if you change the scale of the sheet using Scale1 and Scale2, then any drawing view that is set to use the sheet's scale takes the new scale setting.
You can also use
ISheet::SetSize
to set the size of the sheet and the standard sheet size.

## See Also

- `ISheet.GetProperties`
- `ISheet.GetSize`
- `ISheet.GetTemplateName`
- `ISheet.IGetProperties`
- `ISheet.IPageSetup`
- `ISheet.PageSetup`
- `ISheet.SetTemplateName`