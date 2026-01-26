---
type: method
interface: ISheet
member: GetProperties2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetSize
  - ISheet.GetTemplateName
  - ISheet.PageSetup
  - ISheet.SetProperties2
  - ISheet.SetSize
  - ISheet.SetTemplateName
keywords:
  - sheet
  - see
  - also
  - isheet
  - properties
  - sheets
  - getproperties2
  - properties2
  - object
  - drawing
  - vb
  - net
  - vba
---

# ISheet.GetProperties2

Gets the properties for this sheet.

## Signature

```csharp
System.Object GetProperties2()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of eight doubles:
[
paperSize, templateIn, scale1, scale2, firstAngle, width, height, sameCustomProp
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
= Value is a boolean packed into a double and returns true if the sheet is using first angle projection; false if not
width
= Paper width
height
= Paper height
sameCustomProp
= Value is a boolean packed into a double and returns true if the
Same as sheet specified in Document Properties
in the Sheet Properties dialog is selected, false if not
NOTES
:
To ensure a correct return value, open the document as read-write or read-only. Insufficient information is available if you open the document as view-only.
You can also use
ISheet::GetSize
to get the size of the sheet and the standard sheet size.

## Examples

- Set Drawing Sheet Properties (C#) (Set_Drawing_Sheet_Properties_Example_CSharp.htm)
- Set Drawing Sheet Properties (VB.NET) (Set_Drawing_Sheet_Properties_Example_VBNET.htm)
- Set Drawing Sheet Properties (VBA) (Set_Drawing_Sheet_Properties_Example_VB.htm)

## See Also

- `ISheet.GetSize`
- `ISheet.GetTemplateName`
- `ISheet.PageSetup`
- `ISheet.SetProperties2`
- `ISheet.SetSize`
- `ISheet.SetTemplateName`