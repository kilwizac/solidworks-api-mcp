---
type: method
interface: ISheet
member: IGetProperties
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties
  - ISheet.GetSize
  - ISheet.GetTemplateName
  - ISheet.IPageSetup
  - ISheet.PageSetup
  - ISheet.SetProperties
  - ISheet.SetScale
  - ISheet.SetSize
  - ISheet.SetTemplateName
keywords:
  - properties
  - sheets
  - sheet
  - see
  - also
  - isheet
  - igetproperties
  - double
---

# ISheet.IGetProperties

Obsolete. Superseded by ISheet::GetProperties2.

## Signature

```csharp
System.Double IGetProperties()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of seven doubles:
[
paperSize, templateIn, scale1, scale2, firstAngle, width, height
]
where:
paperSize
= Paper size. This value is a long or integer packed into a double and is represented by the
swDwgPaperSizes_e
enumeration.
templateIn
= Template index. This value is a long or integer packed into a double and is represented by the
swDwgTemplates_e
enumeration.
scale1
= Scale numerator.
scale2
= Scale denominator.
firstAngle
= Value is a Boolean packed into a double and returns true if the sheet is using first angle projection and false if not.
width
= Paper width.
height
= Paper height.
NOTE
:
To ensure a correct return value, open the document as read-write or read-only. Insufficient information is available if you open the document as view-only.
You can also use
ISheet::GetSize
to get the size of the sheet and the standard sheet size.

## See Also

- `ISheet.GetProperties`
- `ISheet.GetSize`
- `ISheet.GetTemplateName`
- `ISheet.IPageSetup`
- `ISheet.PageSetup`
- `ISheet.SetProperties`
- `ISheet.SetScale`
- `ISheet.SetSize`
- `ISheet.SetTemplateName`