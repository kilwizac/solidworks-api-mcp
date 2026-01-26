---
type: method
interface: ISheet
member: GetProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetSize
  - ISheet.GetTemplateName
  - ISheet.IGetProperties
  - ISheet.IPageSetup
  - ISheet.PageSetup
  - ISheet.SetProperties
  - ISheet.SetScale
  - ISheet.SetSize
  - ISheet.SetTemplateName
keywords:
  - getproperties
  - isheet
  - sheet
  - properties
  - object
  - number
  - lines
  - flat
  - pattern
  - drawing
  - view
  - boundary
  - box
  - sketch
  - vb
  - net
  - vba
---

# ISheet.GetProperties

Obsolete. Superseded by ISheet::GetProperties2.

## Signature

```csharp
System.Object GetProperties()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of seven doubles:
[
paperSize, templateIn, scale1, scale2, firstAngle, width, height, sameCustomPrp
]
where:
paperSize
= Paper size; this value is a long or integer packed into a double and is represented by the
swDwgPaperSizes_e
enumeration
templateIn
= Template index; this value is a long or integer packed into a double and is represented by the
swDwgTemplates_e
enumeration
scale1
= Scale numerator
scale2
= Scale denominator
firstAngle
= Value is a boolean packed into a double and returns true if the sheet is using first angle projection and false if not
width
= Paper width
height
= Paper height
NOTE
:
To ensure a correct return value, open the document as read-write or read-only. Insufficient information is available if you open the document as view-only.
You can also use
ISheet::GetSize
to get the size of the sheet and the standard sheet size.

## Examples

- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (C#) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_CSharp.htm)
- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VB.NET) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VBNET.htm)
- Get the Number of Lines in Flat-pattern Drawing View's Boundary-box Sketch (VBA) (Get_Number_of_Lines_Flat-pattern_Drawing_View_Boundary-box_Sketch_Example_VB.htm)

## See Also

- `ISheet.GetSize`
- `ISheet.GetTemplateName`
- `ISheet.IGetProperties`
- `ISheet.IPageSetup`
- `ISheet.PageSetup`
- `ISheet.SetProperties`
- `ISheet.SetScale`
- `ISheet.SetSize`
- `ISheet.SetTemplateName`